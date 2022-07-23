// https://github.com/MrToph/react-native-progress-circle#readme
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import ProgressCircle from 'react-native-progress-circle'

const  RnProgressCircle = () => {

    return (
      <SafeAreaView>
        <Text>RnProgressCircle</Text>
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>

        <ProgressCircle
            percent={40}   // Phần trăm đã download
            radius={30}     // Bán kính đường tròn
            borderWidth={10}   // Độ dày đường tròn   // Nếu để số > hơn radius thì hình tròn sẽ đặc 
            color={"red"}   //Màu đường tròn  border đã có phần trăm 
            shadowColor={"blue"}   // Màu bóng màu nền của đường đường viền 
            bgColor="yellow"   // Màu bên trong ruột đường tròn 

            containerStyle={ {"colors" : " green"}}   // Dạng style sẽ áp dụng cho children
            // outerCircleStyle = {}  //Kiểu dáng tuỳ chỉnh sẽ áp dụng cho đường tròn bên ngoài  
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>  

            {/* Text ở bên trong sẽ nằm giữa đường tròn --- children : Các con để hiểm thị trong Progress này  */}
        </ProgressCircle>

      </SafeAreaView>
    )
  }
export default RnProgressCircle 

const styles = StyleSheet.create({})