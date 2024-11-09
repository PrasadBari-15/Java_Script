const user ={
    name : " Prasad",
    roll : 201,

    welcome : function(){
        console.log(`${this.name}, welcome here .`)
        //console.log(this)
    }
}
user.welcome()
user.name = "Karan"
user.welcome()
console.log(this)

function classs(){
    console.log(this)
    //console.log(this.name)
}
classs()

/////// Arrow Function ///////
//1. Basic Arrow Function
const add = (num1,num2) => {
    return num1+num2;
}
console.log(add(4,6));

//2. impleset return => no need of return and { }
const sub =(num1,num2) => (num1-num2)
console.log(sub(5,2))

const mul = (num1,num2)=>({name:"prasad"})
mul(1,5)