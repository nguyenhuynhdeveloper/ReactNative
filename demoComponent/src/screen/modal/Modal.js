// Sử  dụng modal để thay thế Alert : Để cá nhân hoá cảnh báo 
//Sủ dụng 1 trang dưới dạng cửa sổ được bật lên trên trang hiện tại - Đè lên trang hiện tại - khi biến quyết định visible = {true}
// Chúng ta có thể sử dụng bất cứ thành phần nào bên trong nó
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
} from 'react-native';

const _Modal = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);   // Khi mà nhập vàp nhiều hơn 3 ký tự thì set lại biến submitted = true để có thể hiện chữ Clear
    } else {
      SetshowWarning(true);   // Khi ấn submit mà  nhập ít hơn 3 ký tự thì cửa sổ modal sẽ được bật lên 
    }
  }

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}    // Cửa số này chỉ được hiển thị đè lên trang hiện tại khi cái biến showWarning == true
        transparent  // Nền của modal là màu trắng theo mặc định nhưng  ta có thể làm mờ bằng transparent  -- Trong trường hợp này chỉ những view có màu nền background mới được hiển thị
        onRequestClose={() =>  // onRequestClose : tức là hành động bấm nút thoát vật lý sẽ làm gì 
          SetshowWarning(false)
        }
        animationType='slide'  // Chỉ định hoạt ảnh mà nó xảy ra :  slide là lướt từ dưới lên trên
        hardwareAccelerated    // Sử dụng tuỳ chọn này để tăng hiệu suất , tuỳ chọn này chỉ hoạt động trên các thiết bị Android
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 charachters</Text>
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}  // Ấn ok là cũng đóng cửa sổ modal
              style={styles.warning_button}
              android_ripple={{color:'#fff'}}    // Sử dụng gợn sóng trong nút để người dùng có cảm giác ấn -- khi ấn chuyển dần gộn sóng màu trắng
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}      // Khi ấn submit sẽ chạy hàm onPressHandler
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}    
        </Text>
      </Pressable>
      {
        submitted ?
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          :
          null
      }
    </View >
  );
};

const styles = StyleSheet.create({
  body: {     //--- Body View của màn hình chính  
    flex: 1,  
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },


  centered_view: {   // Toàn cái view tổng này sẽ là màu đen mờ
    flex: 1,   //Modal view sẽ  chiếm toàn màn hình  - view chính toàn bộ cửa sổ -- khi mà biến quyết định visiable  = {true }  Thì các view ở trong modal mới được hiện lên 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'  // 0000000  đó là màu đen . 00 -> 99 hiển thị độ trong số của màu  -- số 99 là mờ nhiều nhất 
  },
  warning_modal: {      // nội dung của cửa sổ chứa cảnh báo  -- sẽ là màu trắng 
    width: 300, 
    height: 300,
    backgroundColor: '#ffffff',  // 1 hình vuông có màu trắng
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  }
});

export default _Modal;