async function mySlowFunction(blockTime) {
	console.time('mySlowFunction');
        const now = performance.now();
	while(performance.now() - now < blockTime) {}
	console.timeEnd('mySlowFunction');
}


// mySlowFunction(3000)
// mySlowFunction(3000)

setTimeout(mySlowFunction,0,3000)
setTimeout(mySlowFunction,0,3000)
console.log('hey')

// Promise is not a web api
// The function in promise runs synchronously and immediately 