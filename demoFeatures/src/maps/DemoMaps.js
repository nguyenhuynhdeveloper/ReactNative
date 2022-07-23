import { Text, StyleSheet, View ,Dimensions} from 'react-native'
import React, { Component } from 'react'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import MapView, { PROVIDER_GOOGLE , enableLatestRenderer , Callout, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

/**
 * 16/6/2022 _maps khi cài thư viện maps vào cần phải cd ios && pod install
 * và config ở ios và android 
 *  react-native-maps cung cấp các component 
 * MapView , Marker, Callout , Polygon , Polyline , Circle , Overlay , Heatmap , Geojson 
 * Cái map vỗn dí đã đặt quyền ở info.list , chỉ cần người dùng bật định vị thì nó sẽ có vị trí thôi 
 */
   
const height = Dimensions.get("window").height
 const DemoMaps = () => (
    
      <View style={styles.container}>
        <MapView
        //   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
        //   region={{    // Khu vực sẽ hiển thị của map 
        //     latitude: 21.0463986,
        //     longitude: 105.7827275,
        //     latitudeDelta: 0.00021,
        //     longitudeDelta: 0.000421,
        //   }}
        //   initialRegion ={{   // Khu vực hiển thị ban đầu của map 
        //     latitude: 21.0463986,
        //     longitude: 105.7827275,
        //     latitudeDelta: 0.21,
        //     longitudeDelta: 0.0421,
        //   }}
          showsMyLocationButton={true}  //Hiện nút bấm để về vị trí của máy thật 
        //   mapType= {}    //Loại bản đồ sẽ hiển thị 
          showsUserLocation = {true}    // Hiện ra 1 mũi chấm để hiển thị người dùng 
          followsUserLocation ={true}
        >
        </MapView>
      </View>
   );

   export default DemoMaps

   const styles = StyleSheet.create({
    container: {
    //   ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
    //   ...StyleSheet.absoluteFillObject,
    width: 300,
    height: 300
    
    },
   });