//

import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';    // Bản nâng cấp của react-native-video
import { createThumbnail } from "react-native-create-thumbnail";

const RnVideo = () => {
  const [image, setImage] = useState("")

  const CreateThumbnail = () => {
    createThumbnail({
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
      timeStamp: 20000,   // Đây là thời gian mà nó sẽ chụp ảnh của video 
    })
      .then(response => {
        const hinhAnh = response.path
        console.log({ hinhAnh })
        setImage(hinhAnh)
      }
      )
      .catch(err => console.log({ err }));
  }



  const height = Dimensions.get('window').height;
  return (
    <View style={{ width: "100%", height: height / 2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: 250, height: 250 }}>

        {/* <Video
        // source={require('./video/video.mp4')} 
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}

        // source={{uri :"https://www.youtube.com/watch?v=mpSmBuco6I0" }}  // FALSE video youtube không được

        // source={{
        //   uri: "https://www.example.com/video.mp4",
        //   headers: {
        //     Authorization: 'bearer some-token-value',
        //     'X-Custom-Header': 'some value'
        //   }
        // }}   // FALSE ??
       
        isPlay={true}
        isMuted={true}
        controls= {true}
        style={styles.backgroundVideo} 
        /> */}

        <VideoPlayer
          // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          // Đây là link video camera chạy được
          source={{ uri: "https://cdn.intface.vn/live/1919e0c0cc75451480aa4cbda94c1242716.stream/playlist.m3u8" }}
        />

      </View>
      <TouchableOpacity
        onPress={CreateThumbnail}
        style={{ marginTop: 50 }}
      >
        <Text>
          Chup anh
        </Text>

      </TouchableOpacity>

      {image ? <Image
        style={{ width: 70, height: 70 }}
        // source={require(image)}  //FALSE
        source={{ uri: image }}
      // source={image ? { uri: Platform.OS == 'android' ? `//file://${image}` : image } : ""}    //Hiển thị ảnh mà từ thư mục điện thoại lên 

      /> : null}

    </View>
  )
}

export default RnVideo
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 250,
    height: 250,
  },

})