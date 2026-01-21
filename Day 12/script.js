// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : 
// myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"

myColor = ["Red", "Green", "White", "White"]

function joinStr(arr,char){
let str = ""
for(let i=0 ; i <= arr.length-1 ; i++)
{
    if(char == undefined)
    {
        char = ","
    }else{
    if(i == arr.length-1)
    {
        str = str + arr[i]
    }else{
        str = str + arr[i] + char
    }
  }
}
return str
}

let fruits = ["apple","banana","cheeku","gava","papaya","pineapple","kiwi","watermelon"]
console.log(joinStr(myColor,"+"))
console.log(joinStr(fruits))


// arr.join("char") => join all the elements of an array into string by defined character 
// for example ->
//console.log(fruits.join("*"))

let abc = "uiqakjhbnalkrmnajfnemmaajf"

// split() => split the string or para on the behalf of specific mentioned character,space and convert it into array
console.log(abc.split("a"))

let para="Indias equity mutual fund inflows rebound in November on strong earnings, low inflation"
// console.log(para.split(" "))

// to find "on" is available in string or not 
let xyz=para.split(" ")
if(xyz.includes("of"))
{
    console.log("elemnt is present ")
}else{
    console.log("elemnt is not present")
}

//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function evenOdd(n){
    if(n % 2 == 0){
        return true
    }else{
        return false
    }
}

let num = 425468

let str = ""
while(num != 0)
{
    let ld = num % 10
    let sl = Math.floor((num % 100)/10)
     
    if(evenOdd(ld) && evenOdd(sl)){
    
        if(num <= 9){
            str = str + ld
        }else{
            str = str + ld + "-"
        }
    }else{
        str = str + ld
    }
    num = Math.floor(num/10)
}

console.log(str)

console.log(str.split("").reverse().join(""))

// let op=""
// for(let i=str.length-1 ; i>=0;i--)
// {
//  op = op+str[i]
// }
// console.log(op)


let arr = [1,7,8,9,4,5,2,3,7,11,77,12,99,55,44,34,111,222]

console.log(arr.sort(
    function(a,b){
        a-b
    }
))