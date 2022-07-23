// --------useCallback-------------
// const App: () => Node = () => {
 
//   const [users, setUsers] = useState([])
//   useCallback() : giúp lưu giá trị trả về của 1 hàm rất nặng vào bộ nhớ sau chỉ gọi ra sử dụng thôi , không tính lại nữa 
// Kỹ thuật tối ưu tốc độ mát tính, khi cùng 1 dữ liệu đầu vào , đầu ra không đổi 
// Ghi nhớ function mà k tạo lại 1 function mới khi mà app bị rerender
// Tránh 1 số trường hợp useEffect các componets con bị thực thi lại khi các component cha bị rerender lại 

import { Text, StyleSheet, View,SafeAreaView ,TouchableOpacity} from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


const App =() =>    {
const getData = useCallback((type) => { return fetch(`https://reqres.in/api/${type}`)}, [])
const handleClick =() => {
  getData('users')
  .then((res)=> res.json())
  .then((res) => {
    const users = res.data;
    setUsers(users)
  })
}
  return (
    <SafeAreaView >

<Text> {JSON.stringify(users)}</Text>
 <TouchableOpacity onPress={ () => handleClick() }>
 <Text>OnPress để thay đổi </Text>
 <ChildComponent getData = {getData}></ChildComponent>
 </TouchableOpacity>

    </SafeAreaView>
  );
};

export default App;

function ChildComponent ({getData}) {
  const [comments , setComments] = useState([])

   useEffect(() => {
     console.log(" ChildComponent - useEffect - getData")
     getData('comments')
     .then((res)=> res.json())
     .then((res) => {
       const comments = res.data;
       setComments(comments)
     })
    }, [getData])  // getData chì là 1 function nó thay đổi sẽ làm cho useEffect này chạy lại  
    // Nhưng ở phía trên khi nhấn nút làm useState re render lại , làm cho chạy lại hàm getData --> Hàm getData nhận 1 ô nhớ mới --> getData ở dưới tham chiêu tới ô nhớ đó cũng bị thay đổi 

  return (
    <View>  
    <Text> ChildComponent </Text>
    <Text> {JSON.stringify(comments)}</Text>
    </View>
  )
}

export {ChildComponent}