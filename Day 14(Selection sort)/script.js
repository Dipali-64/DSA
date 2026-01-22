//Selection sort

function select(arr)
{
    for(let i=0 ; i<=arr.length-1 ; i++)
    {
      let small = arr[i]
      let p1 = i
      let p2 = p1+1
      while(p2<arr.length)
        {
            if(arr[p2]<small)
            {
               small = arr[p2]
               p1 = p2
            }
            p2++
        } 
        // console.log(arr) 
        let temp = arr[i]
        arr[i] = small
        arr[p1] = temp
    }
    return arr
}

console.log(select([7,89,16,5,16,51,6,51]))
console.log(select([7,89,16,5,1,6]))