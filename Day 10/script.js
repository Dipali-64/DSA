// Clone

let arr1 = [12,14,15,6,18,95,4]
//This wiil not make a true copy

// let arr2 = arr1
// console.log("arr1 =" + arr1)
// console.log("arr2 =" + arr2)
// arr2[2] = "alpha"
// console.log("arr1 =" + arr1)
// console.log("arr2 =" + arr2)

// let clone = []
// for(let i=0 ; i<=arr1.length-1 ; i++)
// {
//     clone.push(arr1[i])
// }

// console.log(arr1)
// clone[2]="changed"
// console.log(clone)

//function => block of code it is used to perform specific task.It is executed when it is called.

function array_clone(arr){
    let clone = []
    for(let i=0 ; i<=arr.length-1 ; i++)
    {
        clone.push(arr[i])
    }
    return clone
}

console.log(array_clone(arr1))

// write a function that will return reverse of an arr

function reverse(arr){
    let rev = []
    let j = 0
    for(let i=arr.length-1 ; i >= 0 ; i--)
    {
        //rev.push(arr[i])
        rev[j] = arr[i]
        j++
    }
    return rev
}

console.log(reverse(arr1))
