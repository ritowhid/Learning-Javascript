const user = {
  username: "towhid",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website`)
    // console.log(this)
  },
};
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai() {
//     let username2 = "Towhid"
//     console.log(this.username2)
// }
// chai()

// const chai = function () {
//     let username = "Towhid"
//     console.log(this.username2)
// }
// const chai = () => {
//   let username = "Towhid";
//   console.log(this.username2);
// };
// chai();


// // basic arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// if used curly braces have to write 'return'

// implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username3: "Towhid"})


console.log(addTwo(3, 4))

// explicit is when used return