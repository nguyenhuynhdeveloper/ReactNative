import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'


const Navigate_goBack = ({navigation , route}) =>  {
  const {item , index, callback} = route.params
    return (
      <View>
        <TouchableOpacity
        style= {{backgroundColor: "pink", height: 40, width: 200, justifyContent:"center", alignSelf:"center"}}
        onPress ={() => 
          // callback({index , item , a: "a", b: "b"})
        callback(index)
        }        // Gọi ở đây nhưng thực thiện thì thực hiện ở trang mẹ , làm thay đổi state của trang mẹ 
        >
        <Text>Đổi màu danh sách ở trang mẹ </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style= {{backgroundColor: "green", height: 40, width: 200, justifyContent:"center", alignSelf:"center"}}
        onPress={ () => navigation.goBack()}>
          <Text> Trở về </Text>
          </TouchableOpacity>


        <Text> {JSON.stringify(item)}</Text>
        <Text>{index}</Text>
        <Text>{typeof callback}</Text>
      </View>
    )
  }

export default Navigate_goBack

const styles = StyleSheet.create({})