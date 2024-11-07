function Bucket(...num1){
    return num1
}
console.log(Bucket(500,100,200,600,250,50))

//using objects in function
//creating an object

const detail ={
    name : "Prasad",
    age :21
}

function myname(mydetail){
    console.log(`My name is ${detail.name} i'm ${detail.age} year old `)
}

myname(detail)

//Passing Array

const myarray =[10,20,30,40]
function array(getarray){
    return getarray[1]
}
console.log(array(myarray))
console.log(array([30,50,90,40]))