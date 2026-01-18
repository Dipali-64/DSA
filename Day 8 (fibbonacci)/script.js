// Fibonnacci series

let n = 5

let a = 0
let b = 1
console.log(a)
console.log(b)

let count = 3

while(count <= n)
{
    let c = a + b
    console.log(c)
    a = b
    b = c
    count++
}

//Arrays => array is a variables or data structure that stores data in consecutive memory locations. indexing always start from 0

//          0  1  2  3  4  5  6  7  8  9
let abc = [11,12,13,14,15,16,17,18,19,20]

console.log(abc)
// console.log(abc[0])
// console.log(abc[1])
// console.log(abc[2])
// console.log(abc[3])
// console.log(abc[4])
// console.log(abc[5])
// console.log(abc[6])
// console.log(abc[7])
// console.log(abc[8])
// console.log(abc[9])

let xyz = [11,12,13,14,"moon"] 

for(let i=0 ;i <= xyz.length-1 ; i++)
{
    console.log(xyz[i])
}

let arr = ["rose","duck","lily"]

console.log(arr)
arr[3] = "sunflower"
arr[1] = "tulip"
arr[5] = "Water lily"
console.log(arr)

let str = "abcdef"
str[2] = "h"
console.log(str)