// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

let n = 3
for(let j=1 ; j<=n ; j++)
{
    let str=""
    for(let i=1 ; i<=n ; i++)
    {
        str = str+"*"+" "
    }
    console.log(str)
}

for(let i=1 ; i<= n ; i++)
{
    let str = ""
    for(let j=1 ; j<=i ; j++)
    {
        str = str + "*" + " "
    }
    console.log(str)
}

// # @ # @
// # @ # @
// # @ # @
// # @ # @

n=4
for(let i=1 ; i<=n ; i++)
{
    let str = ""
    for(let j=1 ; j<=n ; j++)
    {
        if(j%2 == 0)
        {
            str = str + "@" + " "
        }
        else{
            str = str + "#" + " "
        }
    }
    console.log(str)
}

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

n = 5
for(let i=1 ; i<=n ; i++)
{
    let str = ""
    for(let j = 1 ; j<=n ; j++)
    {
        if(j == 1 || j == n || i==1 || i == n)
        {
            str = str+"*"+" "
        }else{
            str = str + " " + " "
        }
    }
    console.log(str)
}


// * * *
//   * *
//     *  

 n = 5

 for(let i=1 ; i <= n ; i++)
 {
    let str = ""
    for(let j=1;j<=n ; j++)
    {
        if (j <= i-1){
            str = str + " "+" "
        }else{
            str= str + "*" + " "
        }
    }
    console.log(str)
 }
