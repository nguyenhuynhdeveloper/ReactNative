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

const ResolveSelectItem = () => {

    const [Items, setItems] = useState([
        { key: 1, name: 'Item 1'  , isSelected : true },
        { key: 2, name: 'Item 2'  , isSelected : true },
        { key: 3, name: 'Item 3'  , isSelected : true },
        { key: 4, name: 'Item 4'  , isSelected : true },
        { key: 5, name: 'Item 5'  , isSelected : true },
        { key: 6, name: 'Item 6'  , isSelected : true },
        { key: 7, name: 'Item 7'  , isSelected : true },
        { key: 8, name: 'Item 8'  , isSelected : true },
        { key: 44, name: 'Item 9'  , isSelected : true },
        { key: 68, name: 'Item 27' , isSelected : true  },
        { key: 0, name: 'Item 78' , isSelected : true  },
    ]);

    const [Refreshing, setRefreshing] = useState(false);
    const [reRender , setReRender] = useState(false) 


    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { key: 69, name: 'Item 69' }]);
        setRefreshing(false);
    }



    const ItemForFlatlist =(item, index) => {
return(

    <View style={item.isSelected == true ? styles.item : styles.items1} >
        <TouchableOpacity
        onPress={()=> {
            item.isSelected = !item.isSelected  // Vì cái này là tham chiếu tới ô nhớ nên giá trị ở trong ô nhớ đó đã được thay đổi , mà bên dưới render lại là hiệu ứng mới đã được cập nhật 
            setReRender(!reRender)    // Cái này chỉ có tác dụng Re render lại view thôi

        }}
        >
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    </View>
)
    }
    
    

    return (



        //Cách 2 : Sử dụng FlatList  : Hiển thị danh sách 1 mảng phần tử là object
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Items}     // Măng dữ liệu nhận vào 
            renderItem={({item, index}) => ItemForFlatlist(item,index)}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                    colors={['#ff00ff']}
                />
            }
        />


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
    items1: {
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

export default ResolveSelectItem;
