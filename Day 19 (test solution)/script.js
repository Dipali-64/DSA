// Problem 1: Second Largest Unique Element (Arrays + Loops)
// Given an array of integers, find the second largest unique number in the array.
// If the second largest element does not exist, print -1.
// Input
// An array of integers.
// Output
// A single integer representing the second largest unique element.
// Test Case 1
// Input: [10, 20, 20, 30, 40]
// Output: 30
// Test Case 2
// Input: [5, 5, 5]
// Output: -1

let arr = [10,20,20,30,40]
//let arr = [5,5,5]

function countfreq(arr){
    let obj = {}
    for(let i=0 ; i<=arr.length-1 ; i++)
    {
        if(obj[arr[i]] == undefined)
        {
            obj[arr[i]] = 1
        }else{
            let count = obj[arr[i]]
            count++
            obj[arr[i]] = count
        }
    }
    return obj
}

console.log(countfreq(arr))

function secondLargest(arr){
    arr.sort(function(a,b){
        a-b
    })

    let largest = arr[arr.length-1]
    let secondLargest
    for(let i = arr.length-1 ; i>=0 ; i--)
    {
        if(arr[i]<largest)
        {
            secondLargest = arr[i]
            break
        }
    }
    return secondLargest
}

console.log(secondLargest(arr))

let sl = secondLargest(arr)
let freq = countfreq(arr)
let find = false
for(let x in freq){
    if(x == sl && freq[sl] == 1){
      find = true
    }
}

if(find){
    console.log(sl)
}else{
    console.log(-1)
}


// Problem 2: Longest Consecutive Increasing Subarray (Arrays + Loops)
// Given an array of integers, find the length of the longest continuous increasing subarray.
// Input
// An array of integers.Output  Length of the longest increasing subarray.
// Test Case 1
// Input:  [1,2,3,2,3,4,5]
// Output: 4

//let arr1 = [1,2,3,2,3,4,5]
let arr1 = [11,18,16,5,3,4,5,6,7]

let sub = []
let long = sub.length
for(let i=0 ; i<=arr1.length-1 ; i++){
    let p1 = 0
    let p2 = p1+1

    while(p2 <= arr1.length)
    {
        if(arr1[p2]>arr1[p1])
        {
            sub.push(arr1[p1])
            p1++
            p2++
        }else{
            sub.push(arr1[p1])
             if(sub.length>long){
                long = sub.length
             }
             sub = []
             p1 = p2
             p2 = p2+1
       } 
    }
}

console.log(sub)
console.log(long)

// Problem 3: Boundary Sum of a 2D Matrix (2D Arrays + Nested Loops)
// You are given a square matrix. Calculate the sum of boundary elements only
// (first row, last row, first column, last column).Input  A 2D square matrix.
// OutputSum of boundary elements.
// Test Case 1
// Input:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] Output: 40
// Test Case 2
// Input:
// [[5, 5], [5, 5]]
// Output: 20

// Problem 4: Group Objects by Property (Objects + Arrays + Loops)
// Given an array of objects representing students with name and grade, group students by their grade.
// Input
// An array of objects.
// Output
// An object where keys are grades and values are arrays of student
//  names.
// Test Case 1
// Input:
// [{name: "Amit", grade: "A"}, {name: "Riya", grade: "B"}, {name: "	, grade: "A"}]
// Output:
// {A: ["Amit", "Suresh"], B: ["Riya"]}





// Problem 5: Spiral Traversal of a 2D Array (2D Arrays + Logic)Given a 2D matrix, print elements in spiral order starting from the top-left corner.
// InputA 2D array.
// OutputAn array of elements in spiral order.
// Test Case 1
// Input:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Test Case 2
// Input:
// [[1, 2], [3, 4]]Output: [1, 2, 4, 3]