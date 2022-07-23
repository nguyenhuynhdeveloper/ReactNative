import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import BottomSheet from './BottomSheet'

 const Index = () => {

    return (
      <SafeAreaView>
        <Text>index</Text>
        {/* Cáhc */}
        {/* <BottomSheet color ={"red"}  
          children={  <Text> Đây là thẻ con của bottomsheet</Text>} > */}   

           <BottomSheet color ={"red"}  >
           <Text> Đây là thẻ con của bottomsheet</Text> 
        </BottomSheet>

      </SafeAreaView>
    )
  }

export default   Index
const styles = StyleSheet.create({})