// stack (stores premetive data type)
// heap (Stores nom-premetive data type)

//stack--
console.log("...For Stack ....") // call by value original value does not change
let user= "Prasad"
let user2=user   // it create copy of value stored in user
console.log(user)
console.log(user2)

user2 = "Bari"    //operation performed on copy so only copied value is cjange original vlaue does not change
console.log(user)
console.log(user2)

//Heap --
console.log("...Heap...")

let me={
    email : "me@gmail.com",
    upi : "me@ybl"
};

let you = me //original value is passed
console.log(me.email)
console.log(you.email)

you.email="you@gmail.com";  // original value also changed

console.log(me.email)
console.log(you.email)