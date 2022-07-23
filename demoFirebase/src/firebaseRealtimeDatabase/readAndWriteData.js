import react, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { getDatabase, ref, set, child } from "firebase/database";


// Để có thể đọc hoặc viết data từ firebase thì đều bắt buộc phải có you need an instance of firebase.database.Reference

function writeUserData(userId, name, email, imageUrl) {
    const [data, setData] = useState()
    const db = getDatabase();
    const dbRef= ref(db)

returnn (

    <View> 

        <TouchableOpacity
            // Để có thể write dược data lên firebase thì dùng hàm set()
            onPress={
                set(ref(db, 'users/' + userId), //  Cái tham số đầu tiên là reference (Dữ liệu lấy về , đường dẫn key )
                    {                               // Tham số thứ 2 là dữ liệu sẽ đẩy lên : đường dẫn và reference đó       
                        username: name,
                        email: email,
                        profile_picture: imageUrl
                    })
            }
        />
        {/** Đọc dữ liệu liên tục cứ có thay đổi dữ liệu là đọc bằng hàm onValue() */}
        <TouchableOpacity
            // Để có thể read dược data từ firebase thì dùng hàm onValue()
            // Sử dụng snapshots để có thể đọc ảnh chụp nhanh tĩnh của nội dung tại 1 đường dẫn , vì chúng tồn tại tại thời điểm diễn ra sư kiện 
            // onValue() được kích hoạt 1 lần sự lắng nghe được đính kèm và lặp lại mối lần khi dữ liệu thay đổi bao gồm cả phần tử con 
            // Sự kiện gọi là sẽ chuyển qua 1 snapshots chứa tất cả dữ liệu tại vị trí đó bao gồm cả dữ liệu con 
            // Khi không có dữ liệu snapshots.exists() return false
            //snapshots.val() return null        
            // Sự kiện lắng nghe sẽ nhận được 1 ảnh chụp snapshots có chứa dữ liệu tại vị trí được chỉ định trong cơ sở dữ liệu tại thời điểm diễn ra sự kiện   
            // Truy xuất dữ liệu trong snapshots bằng method val()  -> snapshots.val()                    
            onPress={

                onValue(ref(db, 'posts/' + postId + '/starCount'),
                    (snapshot) => {
                        const data = snapshot.val();  // Không có dữ liệu sẽ trả về null
                        const state = snapshot.exists(); // Không có dữ liệu sẽ trả về false
                        setData(data);
                    })
            }
        />

        {/** Đọc dữ liệu 1 lần để giảm đi băng thông và chi phí ) 
         * SDK được thiết kế để quản lý các tương tác với các máy chỉ cơ sử dữ liệu cho ứng dụng của bạn cho dù trực tuyến hay ngoại tuyến 
         * Dùng hàm get()  để có thể lấy ảnh chụp nhanh dữ liệu của firebase 
         * nếu vì ký do gì get() không trả về giá trị máy chủ. máy khách sẽ thăm dò bộ nhớ cục bộ và trả về lỗi nếu vẫn không tìm thấy  
        */}

        <TouchableOpacity
            onPress={ 
        get(child(ref(db), `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
            console.log(snapshot.val())
            }
            else {
            console.log("No data available")
            }
            })
            .catch((error) => {
            console.error(error)
                })
        }
        />

    </View>
)

}    
