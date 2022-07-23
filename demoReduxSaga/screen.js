import React, { useState, useEffect } from 'react';
import { store } from './src/redux/store';
import { Provider, useDispatch ,getState, useSelector} from 'react-redux'

// Khi mà viết useDipatch() hay store.getState() trước khi mà wraps <Provider store={store} > là sẽ lỗi 
import {
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
function Screen() 
{
    const [value1, setValue1] =useState("")
    const dispatch = useDispatch()

const number = useSelector(state => state.demSo)
const data = useSelector(state => state.getData)

const [giatri,setGiaTri] = useState('')

const setDuLieu = async () => {
await AsyncStorage.setItem("root1", JSON.stringify(123))
}

const xoaDuLieu = async () => {
    await AsyncStorage.removeItem("root1")    // Xoá trường dữ liệu root1 khỏi AsyncStorage
    }
 
const getDuLieu = async () => {
    let dulieu =await AsyncStorage.getItem("root1")
    setGiaTri(dulieu)
}


useEffect(() => {
getDuLieu() 
console.log(number)
},[giatri])


    // var soluong = store.getState()
return (
    <SafeAreaView>
        <Text>
            xin chafo  
        </Text>
        <Text>{JSON.stringify(number)} </Text>

        <TouchableOpacity onPress={() => {dispatch({type: "COUNT"})}}>
    <Text> TAng </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => {dispatch({type: "GIAM"}) }}>
    <Text> GIAm </Text>
       </TouchableOpacity>
       <Text>{JSON.stringify(data)} </Text>

           <TouchableOpacity onPress={ () => {dispatch({type: "GET_DATA"}) }}>
    <Text> GETData </Text>
        </TouchableOpacity>     

        <TextInput style={{ borderWidth: 1, borderColor: "red"}}
        >
        </TextInput>

        <TouchableOpacity 
        onPress={() => {setDuLieu()
            getDuLieu()
        } }>
            <Text> Gui du lieu</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
            xoaDuLieu()
            getDuLieu()
        }}>
            <Text> xoa du lieu</Text>
        </TouchableOpacity>



        <Text>{JSON.stringify(giatri)} </Text>
    </SafeAreaView>
)
}
 export default Screen;