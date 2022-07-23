import React, { useState, useEffect } from 'react';
import { TANG , GIAM} from "./src/redux/action"
import { store } from './src/redux/store';
import { Provider, useDispatch ,getState} from 'react-redux'

import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
// Khi mà viết useDipatch() hay store.getState() trước khi mà wraps <Provider store={store} > là sẽ lỗi 
function Screen() 
{
    const [state, setState] =useState("0")
    const dispatch = useDispatch()
    var soluong = store.getState()
return (
    <SafeAreaView>
        <Text>
            xin chafo  
        </Text>
        <Text>{JSON.stringify(soluong)} </Text>
        <TouchableOpacity onPress={() => {dispatch({type: "USER_FETCH_REQUESTED"}) ; setState(!state)}}>
    <Text> TAng </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => {dispatch({type: "GIAM"}) ; setState(!state)}}>
    <Text> GIAm </Text>
        </TouchableOpacity>
    </SafeAreaView>
)
}
 export default Screen;