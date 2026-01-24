//  Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3]

let obj = {}
for(let i=0 ; i<=arr.length-1 ; i++){
    if(obj[arr[i]]==undefined)
    {
        obj[arr[i]] = 1
    }else{
        let count = obj[arr[i]]
        count = count+1
        obj[arr[i]] = count
    }
}

console.log(obj)
let max = 0
let el =""

for(let x in obj){
    if(obj[x]>max){
        max = obj[x]
        el=x
    }
}
console.log(`${el} (${max})`)

let abc={
  name:"Dipali",
  age:20,
  email:"dipalipotle64@gmail.com",
  address:"nagpur"
}

//If we want to access key those key are present in i and if we want values of that keys then we can access it using name of object[i]
for(i in abc){
    console.log(abc[i])
}

//  Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let str='The Quick Brown Fox'

let cap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let small = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//console.log(str.length)
let result = ""
for(let i=0 ; i<=str.length-1 ; i++)
{
    let ch = str[i]

    if(cap.includes(ch))
    {
       let ind = cap.indexOf(ch)
       result = result+small[ind]

    }else if(small.includes(ch))
    {
        let ind = small.indexOf(ch)
        result = result+cap[ind]

    }else{

        result = result+ch

    }
}
console.log(result)