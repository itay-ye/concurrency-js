const { workerData, parentPort } = require('worker_threads')

function mySlowFunction(blockTime) {
	console.time('mySlowFunction');
	const now = performance.now();
	while (performance.now() - now < blockTime) { }
	console.timeEnd('mySlowFunction');
}

mySlowFunction(3000)
parentPort.postMessage(`WorkerData: ${workerData}, mySlowFunction finished running - ${new Date()}`)