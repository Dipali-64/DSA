//There are two arrays with individual values.Write a javascript program to compute the sum of each individual index value in the given array.

array1 = [1,0,2,3,4]
array2 = [3,5,6,7,8,13]

let p1 = 0
let p2 = 0
let sum = []

while(p1<=array1.length-1 || p2<=array2.length-1)
{
  if(p1 > array1.length-1)
  {
    sum.push(array2[p2])
    p2++
  }else if(p2 > array2.length-1)
  {
    sum.push(array1[p1])
    p1++
  }else{
    let s = array1[p1] + array2[p2]
    sum.push(s)
    p1++
    p2++
  }
}

console.log(sum)

//Write a javascript program to find duplicate values in a javascript array.

arr = [8,6,3,1,6,8,9,3,1,2,3]

function freq(arr){
    let obj = {}
    for(let i=0 ; i<=arr.length-1 ; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }else{
        let count = obj[arr[i]]
        count =  count + 1
        obj[arr[i]] = count
    }
 }
    return obj
}

let count = freq(arr)
console.log(count)

let duplicate = []
for(let x in count){
    if(count[x]>1){
        duplicate.push(x)
    }
}

console.log(duplicate)