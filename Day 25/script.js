// * * * * *
//   * * * *
//     * * *
//       * *
//         * 



let n=5

for(let i=1;i<=n;i++)
{
  let str=""

  for(let k=1;k<i;k++)
  {
     str=str+" "+" "
  }

  for(let k=i;k<=n;k++)
  {
    str=str+"*"+" "
  }

  console.log(str)
}


//         *
//       * *
//     * * * 
//   * * * *
// * * * * *

for(let i=1 ; i<=n ; i++)
{
    let str = ""
    
    for(let j=1 ; j<=n-i ; j++)
    {
        str = str + " " + " "
    }

    for(let k=n-i+1 ; k<=n ; k++)
    {
        str = str + "*" + " "
    }
    console.log(str)
}

//       *
//      * * 
//     * * *
//    * * * * 
//   * * * * *

n = 5

for(let i=1 ; i<=5 ; i++)
    {
        let str = ""
        
        for(let j=1 ; j<=n-i ; j++)
            {
                str = str + " " 
            }
            
            for(let s=1 ; s<=i ;s++)
                {
                    str = str + "*" +" "
                }
                
                console.log(str)
    }
            
    
//       *
//      * * 
//     * * *
//    * * * * 
//   * * * * *
            
 n = 5
            
    for(let i=1 ; i<=5 ; i++)
    {
        let str = ""
                    
        for(let j=1 ; j<=n-i ; j++)
        {
            str = str + " " 
        }
                        
        for(let s=1 ; s<=i ;s++)
        {
            if(i==n || s==1 || s==i )
            {
             str = str + "*" +" "
            }else{
             str = str + " " + " "
            }
        }
                            
            console.log(str)
    }


//          *         
//        * * *       
//      * * * * *     
//    * * * * * * *   
//  * * * * * * * * * 


n = 5
a = (n*2)-1
m = Math.ceil(a/2)
s = m
e = m

for(let i=1 ; i<=n ; i++)
{
    let str = ""

    for(let b=1 ; b<s ; b++)
    {
        str = str + " "+ " "
    }

    for(let c=s ; c<=e ; c++)
    {
        str = str + "*" + " "
    }

    for(let d=e+1 ; d<=a ; d++)
    {
        str = str + " "+ " "
    }
    
    console.log(str)
    s--
    e++
}



//          *         
//        *   *       
//      *       *     
//    *           *   
//  * * * * * * * * * 


n = 5
 a = (n*2)-1
 m = Math.ceil(a/2)
 s = m
 e = m

for(let i=1 ; i<=n ; i++)
{
    let str = ""

    for(let b=1 ; b<s ; b++)
    {
        str = str + " "+ " "
    }

    for(let c=s ; c<=e ; c++)
    {
        if(c==s || c==e || i==n)
        {
        str = str + "*" + " "
        }
        else{
            str = str +" "+" "
        }
    }

    for(let d=e+1 ; d<=a ; d++)
    {
        str = str + " "+ " "
    }
    
    console.log(str)
    s--
    e++
}



//      *   *      *  *
//  *          *        *
//    *                *
//      *           *
//         *     *
//            * 
