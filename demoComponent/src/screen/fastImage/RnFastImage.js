import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'

const RnFastImage =() =>   {

    return (
      <SafeAreaView>
           <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}

        
    />
    
      </SafeAreaView>
    )
  }

export default RnFastImage
const styles = StyleSheet.create({})