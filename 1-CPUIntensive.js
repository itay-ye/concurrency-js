function mySlowFunction(blockTime) {
	console.time('mySlowFunction');
	const now = performance.now();
	while (performance.now() - now < blockTime) { }
	console.timeEnd('mySlowFunction');
}
console.log(`start ${new Date()}`)
mySlowFunction(3000); //millisecond
mySlowFunction(3000); //millisecond
console.log('This is the next task')

// JS is running using a single thread and a call stack
// The code is executed synchronously from top to bottom
// How can we execute both function in total of 3 sec?