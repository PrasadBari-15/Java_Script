console.log("***** Data Type Conversion *****")

let a=33;
console.log("Data Type Of `a` variable is :: " + typeof a)

let b="33abc"
console.log("Data Type of 'b' variable is :: " + typeof b);

let c=Number(b);
console.log("Data Type of 'b' variable is :: " + typeof(c))
console.log(c) // op=> "NaN" coz 33abc is not in pure number form

b=undefined
c= Number(b)
console.log(typeof b)
console.log(c)

b=null
c= Number(b)
console.log(typeof b)
console.log(c)

b=true
c= Number(b)
console.log(typeof b)
console.log(c)

let Islogin=1
let IsBoolean = Boolean(Islogin)
console.log(IsBoolean);
// 1 || 2... || "any string"  => true
// 0 || "" => false

let somenumber = 23
let somestring = String(somenumber)
console.log(somestring)
console.log(typeof somestring)