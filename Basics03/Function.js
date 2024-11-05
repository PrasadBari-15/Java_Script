console.log("++++Functions++++");

function Greeting(){
    console.log("Good Morning")
}

Greeting();
Greeting();

//Parameterize Function
function AddNo(num1,num2){
    let result =num1+num2
    return result;
}

console.log(AddNo(1,3))
const result =AddNo(4,"8")  // treated as string
console.log(result)
console.log(4,null)

function MUL(num1, num2){
    return num1*num2;
}
console.log(MUL(4,2))

function isLoggedin(username){
    return `${username} just logged in`
}
console.log(isLoggedin("Prasad"))
console.log(isLoggedin())

function logedin(user){
    if(!user){                   //---> (!user) = (user === undefined) 
        //console.log("Please enter user name")
        // return
        return `Please enter user name`
    }
    return `${user} just logged in`
}

console.log(logedin("Prasad"))
console.log(logedin());

function logoff(name = "Ram"){
    if(!name){                   //---> (!user) = (user === undefined) 
        //console.log("Please enter user name")
        // return
        return `Please enter user name`
    }
    return `${name} just logged in`;
}
console.log(logoff("prasad"))
console.log(logoff())
console.log(logoff(""))
