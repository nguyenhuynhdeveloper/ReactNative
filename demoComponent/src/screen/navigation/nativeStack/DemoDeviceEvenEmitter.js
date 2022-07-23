import { Text, StyleSheet, View ,TouchableOpacity, DeviceEventEmitter} from 'react-native'
import React, { Component } from 'react'

const DemoDeviceEvenEmitter =({navigation, route}) => {
    const {item , index, callback} = route.params
    return (
      <View>
         <TouchableOpacity
        onPress={ () => navigation.goBack()}>
          <Text> Trở về </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            DeviceEventEmitter.emit('CHANGE', {item,index})
            // DeviceEventEmitter.emit('CHANGE', "Đây là tham số thứ 2 của trình phát ")  // Tham số thứ 2 của component con phát chính là đối số của callback trong trình lắng nghe
          }}>
            <Text> Thay đổi màu component cha bên ngoài </Text>
          </TouchableOpacity>
        <Text> {JSON.stringify(item)}</Text>
        <Text>{index}</Text>
        <Text>{typeof callback}</Text>
      </View>
    )
  }

  export default DemoDeviceEvenEmitter


const styles = StyleSheet.create({})