//-----useReducer() 
//KHi có những state phức tạp thì k nên dùng useState mà nên dùng useReducer() Biểu thị mỗi 1 action khác nhau được dispatch thì sẽ đưa ra state khác nhau 
// Có thể tạo nhiều reducer 
import { Text, StyleSheet, View ,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'

const reducer =  (state, action ) => {
  switch (action ){
    case "TANG":
      return state+1
    case "GIAM":
      return state -1
    case "XOA_TAT_CA":
      return 0    
    default:
      return state;  
  }
};

const initState = {
  loading : false,
  data: [],
  error : null
}

const reducer1 = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST" :
    return {
      ...state,
      loading: true
    }
     case  "GET_USER_SUCCESS":
       return {
         ...state,
         loading: false,
         data: action.data
       }
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data
      }

    default:
  }
}
 
function App() {
  //Trong 1 component có thể có nhiều useReducer 
  //count == state  , dispatch == hàm đẩy action{type :... , data:... } , reducer là hàm xử lí action và state cũ, 0 == initial value giá trị khởi đầu của state

  const [count, dispatch] = useReducer(reducer, 0)
  const [users , userDispatch] = useReducer(reducer1, initState)

  const getUsers = () => {
    userDispatch({
      type: "GET_USER_REQUEST"
    })
    setTimeout(
      ()=> {
        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(res => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res
          })
        })
        .catch(err => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err
          })
        })
      }, 2000)

  }

   return (
      <SafeAreaView>
      <Text> {count}</Text>
      <TouchableOpacity onPress = {() => dispatch("TANG")}>
        <Text> TĂNG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => dispatch("GIAM")}>
        <Text> GIẢM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => dispatch("XOA_TAT_CA")}>
        <Text> XOA_TAT_CA </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {getUsers}>
        <Text> GET USERS</Text>
      </TouchableOpacity>
      {users.loading ? <Text>Loading...</Text> :<Text>{JSON.stringify(users)}</Text>}
      </SafeAreaView>
   )
}
export default App; 

