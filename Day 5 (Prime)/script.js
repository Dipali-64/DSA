// Write a program to check whether a number is prime number or not.

// Method 1 =>

let n = 8
// let count = 0

// for(let i = 1 ; i <= Math.floor(n/2) ; i++)
// {
//     if(n % i == 0)
//     {
//        count++
//     }
// }
// //console.log(count)

// if(count >= 2)
// {
//     console.log("Number is not Prime")
// }else{
//     console.log("Number is Prime")
// }

// Method 2 =>
  
function isPrime(n){
        let flag = true
        let end  = Math.floor(Math.sqrt(n))
        for(let i = 2 ; i <= end ; i++)
           {
               if(n % i == 0)
                   {
               flag = false
               return flag
           }
        }
        return flag
    }

// for(let i = 2; i<=20 ; i++)
// {
//      if(isPrime(i))
//         {
//             console.log(i)
//         }
// }

// Write a program to find sum of all prime numbers between 1 to n
n = 10
let sum = 0
for(let i = 1 ; i <= n ; i++)
{
    if(isPrime(i))
    {
        console.log(i)
        sum = sum + i
    }
}
console.log(sum)

// Write a program to find all prime factors of a number.

n = 147
let arr = []
let  i = 2
while(n != 1)
{
    if(n % i == 0)
    {
        n = n / i 
        arr.push(i)
        i = 2
    }else{
        i++
    }
}

console.log(arr)
