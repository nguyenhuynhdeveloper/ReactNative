////-------useEffect() 
/**
 * useEffect() Sẽ đươc chạy sau khi component đã được render xong 
 * Khi không có truyền array dependency thì khi mà state hay props nào thay đổi thì hàm bên trong sẽ được chạy : component did update
 * KHi truyền 1 array dependence rỗng thì sẽ chạy duy nhất 1 lần sau khi component đã render : component Did mount
 * Khi truyền 1 biến nào đó vào array dependence thì biến đó chạy thì hàm trong sẽ được chạy : Component Did update (Có state phụ thuộc )
 */

import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component, useCallback, useContext, useEffect , useState, useReducer, useRef, useMemo } from 'react'


const  Hook_useEffect =() => {

    return (
      <SafeAreaView>
        <Text>Hook_useEffect</Text>
      </SafeAreaView>
    )
  }

  export default Hook_useEffect

const styles = StyleSheet.create({})