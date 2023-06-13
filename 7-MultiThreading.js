const { Worker } = require('worker_threads')

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./mySlowFunctionMultiThread.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

async function run() {
    const promises = []
    for (let index = 0; index < 3; index++) {
        promises.push(runService('Some info'))     
    }
    const results = await Promise.allSettled(promises)
    console.log(results)
}

run().catch(err => console.error(err))


// Note: Best practice is to use pool of workers