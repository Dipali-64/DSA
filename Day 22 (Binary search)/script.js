
// Binary Search

//let arr = [1,2,3,5,8,10,12,15,19]

// //In this code,it willnot give us 19's output correct
// let b = arr.sort(function(a,b){
//     return a-b
// })
// //console.log(b)
// function search(num){
//     let p1 = 0
//     let p2 = arr.length-1
//     let mid = Math.floor((p1 + p2)/2)
    
//     while(arr[mid] != num){
        
//         if(p2 == p1+1){
//             break
//         }
//         else if(num > arr[mid]){
//             p1 = mid
//         }else if(num < arr[mid]){
//             p2 = mid
//         }
//         mid = Math.floor((p1+p2)/2)
//     }
    
//     if (arr[mid]==num){
//         console.log("element is present")
//     }else{
//         console.log("element is not present")
//     }
// }
// search(19)
// search(13)



let arr = [1,2,3,5,8,10,12,15,19]

function search(el)
{
    let p1 = 0
    let p2 = arr.length-1
    mid = Math.floor((p1+p2)/2)
    find = false
let one = true

while(p2 != p1+1)
{
    if((el>arr[p2] || el<arr[p1]) && one )
    {
        one = false
        break
    }else if(el == arr[p1] || el == arr[p2] || el == arr[mid])
    {
        find = true
        break
    }else if(el > arr[mid]){
        p1 = mid 
    }else if(el < arr[mid]){
        p2 = mid
    }
    mid = Math.floor((p1 +p2)/2)
    
    console.log(p1,mid,p2)
    console.log(arr[p1],arr[mid],arr[p2])
}

if(find){
    console.log(`${el} is present`)
}else{
    console.log(`${el} is not present`)
}
}

search(10)
search(3)
search(13)