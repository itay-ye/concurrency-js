function mySlowFunction(blockTime) {
	console.time('mySlowFunction');
        const now = performance.now();
	while(performance.now() - now < blockTime) {}
	console.timeEnd('mySlowFunction');
}

let blockTime = 3000
const step = 1000
function mySlowFunctionInChunks(){
    if (blockTime > step) {
        mySlowFunction(step)
        blockTime -= step
        setImmediate(mySlowFunctionInChunks)
    } else {
        mySlowFunction(blockTime)
    }
}

mySlowFunctionInChunks()
console.log('This is the next task')



// Using setImmediate we can split the heavy process to smaller chunks and let the event loop do execute the next tasks in the queue
// Schedules the "immediate" execution of the callback after I/O events' callbacks.
// This will prevent from the heavy process from blocking the run