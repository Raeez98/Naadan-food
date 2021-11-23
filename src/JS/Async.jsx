import React, { useEffect } from 'react'

const Async = () => {
    useEffect(async()=>{
    //     const firstFunction=(a,b,next)=>{   //call by fucntion
    //         let c;
    //         setTimeout(()=>{
    //          c= a + "," + b; // let c=a + b  a is hello b is there
    //          next(c);
    //     },500);
    //  }
    // //     const secondFunction=(result)=>{
    // //         console.log(result);  //when result called it goes to c and prints second function
            
    // //     }
        
    //     // let result=firstFunction("Hello","There")
        
    //     // secondFunction(result);
    //     // firstFunction("Hello","There", secondFunction);
    //     firstFunction("hello","Raeez",(result)=>{
    //         console.log(result);
    //     });

    const myPromise=(a,b)=>{                   //mypromise function
    return new Promise((resolve,reject)=>{    // classs and constructors
          //call by fucntion
                setTimeout(()=>{
                                                //   let a ="Hello"
                                                //   let b="There" // let c=a + b  a is hello b is there
                 let c = a + "," + b;
                      reject({error:true});  
                },500);
    })}
//     myPromise("hello", "There").then((result)=>{
//         console.log(result);})
//                                                 //  }) .catch(result=>{
//                         // //     console.log("catch",result);  it comes catch  hello there when it rejects
//  
                                   // // })
        try{
         const result= await myPromise("Hello","Raeez");  //it awaits for the mypromise execution
         console.log(result);
        }
         catch(error){
         console.log("catch",error);  
        }                     
 },[]);

    return (
        <div>
            <h1> Promises, Async and Await</h1>
        </div>
    )
}

export default Async
