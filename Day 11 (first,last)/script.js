// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function first(arr,n)
{
let ans = []
let end
  
if(n == undefined)
{
    return arr[0]
}else{
    if(n>arr.length)
    {
        end = arr.length
    }else{
       end = n
    }
   for(let i=0 ; i <= end-1 ; i++)
   {
     ans.push(arr[i])
   }
   return ans
}
}

console.log(first([1,2,3,4,5],3))
console.log(first([1,2,3,4,5]))
console.log(first([1,2,3,4,5],-2))
console.log(first([1,2,3,4,5],8))

console.log(first([8,6,5,9,2],11))
console.log(first([8,6,5,9,2],2))
console.log(first([8,6,5,9,2]))


// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr,n){
    let ans =[]
    let end 
    if(n == undefined)
    {
        return arr[arr.length-1]
    }else{
        if(n>arr.length-1)
        {
            end = 0
        }else{
            end = arr.length-n
        }
        for(let i=arr.length-1; i>=end ; i--)
        {
            ans.unshift(arr[i])
        }
        return ans
    }
}

console.log(last([7,9,0,-2]))
console.log(last([7,9,0,-2],3))
console.log(last([7,9,0,-2],6))

// another way

function last(arr,n){
    let ans = []
    let start 
    if(n==undefined){
        return arr[arr.length-1]
    } else{
        if(n>arr.length-1){
              start = 0
        }else{
            start = (arr.length)-n
        }

        for(let i = start ; i<=arr.length-1 ; i++)
        {
            ans.push(arr[i])
        }
        return ans
    }
}

console.log(last([1,2,3,4,5,6]))
console.log(last([1,2,3,4,5,6],2))
console.log(last([1,2,3,4,5,6],4))