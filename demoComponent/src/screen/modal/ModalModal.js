//Mục tiêu của react-native-modal là mở rộng thành phần React Native <Modal> ban đầu bằng cách thêm hoạt ảnh, tùy chọn tùy chỉnh kiểu và các tính năng mới, 
//trong khi vẫn cung cấp một API đơn giản.
import Modal from "react-native-modal";   // Chỉ là 1 phiên bản nâng cấp của modal mặc định của react -native 
import React, { useState } from "react";
import { Button, Text, View , SafeAreaView} from "react-native";


function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal 
      isVisible={isModalVisible}
      animationIn = "fadeIn"  // Cái nâng cấp là có thể có những hiệu ứng đẹp mắt
      animationInTiming = {3000}
      animationOut = "bounceIn" 
      animationOutTiming ={2000}
      avoidKeyboard = {true}   // Nếu bàn phím hiện lên thì sẽ tránh bàn phím 
      backdropColor = "yellow"  // Màu nền che phủ toàn trang 
      backdropOpacity = {0.6}   // Độ mờ bao phủ toàn trang 
      backdropTransitionInTiming = {400}  // Thời gian sẽ hiện màu nền 
      backdropTransitionOutTiming = {500}  // Thời gian sẽ ẩn màu nền 

      style={{ justifyContent: "center" ,alignItems: "center" }}  // Phải thêm style vào để có thể căn giữa cho nội dung 
      
      >
        <View style={{ justifyContent: "center" ,alignItems: "center" , width: 200, height: 200 , backgroundColor: "blue"}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
<View  style={{ justifyContent: "center" ,alignItems: "center" , height: 400, backgroundColor: "red" }}>
</View>
    </SafeAreaView>
  );
}

export default ModalTester;