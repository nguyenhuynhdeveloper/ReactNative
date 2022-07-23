import { Text, StyleSheet, View , TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Toast from "react-native-toast-message"
//npm i react-native-toast-message
export default _Toast = () =>  {
  {
    return (
      <View>
          <Toast ref = {(ref) => {Toast.setRef(ref)}}>
          </Toast>

          <TouchableOpacity 
           onPress={ ()=> Toast.show ({
               type: "error",   // có các loại khác nhau info, success
              text1 : "Success Ìnormation ",
              text2: "Subtext detail info",
              position: "center",
              visibilityTime : 2000,
              autoHide: true,
              onShow: () => {},
              onHide: () => {}
          })}>
        <Text>Toast message Show</Text>
          </TouchableOpacity>


          <TouchableOpacity 
           onPress={ ()=> Toast.show ({
               type: "success",   // có các loại khác nhau info, success
              text1 : "Thành công ",
              text2: "Chúc mừng bạn đã thành công ",
              position: "center",
              visibilityTime : 2000,
              autoHide: true,
              onShow: () => {},
              onHide: () => {}
          })}>
        <Text>Toast message Show</Text>
          </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({}) 