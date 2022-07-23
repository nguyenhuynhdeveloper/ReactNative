
import {useState}from "react"
var value = 0;
export default function reducer ( state = value , action) {
    const number =9
    switch (action.type) 
    {
       case "TANG" :{
           return value = value +1 
       }
        case "GIAM" :
            {
                return value = value -1
            }
        default:
            return value    
    }
}