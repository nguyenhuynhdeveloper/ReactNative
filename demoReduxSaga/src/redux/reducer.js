import { combineReducers } from 'redux';

var value = 0;
export  function reducer0 ( state = value , action) {
   
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
            return state 
    }
}

const initialState ={
    data: ""
}

export  function reducer1 ( state = initialState , action) {
    console.log('ACTION >TYPE', action.type)
   
    switch (action.type) 
    {
       case "GET" :{
           console.log('ACTION >DATA', action.data)
           return {...state , data: action.data}
       }
        case "SET" :
            {
                console.log('ACTION >DATA SETTT', action.data)
                return {...state , data: "Có lỗi"}
            }
        default:
            return state 
    }
}
 const rootReducers = combineReducers({   // Kết hợp các reducer với nhau để nhét vào trong kho 
     demSo: reducer0,   // demSo là trường dữ liệu của của reducer0 xử lý
     getData : reducer1  // getData là trường dữ liệu của reducer1 xử lý
 })
 export default rootReducers
