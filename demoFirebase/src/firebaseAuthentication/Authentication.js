
// // Sau khi làm các bước trên firebase console
// // Tạo password Authentication 
// import { Text, StyleSheet, View , SafeAreaView} from 'react-native'
// import React, { Component } from 'react'



// import { 
//   getAuth, 
//   createUserWithEmailAndPassword ,
//   signInWithEmailAndPassword, 
//   signOut
//    } from "firebase/auth";

// function userInformation (props ){
//   const auth = getAuth();
// return (
// <View>

//  <TouchableOpacity
//   onPress= {
//     createUserWithEmailAndPassword(auth, email, password)     // sử dụng hàm này để tạo 1 user với email và password  trên các trường của firebase 
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;   // trong cái tham số của hàm resolve trả về là 1 object có trường key là user
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       })

//   }
// /> 
 
// // {/** Để đăng nhập với email và password đã đăng lý làm tương tự như tạo tài khoản  */}
//  <TouchableOpacity 
// onPress ={
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   })
// }
// /> 

// {/** Để đăng xuất với email và password đã đăng lý làm tương tự như tạo tài khoản  */}
// <TouchableOpacity 
// onPress ={
//   signOut(auth).then(() => {
//     // Sign-out successful.  // Tức sau khi ấn nút đăng xuất thành công thì làm gì gọi hàm gì
//   }).catch((error) => {
//     // An error happened.
//   })
// }
// /> 

// </View>

// )

// } 

