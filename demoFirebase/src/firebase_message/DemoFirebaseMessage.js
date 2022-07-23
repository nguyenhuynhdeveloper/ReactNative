// File này mưới chỉ config được với android
//Ứng đang chạy, đang hiển thị cho người dùng thấy thì nó được gọi là foreground application
//Background application: Là ứng dụng đó đó đang được chạy ngầm (chạy nền) bên trong hệ thống, người dùng không thấy nó. Tình huống thường xảy ra là, khi người dùng bấm nút Home (trên iphone, android) thì ứng dụng đó "đóng lại". Mình không thấy nó nhưng nó vẫn đang được chạy ngầm bên dưới.
import React, {useEffect ,useState} from 'react';
import {View, Button, Alert ,Text} from 'react-native';

import messaging from '@react-native-firebase/messaging';



const DemoFirebaseMessage =() => {

    const [token, setToken] = useState("")
    const getFCMToken = () => {
      messaging()
        .getToken()   // Lấy token của fcm : firebase cloud message
        .then(token => {
          console.log('token=>>>', token);
          setToken(token)
        });
    };

    

    // Đây tạo hàm lắng nghe các sự kiện của thông báo đẩy từ firebase ( mà do cái back end nó đẩy vào fire base)
    const createNotificationListeners = () => {

      //Khi có thông báo - App đang chạy nền  -----> Sẽ có thông báo đẩy
      messaging().setBackgroundMessageHandler(async remoteMessage => {   
        console.log(' Khi có thông báo - App đang chạy nền    ==>', remoteMessage);
      });

      //Khi có thông báo -App đang mở    -----> Thì sẽ không có thông báo đẩy--> Mình sẽ phải tự tạo 1 cái modal hoặc Alert.alert riêng 
      messaging().onMessage((message) => {  // Có thông báo mà đang mở app thì chui vào đây
        console.log('Khi có thông báo -App đang mở  ==>', message);   
      });

      // Khi ấn vào thông báo - App đang chạy nền
      messaging().onNotificationOpenedApp((notificationOpen) => {   
        console.log('Khi ấn vào thông báo - App đang chạy nền   ' + notificationOpen )
      });
      
      // KHi ấn vào thông báo -App đang đóng 
      //Khi một thông báo từ FCM đã kích hoạt ứng dụng mở từ trạng thái thoát, 
      //phương thức này sẽ trả về một RemoteMessage chứa dữ liệu thông báo hoặc vô hiệu nếu ứng dụng được mở bằng phương pháp khác.
      // Khi mà refesh code mở lại app cái này cũng chạy trả về trạng thái null 
      
      messaging().getInitialNotification().then((notificationOpen) => {   
        console.log('KHi ấn vào thông báo -App đang đóng ' + notificationOpen)    
      })


    };
    
      useEffect(() => {
        getFCMToken();
        createNotificationListeners()
         console.log("first")
        },[]);
      
    console.log("Sẽ chạy trước useEffect")
    
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button title="Send Notification"  />
          <Button
            title="Send Multi Device Notification nguyenvanhuynh "    
          />
          <Text>{token}</Text>
        </View>
      );
}


export default DemoFirebaseMessage;
