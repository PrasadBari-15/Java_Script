console.log("#Strings###")

let name="Prasad"
let lastName = "Bari"

console.log(name + lastName+ "@gmail.com")

console.log(`My Name is ${name} ${lastName}.`)

const MyName = new String('Prasad Bari')
console.log(MyName[4])
console.log(MyName.__proto__)
console.log(MyName.length)
console.log(MyName.charAt(3))
console.log(MyName.indexOf('a'))
console.log(MyName.lastIndexOf)
console.log(MyName.toUpperCase)

const substr = MyName.substring(2,7)
console.log(`Substring Method -->${substr}`)

const slice = MyName.slice(5,9)
console.log(`Slicing Method-->${slice}`)

let tri ="            pr    "
let trim = tri.trim()
console.log(tri)
console.log(`Trim method-> ${trim}`)
console.log(tri.trim())

const PP= "Prasad"
console.log(PP.replace('sad','happy'))
console.log(PP)
console.log(PP.includes('Pra'))
console.log(PP.includes('tri'))