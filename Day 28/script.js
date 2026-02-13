let std1 = {
    name:"Mahi",
    age : 21,
    bg : "B+ve",
    city:"Nagpur"
}
let std2 = {
    name:"Dipali",
    age : 21,
    bg : "O+ve",
    city:"Pune"
}
let std3 = {
    name:"Dhan",
    age : 23,
    bg : "A+ve",
    city:"Mumbai"
}
let std4 = {
    name:"swati",
    age : 20,
    bg : "AB+ve",
    city:"Banglore"
}

let students = [std1 , std2 , std3 , std4]

students.sort(function(a,b){
   n1 = a.name.toLowerCase()
   n2 = b.name.toLowerCase()

   if(n1 > n2)
   {
    return 1
   }
   if(n2>n1){
    return -1
   }
    return 0 
   
})

console.log(students)


// 25. Write a JavaScript function to sort the following array of objects by title value.
    // Sample object :
    // var library = [ 
    //    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    //    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    //    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    //    ];
    // Expected result :
    // [[object Object] {
    //   author: "Suzanne Collins",
    //   libraryID: 3245,
    //   title:"Mockingjay:The Final Book of The Hunger Games"
    // }, [object Object] {
    //   author: "Bill Gates",
    //   libraryID: 1254,
    //   title: "The Road Ahead"
    // }, [object Object] {
    //   author: "Steve Jobs",
    //   libraryID: 4264,
    //   title: "Walter Isaacson"
    // }]

    let library = [ 
       { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
       { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
       { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
       ];


       library.sort(function(a,b){
        let a1 = a.title.toLowerCase()
        let a2 = b.title.toLowerCase()

        if(a1 > a2){
            return 1
        }
        if(a2 > a1)
        {
            return -1
        }
        return 0
       })

       console.log(library)


 // 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
 // Input: numbers= [10,20,10,40,50,60,70], target=50
 // Output: 2, 3

let numbers = [10,20,10,40,50,60,70]
let target = 50

let start
let end
let p1 = 0

while(p1<numbers.length)
{
    let p2 = p1 + 1
while(p2<numbers.length)
{
    if(numbers[p1] + numbers[p2] == target)
    {
       start = p1
       end = p2
    }
    p2++
}
p1 = p1 +1
}
console.log(start,end)


// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function gap(a,b,n){
 
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
     
    let str = []
    for(let i=arr.indexOf(a) ; i<=arr.indexOf(b) ; i+=n)
    {
        str.push(arr[i])
    }

    return str
}

console.log(gap("k","t",3))

