let arr=[
    ["a","b","c","p"],
    ["d","e","f","q"],
    ["g","h","i","r"],
    ["v","w","x","y"]
]

//a d g  b e h  c f i
for(let i=0 ; i<=arr.length-1 ; i++)
{
    for(let j=0 ; j<=arr[i].length-1 ; j++)
    {
        console.log(arr[j][i])
    }
}

//g d a  h e b  i f c
for(let i=0 ; i<=arr.length-1 ; i++)
{
    for(let j=arr[i].length-1 ; j>=0 ; j--)
    {
        console.log(arr[j][i])
    }
}


let row = arr.length-1
let col = arr[arr.length-1].length-1

//i e a   
while(row>=0 && col>=0)
{
 console.log(arr[row][col])
 row--
 col--
}

row=arr.length-1
col = 0
// g e c
while(row>=0 && col<=arr[0].length-1)
{
    console.log(arr[row][col])
    row--
    col++
}


// let row = 0
// let col = 0

// // a e i
// while(row<=arr.length-1 && col<=arr[arr.length-1].length-1)
// {
//     console.log(arr[row][col])
//     row++
//     col++
// }

// row = 0
// col = arr[0].length-1
// //c e g
// while(row<=arr.length-1 && col>=0)
// {
//     console.log(arr[row][col])
//     row++
//     col--
// }


// let row = 0
// let col = 0
// // a b c
// while(col<=arr[0].length-1)
// {
//     console.log(arr[row][col])
//     col++
// }

// row = 1
// // f i
// col = arr[0].length-1
// while(row<=arr.length-1)
// {
//     console.log(arr[row][col])
//     row++
// }

// // h g
// row = arr.length-1
// col = arr[arr.length-1].length-2
// while(col>=0)
// {
//     console.log(arr[row][col])
//     col--
// }

// // d
// row = arr.length-2
// col = 0
// while(row>0){
//     console.log(arr[row][col])
//     row--
// }

// let str = ""
// let row = 1
// let col = 0
// // d g v 
// while(row<=arr.length-1)
// {
//     str = str + arr[row][col] + " "
//     row++
// }

// //w x y
// row = arr.length-1
// col = 1
// while(col<=arr[row].length-1)
// {
//     str = str + arr[row][col] + " "
//     col++
// }

// // r q p
// row = arr.length-2
// col = arr[row].length-1
// while(row>=0)
// {
//     str = str + arr[row][col] + " "
//     row--
// }

// // c b a 
// row = 0
// col = arr[row].length-2
// while(col>=0){
//     str = str + arr[row][col] + " "   
//     col--
// }
// console.log(str)