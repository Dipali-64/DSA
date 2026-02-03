// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]


let arr = [7,[1,2],[3,4,5,6],["a","b","c"]]

let flat = []

for(let i=0 ; i<=arr.length-1;i++)
{   
    
        let len = arr[i].length
    
        if(len == undefined)
        {
          flat.push(arr[i]) 
        }else{
        let a = 0
        while(a <= len-1)
        {
            flat.push(arr[i][a])
            a++
        }
        }
    

}
console.log(flat)