// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]


//1st Way

// let arr = [1,[2],[3,[[4]]],[5,6]]

// let flat;
// let changed;

// do{
//   flat = []
//   changed = false

// for(let i=0 ; i<=arr.length-1;i++)
//   {   
//         let len = arr[i].length

//         if(len === undefined)
//         {
//           flat.push(arr[i]) 
//         }else
//         {
//           changed = true
//            let a = 0
//           while(a <= len-1)
//           {
//             flat.push(arr[i][a])
//             a++
//           }
//         }   
//   }
//   arr = flat
// }while(changed);

// console.log(arr)


function flatten(arr , shallow){

  let flat;
  let changed;

  do{
    flat =[]
    changed = false

    for(let i=0 ; i<arr.length ; i++)
    {
      if(typeof(arr[i]) === "object")
      {
        for(let j=0 ; j<arr[i].length ; j++)
        {
          changed = true
          flat.push(arr[i][j])
        }
      }else{
        flat.push(arr[i])
      }
    }
    arr=flat

    if(shallow === true){
      break;
    }

  }while(changed);
return arr
}

console.log(flatten([1,[2],[3,[[4]]],[5,6]],true))
console.log(flatten([1,[2],[3,[[4]]],[5,6]]))


// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

function difference(arr1 , arr2)
{

let a1 = arr1.flat(Infinity)
let a2 = arr2.flat(Infinity)
let sample = []
  for(let i=0 ; i<=a1.length-1 ; i++)
  {
    if(!(a2.includes(a1[i])))
      {
      sample.push(a1[i])
    }
  }
  
  for(let j=0 ; j<=a2.length-1 ; j++)
  {
    if(!(a1.includes(a2[j])))
    {
      sample.push(a2[j])
    }
  }
  
  return sample
}

console.log(difference([1,2,3],[100,2,1,10]))
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["3", "10", "100"]


//  Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : 
// let arr=["NaN", 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let arr = ["NaN", 0, 15, false, -22, '',undefined, 47, null]

let remove = ["NaN",0,"",false,null,undefined]
let ans = []
for(let i=0 ; i<=arr.length-1 ; i++)
{
   if(!(remove.includes(arr[i])))
   {
     ans.push(arr[i])
   }
}

console.log(ans)


let fruits=["apple","papaya","pineapple","Orange","Kiwi","lichi","Mago","Chiku"]


fruits.sort(function(a,b){
    let aLower=a.toLowerCase()
    let bLower=b.toLowerCase()

    if(aLower>bLower)
    {
        return -1
    }
    if(bLower>aLower)
    {
        return 1
    }
     return 0
})

console.log(fruits)
let bag="wertyuSDFGHJKERTY"

console.log(bag.toLowerCase())
console.log(bag.toUpperCase())