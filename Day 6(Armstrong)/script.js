// Write a program to check whether a number is armstrong or not.
// Armstrong number => 153 -> (1^3 + 5^3 + 3^3) -> (1+125 +27) -> 153  It is a armstrong number

function countDigit(n){
    let count = 0
    while(n != 0)
    {
        count = count + 1
        n = Math.floor(n/10)
    }
    return count
}

//console.log(countDigit(134))

function isArmstrong(num){
    let original = num
    let pow = countDigit(num)
    let sum = 0
    while(num != 0)
    {
        let ld = num % 10
        sum = sum + (ld ** pow)
        num = Math.floor(num/10)
    }

    if(original == sum)
    {
        console.log(`${original} is a armstrong number`)
    }else{
        console.log(`${original} is a armstrong number`)
    }
}

// Write a program to print all armstrong number from 1 to n
function isArmstrong(num){
    let original = num
    let pow = countDigit(num)
    let sum = 0
    while(num != 0)
    {
        let ld = num % 10
        sum = sum + (ld ** pow)
        num = Math.floor(num/10)
    }

    if(original == sum)
    {
        return true
    }else{
        return false
    }
}

let n = 1000

for(let i = 1 ; i <= n ; i++){
   if(isArmstrong(i) == true){
    console.log(i)
   }
}