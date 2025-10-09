// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); // this functin invoked but its didn't know where to stop, thats why i have to use ; to end this.

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('Towhid');
