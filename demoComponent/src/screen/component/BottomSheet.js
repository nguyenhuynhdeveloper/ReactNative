import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const BottomSheet = ({
    color, 
    children
}) =>  {

    return (
      <View style= {{}}>
        <Text style={{color}}>bottomSheet</Text>
        {children}
      </View>
    )
  }
export default BottomSheet

const styles = StyleSheet.create({})