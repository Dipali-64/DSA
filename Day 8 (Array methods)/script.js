let arr = []
// arr[0] = "apple"
// arr[1] = "banana"

// arr[3] = "mango"
// console.log(arr)

//length => it returns the count of total elements in an array
//push() => it is used to insert the element from end of an array
//unshift() =>  it is used to insert an elemnet from start of an array

arr.push("Apple")
arr.push("Mango")
arr.push("Watermelon")
arr.unshift("kivi")
arr.unshift("banana1")
arr.unshift("banana2")
arr.unshift("banana3")
console.log(arr)

//pop() => it is used to remove element from end of an arr
//shift() => it is used to remove element from start of an arr
let abc = arr.pop()
arr.shift()
arr.shift()
console.log(abc)
console.log(arr)

let names = ["manoj","rahul","kumar","jayesh","mohit","rahul"]

let names1 = ["Divya","monica","sanjeevani","anam"]

console.log(names.at(3))

let names2 = names.concat(names1)
console.log(names2)

console.log(names2.indexOf("Divya"))
console.log(names2.indexOf("rahul"))
console.log(names2.lastIndexOf("rahul"))

console.log(names2.includes("monica"))
console.log(names2.includes("dipali"))

let animals = ["ant","bison","camel","duck","elephant","lion","tiger","Zebra","cat","dog"]
console.log(animals)
animals.splice(3,4)
let rev = animals.toReversed()
console.log(animals)
console.log(rev)

let num = [1,2,3,4,5,6]
console.log(num.toString())