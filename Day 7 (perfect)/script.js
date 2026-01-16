// write a program to check whether a number is perfect number .
// 28 => 1+2+4+7+14(Divisors) => 28 

// function isperfect(n){
//     let sum = 0

//     for(let i = 1 ; i <= Math.floor(n/2) ; i++){
//         if(n % i == 0)
//         {
//             sum = sum + i
//             console.log(i)
//         }
//     }
//     console.log(sum)

//     if(sum == n){
//         console.log("It is a perfect number")
//     }else{
//         console.log("It is not a perfect number")
//     }
// }

// isperfect(496)
// isperfect(16)
// isperfect(28)
// isperfect(56)

// write a program to print all the perfect number . 

// function isperfect(n){
//     let sum = 0

//     for(let i = 1 ; i <= Math.floor(n/2) ; i++){
//         if(n % i == 0)
//         {
//             sum = sum + i
//         }
//     }

//     if(sum == n){
//         return true
//     }else{
//         return false
//     }
// }

// let n = 1000

// for(let i = 1; i<=n ; i++)
// {
//     if(isperfect(i)==true){
//         console.log(i)
//     }
// }


// write a program to check whether a number is Strong number .

function factorial(n){
    let fact = 1
    for(let i=1 ; i <= n; i++)
    {
        fact = fact * i
    }
    return fact
}

function isStrong(n){
    let original = n
    let sum = 0
    while(n != 0)
    {
        let ld = n % 10
        sum =  sum + (factorial(ld))
        n = Math.floor(n/10)
    }

    if(sum == original){
        //console.log(`${original} is a strong number`)
        return true
    }else{
        //console.log(`${original} is not a strong number`)
        return false
    }
}

isStrong(145)
isStrong(26)

// write a program to print all the strong number . 
let n  = 10000000

for(let i = 1 ; i<=n;i++){
    if(isStrong(i)){
        console.log(i)
    }
}
