//singleton
// object.create

//object literals

const mysym =Symbol("Key1");

const jsuser = {
    name: "Prasad",
    "Last name" : "Bari",
    age : 21,
    [mysym] :"Key3",   // using symbol in an object
    location : "jalgaon",
    email : "pbb@gmail.com",
    isLoggedin : false,
    lastlogin : ['Monday','Friday','Saturday']
}

console.log(jsuser.name)
//anothor method
console.log(jsuser["name"])
//console.log(jsuser.Last name) -->it shows error
console.log(jsuser["Last name"])
console.log(jsuser["age"]) 
console.log(jsuser[mysym])

//accessing elements from object
jsuser.email ="Prasad@123"
Object.freeze(jsuser)
jsuser.email="p@123"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello");
}
jsuser.greetingTwo =function(){
    console.log(`Hello user ,${this.name}`);
}

console.log(jsuser.greeting)
console.log(jsuser.greetingTwo)
//  console.log(jsuser.greeting())
//  console.log(jsuser.greetingTwo())