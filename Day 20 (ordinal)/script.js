//Write a javaScript program to remove duplicate items from an array.

let arr = [1,8,6,8,3,2,6,12]
let ans = []
for(let i=0 ; i<=arr.length-1 ; i++)
{
    if(!(ans.includes(arr[i])))
    {
        ans.push(arr[i])
    }
}
console.log(arr)
//In this the original array does not change that's why we use another technique


//Stack

let stack = []
while(arr.length>0)
{
    let el = arr.pop()
    if(!stack.includes(el))
    {
        stack.push(el)
    }
}

for(let i=stack.length-1 ; i>=0 ; i--)
{
    let el = stack.pop()
    arr.push(el)
}
console.log(stack)
console.log(arr)

// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

function makeOdinal(num){
let arr=["th","st","nd","rd"]

      
if((num>=11 && num<=20) || num==0 || num%10 >=4 || num%10==0)
{
    return num+arr[0]
}else if(num%10==1)
{
    return num+arr[1]
}else if(num%10==2)
{
    return num+arr[2]
}else if(num%10==3)
{
    return num+arr[3]
}
}

 color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]

 for(let i=0 ; i<=color.length-1 ; i++)
 {
    console.log(`${makeOdinal(i+1)} choice is ${color[i]}`)
 }
