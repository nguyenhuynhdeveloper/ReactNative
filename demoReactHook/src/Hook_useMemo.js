
//// ------useMemo()-------
// useMemo() : giúp lưu giá trị trả về của 1 hàm rất nặng vào bộ nhớ sau chỉ gọi ra sử dụng thôi , khôgn tính lại nữa 
// Kỹ thuật tối ưu tốc độ mát tính, khi cùng 1 dữ liệu đầu vào , đầu ra không đổi 

import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


function expensiveFunction (number) {
  console.log(" Bắt đầu ")
  const start = new Date()
  while (new Date() -start <3000) {
  console.log(" Đang tính toán ")

    return number*number
  }
}

 
const App = () => {
  const [count, setCount] = useState(0)


const number = useMemo(() => {return expensiveFunction(num)}, [num])  // Khi nó nhận thấy đầu vào k đổi thì nó sẽ k tính lại sau khi bị re render

  return (
    <SafeAreaView >
   <Text> {count}</Text>
   <Text> {number}</Text>

 <TouchableOpacity onPress={ () =>  {setCount(count + 1) ;setNum(num+1)}}>
 <Text>OnPress để thay đổi </Text>
 </TouchableOpacity>

    </SafeAreaView>
  );
};

export default App;


