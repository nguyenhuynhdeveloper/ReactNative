import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const _Alert = (props) => {
  const{abc} = props
 
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
        ////-----CÁCH 1 : Alert cho cả 2 nền tảng 
      Alert.alert(     // Đây là alert mặc định của react-native 
        'Warning',   // Tham số 1: tiêu đề của cảnh báo 
        'The name must be longer than 3 characters',   // Tham số 2 :là nội dung của cảnh báo 
      [        
        {
          text: 'Do not show again',
          onPress: () => console.warn('Do not show Pressed!')
        },
        {
          text: 'Cancel',
          onPress: () => console.warn('Cancel Pressed!')
        },
        {
          text: abc,
          onPress: () => console.warn('OK Pressed!')
        },
      ],    // Tham số 3: Là 1 Mảng Các nút ấn có nội dung và có thể ấn được và làm hành động nào đó  -- Android có tối đa 3 nút nhấn 
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!')    
        } // Tham số 4: Là 1  object chứa cancelable : Có thể đóng bằng nút thoát vật lý của máy  . onDismiss : khi alert bị đóng sẽ thực thi hành động gì 
      )

       //// ------ CÁCH 2 : ToastAndroid : Alert chỉ dành cho android  
      ////-- Cũng có thể dùng toast để cảnh báo cho người dùng nhưng chỉ có thể sử dụng cho android 
      //// ToastAndroid có 3 phương thức 

        //--- show
    //   ToastAndroid.show(
    //     'The name must be longer than 3 characters',  // Tham số 1: Nội dung cảng báo 
    //     ToastAndroid.LONG,  // Tham số 2 : Thời gian hiển thị   SHORT : 2 s LONG: 3.5 s
        
    //   )
        ////---showWithGravity
    //   ToastAndroid.showWithGravity(
    //     'The name must be longer than 3 characters',
    //     ToastAndroid.LONG,
    //     ToastAndroid.CENTER,  // Tham số 3: vị trí hiển thị cảnh bảo 
    //   )
        ////----showWithGravityAndOffset
      // ToastAndroid.showWithGravityAndOffset( 
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      //   100,  //Tham số 4: Đẩy được chiều trục x
      //   200   // Tham số 5: Đây được chiều trục y  -> thiếu 1 tham số sẽ gây lỗi 
      // )
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default _Alert ;
