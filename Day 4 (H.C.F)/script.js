//write a program to enter a number and print it in words.

// write a program to find power of a number

let n = 5
let e = 3
let i = 1
let expo = 1

while(i<=e)
{
    expo = expo * n
    i++
}
console.log(expo)

// factors => A factor can refer to a number that devides another number evenly(no remainder)

//write a program to find all factors of a number.
n = 12

for(let i = 1 ; i <= Math.floor(n/2) ; i++)
{
    if(n % i == 0)
    {
        console.log(i)
    }
}

//Write a program to calculate factorial of a  number.

n = 5
let fact = 1

while(n >= 2)
{
   fact = fact * n
   n--
}

console.log(fact)

//Write a program to find H.C.F

let a = 724
let b = 362

while(a != b)
{
    if(a > b)
    {
        a = a - b
    }else{
        b = b - a
    }
}

console.log(a)

//write a program to find L.C.M of two numbers

a = 12
b = 14

i = 1
j = 1

let m = a
n = b
while(m != n)
{
    if(m < n)
    {
        i++
        m = a * i
    }else{
        j++
        n = b * j
    }
}
console.log(m)
