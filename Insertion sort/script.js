// Insertion sort

let arr = [23,1,10,5,2]

for(let i=1;i<=arr.length-1;i++)
  {
    let temp = arr[i]
let j = i-1
while(j>=0 && arr[j]>temp)
  {
    arr[j+1] = arr[j]
    j--
  }
  arr[j+1] = temp
  console.log(arr)
}

