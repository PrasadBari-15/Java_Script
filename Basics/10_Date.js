console.log("...Date...");
let myDate = new Date()
//console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createnewdate = new Date(2024,2,22)
console.log(createnewdate)
createnewdate = new Date(2024,0,22)
console.log(createnewdate)
createnewdate=new Date(2024,10,5,23,7)
console.log(createnewdate)
createnewdate = new Date("2024/01/11")
console.log(createnewdate)
createnewdate = new Date("04/11/2024")
console.log(createnewdate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(createnewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})