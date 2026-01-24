// 1 dimension
let arr = [5,6,7,8,9,5,1]

// 2 dimension
//                0             1             2
let arr2 = [["a","b","c"],["d","e","f"],["g","h","i"]]
//            0   1   2     0   1   2     0    1  2

//3 dimension

let arr3 = [[["a","b"],["c","d"]],[["e","f"],["g","h"]]]

// console.log(arr2[0][0])
// console.log(arr2[0][1])
// console.log(arr2[0][2])
// console.log(arr2[1][0])
// console.log(arr2[1][1])
// console.log(arr2[1][2])
// console.log(arr2[0][0])
// console.log(arr2[2][1])
// console.log(arr2[2][2])

let mat = [
    ["a","b","c","-"],
    ["d","e","f","*","%"],
    ["g","h","i","@","+","&"]
]


for(let i=0 ; i<=mat.length-1 ; i++)
    {
    for(let j=0;j<=mat[i].length-1;j++)
        {
            console.log(mat[i][j])
        }
    }
    
    
    for(let i=0 ; i<=arr2.length-1 ; i++)
        {
            for(let j=arr2[i].length-1;j>=0;j--)
                {
                    console.log(mat[i][j])
                }
            }
            
     

