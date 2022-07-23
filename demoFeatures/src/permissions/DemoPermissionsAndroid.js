//https://reactnative.dev/docs/permissionsandroid

import React from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};






/**
 * request(permission, [rationale]);
 * permission : dạng string , quyền mà yêu cầu người dùng cho phép sử dụng 
 * rationale : Dakng object , Chứa các câu chữ mà sẽ hiển thị ra người dùng k bắt buộc . Và chức năng này sẽ kiểm tra với Hệ điều hành xem có cần thiết phải hiển thị hộp thoại giải thích lý do tại sao cần có quyền hay không.
 * chứa các trường : title , message, buttonPositive , buttonNegative, buttonNeutral
 */

const DemoPermissionsAndroid = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default DemoPermissionsAndroid;