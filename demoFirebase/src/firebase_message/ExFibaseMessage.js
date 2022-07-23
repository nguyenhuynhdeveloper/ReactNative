import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import  fcmService  from './ExFCMServices';

export default ExFirebaseMessage =() => {

    const initFcm = async () => {
        fcmService.checkPermission();
        fcmService.createNotificationListeners(
        );
      };

      useEffect(() => {  
          initFcm();
          return () => {   // Truớc khi chạy vào component díd mouse phải chạy vào clean này trước 
            fcmService.unRegister();    //17/6/2022_firebase huỷ bỏ đăng ký
          };
        }, []);

    return (
      <View style={{backgroundColor: "white "}}>
        <Text>ExFirebaseMessage</Text>
      </View>
    )
  


}

const styles = StyleSheet.create({})