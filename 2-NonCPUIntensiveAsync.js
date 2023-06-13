console.log(`start: ${new Date()}`)
setTimeout(() => console.log("First", new Date()), 3000)
setTimeout(() => console.log("Second",  new Date()), 3000)
console.log('This is some other task')

// If JS is single thread, how can we execute code async?
// Although JS execution is single threaded, the engine that executes the code (v8) is not.
// Using the event loop mechanism we can execute some functions without blocking the run
// Question: what will happen when we run setTimeout with 0?
