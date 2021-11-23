import React from 'react'
import { useEffect } from 'react';

const Sum = () => {
    useEffect(async()=>{
        
    const myPromise=(array)=>{                   //mypromise function
        return new Promise((resolve,reject)=>{    // classs and constructors
              //call by fucntion
                    setTimeout(()=>{
                        let sum=0;
                        array.forEach(element => {
                            sum+=element;
                            
                        });
                        resolve(sum);      
                    },1000);
                })}
                                             // // })
        
            const result= await myPromise([1,2,3,4,6]);  //it awaits for the mypromise execution
            console.log(result);
    
    
            },[]);
            return(
                <div>
                    <h1>Sum </h1>
                </div>
            )
    
}

export default Sum
