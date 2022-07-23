
//17/6/2022_firebase tìm hiểu tạo push notification 
// Lên fiebase console tạo 1 dự án  -. thêm ứng dụng vào dự án đó  -> để tên app trùng package trong AndroidManifest 
//Tải file googleService.json vào trong android/app
//cd android && ./gradlew signingReport chạy dòng code này để lấy SHA, SHA1 Điều này tạo ra hai khóa biến thể. Bạn phải sao chép cả khóa 'SHA1' và 'SHA-256' thuộc tùy chọn khóa biến thể 'debugAndroidTest'. Sau đó, bạn có thể thêm các khóa đó vào 'tệp tham chiếu chứng chỉ SHA' trên ứng dụng của mình trong bảng điều khiển Firebase.
// config thêm code vào 2 file android/build.gradle , và android/app/build.gradle 
// Vậy là có thể lên sendMessage trên firebase

// Khi maf chay tren may that thi cos FCMtoken cha ve-- Còn chạy trên máy ảo khi đã lấy token 1 lần rồi thì lại k lấy token được nữa

// Còn với  config ios : thì Phải có tài khoản bundle id. xong được cấp 1 file v8 duy nhất 1 lần . chỉ được cấp 1 lầ duy nhất không  xin lại được
// lên xcode thêm 2 chức năng trong mục sign&capicaable 
/**
 * 
 * > Task :app:signingReport
Variant: debug
Config: debug
Store: /Users/mac/LibraryDev/ReactNative/demoFirebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------
Variant: release
Config: debug
Store: /Users/mac/LibraryDev/ReactNative/demoFirebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------
Variant: debugAndroidTest
Config: debug
Store: /Users/mac/LibraryDev/ReactNative/demoFirebase/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, May 1, 2052
----------
 */
import messaging from '@react-native-firebase/messaging';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
class FCMService  {
  // Tạo lắng nghe thông báo 
  createNotificationListeners =  () => {
    messaging().onNotificationOpenedApp((notificationOpen) => {   //Khi ấn vào thông báo App đang chạy nền 
  
    });

    messaging().getInitialNotification().then((notificationOpen) => {   //Khi ấn vào thông báo App đang đóng
      if (notificationOpen) {
        
      }
    })
 
    messaging().onMessage((message) => {     // Khi có thông báo - App đang mở 
      console.log('FougroundMessage ==>', message);
     
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {   // Khi có thông báo App đang chạy nền 
      console.log('Background ==>', remoteMessage);
    });

    messaging().onTokenRefresh((fcmToken) => {     // Khi mà FCM Refresh
      AsyncStorage.setItem('fcmToken', fcmToken);   //-> Lưu cái  FCM token vào AsyncStorage -- Cứ có cái mới thì lưu vào kho 
    });
  };

  //Check quyền xem đã có quyền thông báo hay chưa -- Android mặc định là có quyền gửi thông báo 
  async checkPermission() {

    const enabled = await messaging().hasPermission();
    if (Platform.OS != 'android') {
      if (enabled === messaging.AuthorizationStatus.AUTHORIZED || enabled === messaging.AuthorizationStatus.PROVISIONAL) {
        this.getToken();
      } else {
        this.requestPermission();
      }
    } else {
      if (enabled) {   // Nếu mà có quyền thì mặc định lấy token 
        this.getToken();
      } else {     // Chưa có quyền thì đi yêu cầu quyền 
        this.requestPermission();
      }
    }
  };

  // Yêu cầu quyền push notification 
  async requestPermission() {
    try {
      const authStatus = await messaging().requestPermission({ providesAppNotificationSettings: true });
      if (authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
        this.getToken();
      } else {
        throw ''
      }
    } catch (error) {
      console.log('quyền bị từ chối');
    }
  };


  //Lấy token
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');  // --> Lấy cái token từ cái AsyncStorage ra 
    if (!fcmToken) {
      fcmToken = await messaging().getToken();  // Nếu k có thì đi gọi mới về
      if (fcmToken) {    // Khi mà đã có rồi thì sẽ lại lưu vào AsyncStorage 
        await AsyncStorage.setItem('fcmToken', fcmToken); 
      }
    }
    console.log('FCM TOKEN ====', fcmToken);
  };

  // Xoá token 
  deleteToken =  async () => {
    try {
      await messaging().deleteToken()   // Xoá cái FCM token mà đã đăng ký với firebase Để sau không nhận được tin nhắn nữa
      await AsyncStorage.removeItem("fcmToken")   
    } catch (error) {
      console.log('Delete token error ', error);
    }
  };

  //Huỷ đăng ký 
  unRegister = () => {

  }
}

// export 1 đối tượng được tạo từ function contructors đó 
export  default fcmService = new FCMService();


















