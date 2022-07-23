//https://www.npmjs.com/package/@react-native-community/netinfo
//NetInfo from "react-native" : đã bị xoá khỏi react-native . giờ dùng phải tải về từ @react-native-community/netinfo
// Với IOS để có thể có thông tin BISSD phải config trên Xcode để có quyền 

import React, { Component, useEffect } from "react";
import { View, Text, Button, Alert, Platform, SafeAreaView, PermissionsAndroid } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {useNetInfo} from "@react-native-community/netinfo";

/**
 * 
 * Các method có trong NetInfo 
 * fetch()
 * refresh()s
 * addEventListener()
 * useNetInfo()
 */

const DemoRncNetinfo = () => {
  const netInfo = useNetInfo();  // Có thể đưa 1 object các configure bên trong 



  useEffect(() => {
    requestLocationPermission()

    fetch()
    fetch_Then()
    

    // fetchWifi()   
    // fetchWifi_Then()




    // Subscribe  : Đăng ký để kết nối thống tin 
    //callback bên trong sẽ được gọi lại khi nào trạng thái kết nối thay đổi 
    //Chỉ cần chạy 1 lần duy nhất là luôn luôn lắng nghe. mở tai nghe, có sự thay đổi mạng là lọt vào chạy , chạy callback
    //(state: NetInfoState) => void   là tham số của addEventListener

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
    // Unsubscribe : Huỷ đăng ký wifi khi màn hình bị ComponentWillUnMount 
    return (
      () => unsubscribe())

  }, [])


  // Xin quyền truy cập vị trí 
  const requestLocationPermission = async () => {
    try {
  
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'App Location Permission',
          'message': 'Maps App needs access to your map ' +
            'so you can be navigated.'
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
        return true;
  
      } else {
        console.log("location permission denied");
        return false;
      }
  
    } catch (err) {
      console.warn(err)
    }
  
   }
   //end

// Method 
  // Lấy trạng thái mạng chỉ 1 lần 
  //Không truyền đối số wifi
  const fetch = async () => {
    const res = await NetInfo.fetch()    
    console.log("NetInfo.fetch", res)
    console.log("NetInfo.fetch", res.details)
  }

  const fetch_Then = async() =>{
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      console.log("SSID", state.details.ssid);
      console.log("BSSID", state.details.bssid);
    });
  }


  // Có Thể truyền 1 tham số dạng  NetInfoStateType Bạn có thể tùy chọn gửi một chuỗi giao diện để Promise phân giải thành NetInfoState 
  const fetchWifi = async () => {
    const res = await NetInfo.fetch("wifi")
    console.log("NetInfo.fetch('wifi')", res)   // Kết quả trả về giống y như NetInfo.fetch không có tham số ('wifi)
  }
  
  //Nếu mạng là wifi thì dữ liệu trường detail có các properties sau 
  const fetchWifi_Then = async () => {
    NetInfo.fetch("wifi").then(state => {   // state : là 1 object có rất nhiều property bên trong 
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      console.log("isInternetReachable?", state.isInternetReachable);   // Có thể kết nối mạng bằng kết nối mạng hiện tại hay không
      console.log("isWifiEnabled?", state.isWifiEnabled);  // only Android   : Wifi của bạn đang bật hay tắt

      console.log("SSID", state.details.ssid);   // state.detail là object chứa rất nhiều property bên trong 
      console.log("isConnectionExpensive", state.details.isConnectionExpensive); //Nếu kết nối mạng được coi là "đắt tiền". Điều này có thể là năng lượng hoặc tiền tệ.
 
      
    });

    console.log('NetInfo.fetch("wifi")')
  }


  return (
    <SafeAreaView>
      <Button
        onPress={() => CheckConnectivity()}
        title="Check Internet Connectivity"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
      <Text>
        {JSON.stringify(netInfo.details)}
      </Text>
    </SafeAreaView>
  )

}

export default DemoRncNetinfo