// useContext() 
// Giúp đơn giản hoá truyền dữ liệu từ component cha xuống component con mà k cần dùng Props
// Comp A => Comp B => Comp C
//1. Create Context  :  phạm vi có context bao cả component A thì tất cả component con có thể truy cập dữ liệu của comp A đó
//2. Provider : nhà cung cấp : để nhận dữ liệu 
//3. Consumer : nhà nhận dữ liệu  : dùng để nhận được dữ liệu 

import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


const ThemeContext = React.createContext() // Sẽ trả về 1 object sẽ trả về Provider và Consumer
// có thể sử dụng vô số context khác nhau

function App () {
  const [theme , setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  {/** Phải gói tất cả component vào trong  .Provider  */}
  return (
    <ThemeContext.Provider value={theme}>   
    <SafeAreaView>
      <TouchableOpacity onPress = {toggleTheme}>
        <Text> Toggle theme </Text>
      </TouchableOpacity>
      <Content theme = {theme}></Content>
      <Context> </Context>
    </SafeAreaView>
    </ThemeContext.Provider>
  )
}

function Content({theme}) {
  return (
    <View>
      <Paragraph theme ={theme}> 
      </Paragraph>
    </View>
  )
}

function Paragraph(props) {
const {theme} = props
  console.log("theme :" , theme)
  return (
    <View style ={theme === "dark" ? styles.dark : styles.light}>
    <Text >
      Dùng truyền qua props bình thường từ cha xuống con 
    </Text>
    </View>
  )
}

function Context() {
  const theme = useContext(ThemeContext)  // cái Provider đưa ra cái value là gì thì sẽ nhận được cái value đó ở đây 
  // Khi các component lồng nhau 4 5 cấp thì truyền  dữ liệu khá đơn giản 

  console.log("theme :" , theme)
  return (
    <View style ={theme === "dark" ? styles.dark : styles.light}>
    <Text>
      Dùng useContext nhận đúng cái giá trị value của thằng đã được khai báo ABC = createContext()  sau đó gói vào 1 cái provider
    </Text>
    </View>
  )
}


const styles = StyleSheet.create({
dark : {
  backgroundColor: "red"
},
light :  {
  backgroundColor: "white"
}
})

export default App;