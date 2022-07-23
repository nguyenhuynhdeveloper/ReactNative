import { call, put, takeEvery, takeLatest ,delay, all} from 'redux-saga/effects'
import {useState} from "react"
import axios from "axios"
var a=""
function* calculate (action) {
// const delay = (ms) => new Promise((resolve , reject ) => resolve(setTimeout(console.log(abc), ms)) )  // -> FALSE
// const delay = (ms) => setTimeout(console.log("abc"), ms)  // -> FALSE
try { 
      console.log("a")
      yield delay(2000)
      // yield setTimeout(console.log(abc), 2000) // Không nhận setTimeout ở đây 
      console.log("b")
      yield put({type: "TANG" });
    
   } catch (e) {
      yield put({type: "GIAM"});
   }
}

// const getJSON = async function getJSONAsync() {
//   let json = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
//   console.log(json)
//   return json;                 
// } 
// getJSON() .then(data => {
//    console.log(data.data[0].body)
//    return data.data[0].body
// })
// const b= getJSON()
// console.log(b)  // chỉ nhận được 1 cái Promise


const getJson = async () => {
   try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('RESS ', res)
      return res.data
   } catch (error) {
      console.log(error);
   }
}


function* getData (action) {
   try {
    
      const json = yield getJson();   // yield giống như kiểu await khi nàoo hàm đó xong nó mới làm câu dưới 
      console.log('YIELD ', json)
      yield put({type: "GET" , data: json});
      console.log("b")
      
   } catch (e) {
      yield put({type: "SET"});
   }
}
   


   const sagas = [
      takeEvery("COUNT", calculate),     // Lắng nghe liên tục khi có dispatch từ bên ngoài là COUNT thì sẽ chạy hàm calculate
      takeEvery("GET_DATA", getData)
   ]
export  default function* rootSaga() {
   yield all(sagas);   // Sẽ đợi cả 1 mảng cổng saga chạy hết
}