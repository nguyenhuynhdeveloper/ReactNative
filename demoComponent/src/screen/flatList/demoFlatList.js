import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    RefreshControl,
    FlatList,
    SectionList,
    TouchableOpacity
} from 'react-native';

const DemoFlatList = () => {

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

    const DATA = [  // Mảng bắt buộc phải tên là DATA
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
        },
        {
            title: 'Title 2',
            data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
        },
        {
            title: 'Title 3',
            data: ['Item 3-1'],
        },
        {
            title: 'Title 4',
            data: ['Item 4-1', 'Item 4-2'],
        },
    ]

    const refValue = useRef()
    const [one1 , setOne1] = useState()
     
    const callback = (item, index) => {
        // refValue.current = index  // Cái này k sài được vì nó không render lại view
        setOne1(index)
        console.log("chỉ mục được bấm vào " , index)
    }
    return (

        //Cách 1 : dùng map qua từng phần tử của mảng  và dùng ScrollView để bao 

        // <ScrollView
        //   style={styles.body}
        //   refreshControl={
        //     <RefreshControl
        //       refreshing={false} // Đặt 1 biến vào trong để giá trị boolean để hiển thị khi nào thì con quay chạy và dừng  . Để bằng true thì nó sẽ liên tục quay
        //       onRefresh={onRefresh}   // Khi mà vuốt xuống khi scrollY : 0 thì sẽ chạy sự kiện này 
        //       colors={["red", "yellow"]}   // MÀu con quay sẽ thay đổi luân phiên giữa các mảng 
        //     />
        //   }
        // >
        //   {
        //     Items.map((object) => {
        //       return (
        //         <View style={styles.item} key={object.key}>
        //           <Text style={styles.text}>{object.name}</Text>
        //         </View>
        //       )
        //     })
        //   }
        // </ScrollView>

        //Cách 2 : Sử dụng FlatList  : Hiển thị danh sách 1 mảng phần tử là object
            <FlatList
            // numColumns={2}   // Số lượng cột -- Cái này chỉ hỗ trọ chiều dọc 
            // horizontal ={true}  // Chuyển list theo hàng ngang
            // inverted ={true}    // Chuyển chiều vuốt từ phải sang trái 
          keyExtractor={(item, index) => index.toString()}
          data={Items}     // Măng dữ liệu nhận vào 
          renderItem={( {item , index} ) => (    // Phải đặt ({item})  phải để như thế này nó mới có thể xác định được phần tử -- tức là nó destructoring object đó : tham số mặc định mà truyền cho hàm của renderItem ( item , index)
            <View style={ one1 == index ? styles.item : styles.items1 } >
                <TouchableOpacity 
                onPress={() =>  callback(item, index)}
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
        />


        // // Cách 3: Sử dụng SectionList  : Hiển thị 1 danh sách 1 mảng lồng mảng  
        // <SectionList
        //     keyExtractor={(item, index) => index.toString()}    // keyExtractor chỉ chấp nhận key dưới dạng chuỗi 
        //     sections={DATA}    // section là mảng chứa các mảng lồng bên trong 
        //     renderItem={({ item }) => (   // Đây thực ra đang hiển thị các mục mảng bên trong 
        //         <Text style={styles.text}>{item}</Text>
        //     )}
        // renderSectionHeader={({section})=>(   //Để hiển thị tiêu đề ở mỗi mảng bên trong . tiêu đề của mảng con 
        //   <View style={styles.item}>
        //     <Text style={styles.text}>{section.title}</Text>
        //   </View>
        // )}
        // />

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

export default DemoFlatList;
