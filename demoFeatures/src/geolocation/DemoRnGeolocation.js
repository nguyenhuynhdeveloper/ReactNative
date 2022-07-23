import { Text, StyleSheet, View, Platform, Linking, Alert, SafeAreaView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';


/**
 * React Native có 1 API vị trí đại lý @ react-naitve-community/gelocation  .. Không khuyến khích sử dụng Api này vì nó chậm hơn cái thuần  
 */
//16/6/2022
/**
 * react-native-geolocation-service : Là thư viện mà giúp định vị trí của thiết bị 
 * 
 * 1 Cần phải xin quyền vị trí , với ios thêm ios-demoFeatures-Info.plist
 * 	<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>Ứng dụng cần quyền lấy thông tin vị trí địa lý để chấm công người dùng ở bên ngoài văn phòng ở chế độ nền</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>Ứng dụng cần quyền lấy thông tin vị trí để chấm công</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>Ứng dụng cần quyền lấy thông tin vị trí để chấm công</string>

    2. Cần phải xin quyền  vị trí với android thêm vào android -app-main - AndroidManifest.xml
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
 */

  const DemoGeolocation = () => {
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    ////CÁCH 1 : Cách code ngắn gọn 
    // useEffect( async () => 
    // {
    //     const status = await Geolocation.requestAuthorization('whenInUse');   // Hiện ra 1 bảng đòi quyền 
    //     if (status == 'granted') {    
    //                     Geolocation.getCurrentPosition(     // Lấy vị trí hiện tại 
    //                 (pos) => {
    //                     console.log('Ví trí hiện tại của thiết bị  ', pos);
    //                     const crd = pos.coords;
    //                     setPosition({
    //                         latitude: crd.latitude,
    //                         longitude: crd.longitude,
    //                         latitudeDelta: 0.0421,
    //                         longitudeDelta: 0.0421,
    //                     });
    //                      console.log(" Đã có quyền truy cập ")
    //                      return true;
    //                 })}},[]) 

    //CÁCH 2:  với IOS mở modal đòi quyền truy cập ứng dụng 

    // Với nền tảng IOS phải xin quyền định vị 
    const hasPermissionIOS = async () => {    // Xin quyền truy cập truy cập định vị của IOS : Sẽ hiện ra 1 Alert để hỏi quyền 
        const status = await Geolocation.requestAuthorization('whenInUse'); // Yêu cầu quyền truy cập chỉ sài với nền tảng ios
        console.log(" TRạng thái quyền truy cập ", status)

        if (status == 'granted') {    // Khi ấn chấp nhận truy cập vị trí 
            console.log(" Đã có quyền truy cập ")
            return true;
        }

        if (status == 'denied') {
            Alert.alert('Quyền truy cập vị trí bị từ chối');
        }

        if (status == 'disabled') {
            Alert.alert(
                `Bật Dịch vụ vị trí để cho phép xác định vị trí của bạn`,
                '',
                [
                    { text: 'Đi đến cài đặt' },
                    {
                        text: "Huỷ"
                    },
                ],
            );
        }

        return false;
    };

    // ---------Lấy vị trí ở cả 2 nền tảng 
    const hasLocationPermission = async () => {    // Trạng thái quyền đăng nhập với 2 nền tảng khác nhau  
        let hasPermission = false;

        if (Platform.OS == 'android') {   // Với android thì quyền luôn bằng true tất cả mọi quyền bên android đa số là true 
            hasPermission = true;
        }
        if (Platform.OS == 'ios') {    // Chỉ bên ios mới hỏi quyền 
            hasPermission = await hasPermissionIOS();
            console.log(" Trạng thái quyền quy cập  nền tảng  IOS ", hasPermission)
        }


        if (hasPermission) {
            Geolocation.getCurrentPosition(     // Lấy vị trí hiện tại   
            // phương thức getCurrentPosition (callback , ErorCallBack , Options)
        
                (pos) => {
                    console.log('Ví trí hiện tại của thiết bị  ', pos);
                    const crd = pos.coords;
                    setPosition({
                        latitude: crd.latitude,
                        longitude: crd.longitude,
                        latitudeDelta: 0.0421,
                        longitudeDelta: 0.0421,
                    });
                    console.log(position)
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }  // Đây là tham số thứ 3 xác định các tập hợp các tuỳ chọn để thu nhận dị trí của thiết bị 
                /**
                 * enableHighAccuracy : 
                 */
            );
        }


    };

    useEffect(() => {
        hasLocationPermission();   // Sau khi hiện view thì chạy hàm xin quyền và lấy vị trí 
    }, [])







    return (
        <SafeAreaView>
            <Text>DemoGeolocation</Text>
            <Text> latitude : {position.latitude}</Text>
            <Text>{position.latitudeDelta}</Text>
            <Text> longitude : {position.longitude}</Text>
            <Text>{position.latitudeDelta}</Text>
        </SafeAreaView>
    )
}

export default DemoGeolocation

