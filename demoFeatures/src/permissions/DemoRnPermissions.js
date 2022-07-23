//https://www.npmjs.com/package/react-native-permissions
// Thư viện : này cung cấp đầy đủ cách hàm đủ chức năng. Kiểm tra xem có quyền không ? Yêu cầu quyền truy API quyền thống nhất cho React Native trên iOS, Android và Windows.
//Kiểm tra quyền và yêu cầu giải quyết thành một trong các trạng thái này
/**
 * RESULTS.UNAVAILABLE  :Tính năng này không khả dụng (trên thiết bị này / trong ngữ cảnh này
 * RESULTS.DENIED	 :Quyền chưa được yêu cầu / bị từ chối nhưng có thể yêu cầu   // Không cho phép
 * RESULTS.GRANTED   :Quyền được cấp    //Trong khi dùng ứng dụng 
 * RESULTS.LIMITED   :Quyền được cấp nhưng có giới hạn   //Chỉ lần này 
 * RESULTS.BLOCKED   :Quyền bị từ chối và không thể yêu cầu được nữa   //Không hỏi lại 
 */

/**
 * Bước mà khai trong manifest.xml hiểu đơn giản chỉ là bước khai báo config , rằng trong ứng dụng sẽ dùng các quyền này 
 * Còn khi nào vd ấn vào camera thì sẽ nó sẽ tự động mở modal yêu cầu quyền truy cập từ người dùng
 * Còn nếu muốn chủ động hỏi quyền truy cập ngay sau khi đăng nhập vào app . thì sẽ check quyền trước sau đó request (tự động hiện modal) người dùng luôn 
 * vd: xin quyền camera. quyền vị trí , quyền blutooth
 */

import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useEffect } from 'react'

import { PERMISSIONS, RESULTS, check, checkMultiple, request, requestMultiple } from 'react-native-permissions';

const DemoRnPermissions = () => {

  useEffect(() => {

    checkPermissions()
    requestPermissionCamera()
    checkMultipleMany()
    requestMultipleMany()
  })
  //--------------- Kiểm tra xem có quyền truy cập chưa  -- cách dùng .then Promise
  // const checkPermissions =  () => {
  //   const resultCheck =  check(PERMISSIONS.ANDROID.CAMERA)
  //     .then((result) => {
  //       switch (result) {
  //         case RESULTS.UNAVAILABLE:
  //           console.log('This feature is not available (on this device / in this context)');
  //           break;
  //         case RESULTS.DENIED:
  //           console.log('The permission has not been requested / is denied but requestable');
  //           break;
  //         case RESULTS.LIMITED:
  //           console.log('The permission is limited: some actions are possible');
  //           break;
  //         case RESULTS.GRANTED:
  //           console.log('The permission is granted');
  //           break;
  //         case RESULTS.BLOCKED:
  //           console.log('The permission is denied and not requestable anymore');
  //           break;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Kiểm tra quyền có lỗi ")
  //     });
  // }

  //--------------- Kiểm tra xem có quyền truy cập chưa  -- cách dùng async await
  const checkPermissions = async () => {

    const resultCheck = await check(PERMISSIONS.ANDROID.CAMERA)
    console.log("KẾT QUẢ KIỂM TRA AWAIT", resultCheck)
        switch (resultCheck) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
  
     

  }

  //------------------- request: Yêu cầu quyền truy cập
  const requestPermissionCamera = async () => {
    const res = await request(PERMISSIONS.ANDROID.CAMERA)   // request Trả ra 1 result 
    console.log("KẾT QUẢ YÊU CẦU AWAIT", res)

    if (res == RESULTS.GRANTED) {
      console.log("Đã có quyền ")
    }

  }


  //---------    checkMultiple : Kiểm tra nhiều quyền song song
  const checkMultipleMany = () => {
    checkMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
      console.log('CAMERA', statuses[PERMISSIONS.ANDROID.CAMERA]);
      console.log('ACCESS_FINE_LOCATION', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
    });
  }

  //---------- 
  const requestMultipleMany = () => {
    requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
      console.log('status sau khi request CAMERA', statuses[PERMISSIONS.ANDROID.CAMERA]);
      console.log('status sau khi request ACCESS_FINE_LOCATION', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
    });
  }


  return (
    <View>
      <Text>DemoRnPermissions</Text>
    </View>
  )
}

export default DemoRnPermissions
const styles = StyleSheet.create({})