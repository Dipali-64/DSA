// Write a javascript program 
function isLeap(n){
    if(n % 100 == 0)
    {
        if(n % 400 == 0)
        {
            return true
        }else{
            return false
        }
    }else {
      if(n % 4 == 0)
    {
        return true
    }else{
        return false
    }
}
}

// let arr = []
// for(let i=1900 ; i<=2025 ; i++){
//     if(isLeap(i) == true){
//         arr.push(i)
//     }
// }
// console.log(arr)

//Write a javascript program to suffle an array

// let abc = Math.floor(Math.random()*10)
// console.log(abc)

function getRandom(min,max)
{
    let el = Math.random()
    console.log(el)
    let a = Math.floor(el * (max-min) + min)
    return a
}

//console.log(Math.floor(getRandomArbitary(20,26)))

arr = [1,2,3,4,5,6]

function makeRandom(arr)
{
       let min = 0 
       let max = arr.length-1
       
       for(let i=0 ; i<=arr.length-1 ; i++)
        {
           let random = getRandom(min,max)
           let temp = arr[i]
           arr[i] = arr[random]
           arr[random] = temp

           let a = arr.pop()
           arr.unshift(a)
       }
       console.log(arr)
}

makeRandom(arr)