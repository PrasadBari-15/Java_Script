const CSK =["MSDhoni","Jadeja","Ruturaj","Dube"]
const MI =["Rohit","Surya","Bumbhra","Tilak"]

//CSK.push(MI)
//console.log(CSK)

const India = CSK.concat(MI)
console.log(India)

const RCB = new Array('Virat','Rajat','Siraj')

const allHeros = [...CSK,...MI,...RCB]
console.log(allHeros)

const num1=[1,2,[3,4],5,6,7,[8,9,10,11],12,[13,14],15]
const num = num1.flat(Infinity)
console.log(num)

console.log(Array.isArray("Prasad"))
console.log(Array.isArray(CSK))
console.log(Array.from("Prasad"))
console.log(Array.from({name : "Prasad"}))

const score1=100
const score2 = 300
const score3 =400
console.log(Array.of(score1,score2,score3))

console.log(Array.of(10,20,30))