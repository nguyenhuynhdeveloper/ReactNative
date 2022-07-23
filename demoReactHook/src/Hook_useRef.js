//-----useRef()  : có 2 ứng dụng phổ biến đó là 
// 1. lưu trữ giá trị cũ  của 1 tham chiếu 
// Truy suất tới 1 thành phần DOM

import { Text, StyleSheet, View , SafeAreaView,TouchableOpacity, TextInput} from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


function App () {
const countRef = useRef(0)
const refInput = useRef(null)   // Phải khai báo 1 cái biến bên ngoài mang giá trị là useRef("initialValue") // để sau gán giá trị là ref của component
// useRef() Luôn trả về 1 object trước đó
// Luôn lưu lại giá trị trước đó , và k gây sự render lại 
const [count , setCount] = useState(0)
const [text ,setText] = useState("")

// useEffect (() => {
// setInterval(() => {
// setCount(count+1)
// console.log({count})
// },1000)}) // Xảy ra  vấn đề stale closure . tức nó không lấy giá trị của biến mới nhất -- vì vấn đề stale closure

// useEffect (() => {
// setInterval(() => {
// countRef.current = countRef.current+ 1
// console.log(countRef.current)
// },1000)})
useEffect(()=>{

  console.log(refInput)
  console.log(refInput.current)
  // refInput.current.onChangeText (text => setText("xin chào "))  // FAULSE
},[])

return (
  <SafeAreaView>
    <Text> {countRef.current}</Text>   
    <Text> {count}</Text>
    <TouchableOpacity onPress ={() => {
       setCount(count+1)
    countRef.current = countRef.current +1
    refInput.current.focus()    // khi ấn vào TouchableOpacity này thì sẽ focus vào ô input đó
   
    }}>
      <Text> ONPRESS</Text>
    </TouchableOpacity>
    <Text>{text}</Text>
    {/* <Text> {refInput.current.value(text)}</Text> //FAULSE */}
    {/* <Text> {refInput.current.value= text}</Text>  // FALSE*/}  
    <TextInput
    ref = {refInput}
    style={{backgroundColor: "yellow"}}
    onChangeText={text => setText(text)}
    // value = {"xin chao"}
    ></TextInput>

  </SafeAreaView>
)
}

export default App; 
