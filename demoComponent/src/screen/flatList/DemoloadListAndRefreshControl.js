
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, FlatList, Dimensions, RefreshControl, ActivityIndicator
  , TouchableHighlight
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [refreshControl, setRefreshControl] = useState(false)

  const mang_du_lieu = [
    { title: 'cam' },
    { title: 'xoai' },
    { title: 'man' },
    { title: 'tao' },
    { title: 'buoi' },
    { title: 'cam' },

  ];
  const [data, setData] = useState(mang_du_lieu)

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={({ item, index }) =>
          <View style={styles.item} >
            <TouchableHighlight onPress={() => { }} style={{ fontSize: 22 }} underlayColor='aqua' >
              <Text style={styles.item_2} >  {item.title}  index        {index} </Text>
            </TouchableHighlight>
          </View>
        }

        // Khi hiện danh sách không phải gọi Api hết tất cả danh sách rồi render trong 1 lần  => rất nặng máy rất đơ 
        /**
         * onEndReached : Khi vuốt lên ở kịch dưới 
         * Nên sau khi đến cuối trang thì mới gọi api để lấy 1 trang mới . phân trang và size trang back end sẽ chia cho mình . và mình chỉ gọi trang đó vế
         * Rồi concat vào trong cái mảng mới của FlatList
         * 
         * Khi refreshControl : Tức xuốt xuống ở kịch trên thì sẽ load dữ liệu mới nhất 
         */
//        Swipe to Refresh
        refreshControl={
          <RefreshControl 
          refreshing={refreshControl}
           onRefresh={() => {
            setRefreshControl(true)   // Khi mới bắt đầu kéo xuống thi để true để con quay xuất hiện
            console.log("lam moi")
            // setData(mang_du_lieu)
            setData(data.concat([ { title : "moi a nha"}]))
            setRefreshControl(false)  // Khi sử lý dữ liệu xong rồi thì set lại = false để con quay ẩn đi 
          }} 
          colors={['green']} 
          />
        }

//       Load More
        ListFooterComponent={() => (
          isLoading ? //  a==b ? b : a
              <View style={{
                  marginTop: 10, 
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                  // width : WIDTH,
                  // height : 50 ,
                  flexDirection : 'column'
              }} >
                <Text > Tải Thêm </Text>
                  <ActivityIndicator size="large" color='#0000ff' />
              </View> : null
      )}

      onEndReached={()=>{  // Khi mà lướt đúng tới cuối cùng thì sẽ cho cái ListFootercomponent được chạy y
        setIsLoading(true)
        console.log("Load More")
        // setData(mang_du_lieu)
        
        setTimeout(() => {
          setData(data.concat([ { title : "Vuốt xuống  "} ]))
          setIsLoading(false)
        }, 2000);
      }}

      onEndReachedThreshold = {0.1}   // Khoảng cách bao nhiêu thì lọt vào onEndReached 
      // 0853460198 ZALO
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  item: {
    width: WIDTH,
  },

  item_2: {
    width: WIDTH,
    borderBottomWidth: 3,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22,
  },
});
1