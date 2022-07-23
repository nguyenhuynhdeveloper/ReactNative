import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    RefreshControl,
    FlatList,
    SectionList,
    TouchableOpacity, 
    DeviceEventEmitter
} from 'react-native';

const DemoCallback = (props) => {
    const {navigation , route } = props
     const {navigate , goBack } = navigation

  
// Phục vụ callback
    const [Items, setItems] = useState([
        { key: 1, name: 'Item 1' },
        { key: 2, name: 'Item 2' },
        { key: 3, name: 'Item 3' },
        { key: 4, name: 'Item 4' },
        { key: 5, name: 'Item 5' },
        { key: 6, name: 'Item 6' },
        { key: 7, name: 'Item 7' },
        { key: 8, name: 'Item 8' },
        { key: 44, name: 'Item 9' },
        { key: 68, name: 'Item 27' },
        { key: 0, name: 'Item 78' },
    ]);

    const [Refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { key: 69, name: 'Item 69' }]);
        setRefreshing(false);
    }
    const refValue = useRef()
    const [ReRender , setReRender] = useState()


    const callback = (props) => {
      const {item , index } = props
      // refValue.current = index  // Cái này k sài được vì nó không render lại view
      setReRender(index)
      console.log("chỉ mục được bấm vào " , index)
  }


    // Phục vụ DeviceEventEmitter
    const [emitter, setEmitter] = useState([
      { key: 1, name: 'Item 1' },
      { key: 2, name: 'Item 2' },
      { key: 3, name: 'Item 3' },
      { key: 4, name: 'Item 4' },
      { key: 5, name: 'Item 5' },
      { key: 6, name: 'Item 6' },
      { key: 7, name: 'Item 7' },
      { key: 8, name: 'Item 8' },
      { key: 44, name: 'Item 9' },
      { key: 68, name: 'Item 27' },
      { key: 0, name: 'Item 78' },
  ]);

  const [RefreshingEmitter, setRefreshingEmitter] = useState(false);

  const onRefreshEmitter = () => {
      setRefreshing(true);
      setEmitter([...emitter, { key: 69, name: 'Item 69' }]);
      setRefreshing(false);
  }
  const [ReRenderEmitter , setReRenderEmitter] = useState()
 
    const callbackEmitter = (props) => {
        const {item , index } = props
        // refValue.current = index  // Cái này k sài được vì nó không render lại view
        setReRenderEmitter(index)
        console.log("chỉ mục được bấm vào " , index)
    }



    useEffect(() =>{
        const eventListener = DeviceEventEmitter.addListener('CHANGE' , callbackEmitter)
        return ( () =>
        {
            eventListener.remove()
        })
     })
    return (



  <View style ={{ flexDirection: "row"}}>

{/* Cách 1 : Callback */}
      <FlatList  
    keyExtractor={(item, index) => index.toString()}
    data={Items}     // Măng dữ liệu nhận vào 
    ListHeaderComponent={ ()=> 
        <Text> callback</Text>
    }
    renderItem={( {item , index} ) => (    // Phải đặt ({item})  phải để như thế này nó mới có thể xác định được phần tử -- tức là nó destructoring object đó :
                                          // tham số mặc định mà truyền cho hàm của renderItem ( item , index)
      // <View style={ refValue.current == index ? styles.item : styles.items1 } >   // useRef không rerender lại view
      <View style={ ReRender == index ? styles.item : styles.items1 } >
          <TouchableOpacity 
          onPress={() =>  {
              navigate("DemoCallback",
              {
                  item: item,
                  index: index,
                  callback: callback,  // Cách 1: truyền cho nó 1 callback trong callback setState lại 
                  // callback: setReRender    // Cách 2: truyền luôn cho nó tham số thứ 2 của useState()  trong màn hình con thì setState(index) là xong 
              })
          }}
          // onPress={(item, index) =>  callback(item, index)}  //FALSE vì item, index này đã có mặc định rồi . chỉ cần truyền vào tham số của callback
          >
        <Text style={styles.text}>{item.name}</Text>   
          </TouchableOpacity>
      </View>
    )}
    refreshControl={
      <RefreshControl
        refreshing={Refreshing}
        onRefresh={onRefresh}
        colors={['#ff00ff']}
      />
    }
    style ={{ width: "50%" , height: "100%"}}
  />
 


{/* Cách 2: DeviceEventEmitter */}
  <FlatList  
    keyExtractor={(item, index) => index.toString()}
    data={emitter}     // Măng dữ liệu nhận vào 
    ListHeaderComponent={ ()=> {
        return (<Text> DeviceEventEmitter</Text>)
    }}
    renderItem={( {item , index} ) => (    // Phải đặt ({item})  phải để như thế này nó mới có thể xác định được phần tử -- tức là nó destructoring object đó : tham số mặc định mà truyền cho hàm của renderItem ( item , index) 
      <View style={ ReRenderEmitter == index ? styles.item : styles.items1 } >

          <TouchableOpacity           
          onPress={() =>  {
              navigate("DemoDeviceEvenEmitter",
              {
                  item: item,
                  index: index,
                  callback: callbackEmitter
              })
          }}
          >
        <Text style={styles.text}>{item.name}</Text>   
          </TouchableOpacity>
      </View>
    )}
    refreshControl={
      <RefreshControl
        refreshing={RefreshingEmitter}
        onRefresh={onRefreshEmitter}
        colors={['#ff00ff']}
      />
    }
    style ={{ width: "50%" , height: "100%"}}
  /> 
 
  </View>
    );
};



const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    items1 :{
        margin: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 45,
        fontStyle: 'italic',
        margin: 10,
    },
});

export default DemoCallback;
