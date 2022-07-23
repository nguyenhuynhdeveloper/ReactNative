
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'




 import {
// DemoPermissionsAndroid,
// DemoRnPermissions,
// DemoGeolocation,
// DemoMaps,
// ExMaps,
// DemoRncNetinfo,
// DemoPushNotification,
// ScanFunction,
// DemoRnQrcode
 DemoRn_fs,
DemoRN_fetch_blob

 } from "./src/index.js"

export default  App = () => {

    //  return    <DemoMaps></DemoMaps> 
    //    return  <DemoGeolocation></DemoGeolocation>
    // return ( <DemoMaps1></DemoMaps1>)  // Demo trên Youtube
    // return (<ScanScreen></ScanScreen>)
    // return (<Scan></Scan>)
    // return <ScanFunction></ScanFunction>
    // return <NetInfo></NetInfo>   // Chưa config IOS

    // return (<DemoPermissionsAndroid></DemoPermissionsAndroid>)
    // return (<DemoRnPermissions></DemoRnPermissions>)
    // return (<DemoRn_fs></DemoRn_fs>)
    return <DemoRN_fetch_blob></DemoRN_fetch_blob>
}

const styles = StyleSheet.create({})


