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