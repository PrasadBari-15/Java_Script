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

