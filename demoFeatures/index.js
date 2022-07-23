/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.configure({   // Phần này thuộc về thư viện react-native-push-notification
    onNotification: function (notification) {   // Đây là phần thực hiện khi thông báo được nhấn vào 
        console.log("NOTIFICATION:", notification);
    },
    requestPermissions: Platform.OS === 'ios'   // Đây là k sử dụng thông báo từ xa
});

AppRegistry.registerComponent(appName, () => App);
