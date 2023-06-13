function mySlowFunction(blockTime) {
	console.time('mySlowFunction');
        const now = performance.now();
	while(performance.now() - now < blockTime) {}
	console.timeEnd('mySlowFunction');
}

mySlowFunction(3000)