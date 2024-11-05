//const instauser =new Object()

const instauser ={}
instauser.id='Prasad1230'
instauser.name='prasad'

//console.log(instauser.name)

const regularuser ={
    email :"prasad12@",
    fullname :{
        username :{
            firstname : 'Prasad',
            lastname: 'Bari',
        }
    }
}
console.log(regularuser.fullname.username)

const obj1 ={name:"a",2:'b'}
const obj2 ={3:"c",4:"d"}

//merge 2 objects
// method 1
const obj3= Object.assign({},obj1,obj2)
console.log(obj3.name)
console.log(obj3[3])

const obj4 = {...obj1,...obj2}
console.log(obj4)

const user =[
    {
        id: 1,
        email: "Prasad@1234",

    },
    {
        id: 1,
        email: "Prasad@1234",

    },
    {
        id: 1,
        email: "Prasad@1234",

    },
    {
        id: 1,
        email: "Prasad@1234",

    },
]
console.log(user[1].email)

console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser))

console.log(instauser.hasOwnProperty("email"))
