console.log(1)
setTimeout(() => {console.log(4)}, 0)
console.log(2)
console.log(3)


// The Event loop pushes the next event to the stack once that the stack is clear

// 1 -> setTimeout -> 2 -> 3
// setTimeout -> 2 -> 3
// 2 -> 3
// 3
//
// 4