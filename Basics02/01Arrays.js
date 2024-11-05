console.log("====Arrays===")

const arr = [1,2,3,4]
console.log(arr[3])

const arr1 = ["Red","Blue","White","Orange"]
console.log(arr1)
console.log(arr1.reverse())
console.log(arr1)

const arr2 = new Array(4,2,5,8,3,7)
console.log(arr2.length)

//Methods
arr1.push("Yellow")
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.unshift('Black')
console.log(arr1)
arr1.shift()
console.log(arr1)

console.log(arr.includes(7))
console.log(arr2.indexOf(3))


//slice & splice

const n1= [1,2,3,4,5,6,7,8,9]
console.log("A ",n1)
console.log(n1.slice(0,5))

console.log(n1.splice(0,5))
console.log(n1)

// join
const n2= arr.join()
console.log(n2)
console.log(typeof n2)

console.log(arr.join(arr1))
 