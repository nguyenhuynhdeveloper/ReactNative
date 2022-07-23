// ------React.memo   Là 1 Higher-ỏder Component : nhận vào 1 component và trả về 1 components khác 
// Sẽ ghi nhớ kết quả của 1 component nếu như tham số đầu vào props của component đó nếu không có sự thay đổi 
// ------useMemo  là 1 react hook 

// Nguyên lý hoạt động của react native là khi 1 component cha bị rerender lại thì sẽ rerender lại tất cả component con 
// Khi bọc 1 component con vào trong 1 React.Memo  sẽ ghi nhớ kết quả của component này và chỉ rerender lại khi có sự thay đổi của props truyền từ component cha xuống 
// React.memo()  Sẽ hoạt động rất tốt nếu các props truyền vào chỉ là các number string boolean

import { Text, StyleSheet, View, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("nguyen huynh")

  const getUsers = useCallback(() => {
    return fetch (`https://reqres.in/api/users`)
  },[])

  // Khi truyền function getUsers vào props cho component con thì . kết hợp useCallback và React.memo làm component con k bị render lại 
  return (
    <SafeAreaView >

   <Text> {count}</Text>

 <TouchableOpacity onPress={ () =>  {setCount(count + 1) }}>
 <Text style ={{ backgroundColor: "yellow"}}>OnPress  </Text>
 </TouchableOpacity>

<ChildComponent name = {name} getUsers= {getUsers}></ChildComponent> 
    </SafeAreaView>
  );
};

export default App;