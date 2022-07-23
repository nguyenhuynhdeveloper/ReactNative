// Load the module
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';    // Bản nâng cấp của react-native-video



const DemoRnVideo = () => {

  return (
    <View style={styles.backgroundVideo}>

      {/* <Video 
        // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   // Link mẫu 
        source={{uri: "https://cdn.intface.vn/live/1919e0c0cc75451480aa4cbda94c1242716.stream/playlist.m3u8"}}   // Can be a URL or a local file.
         /> */}

      <VideoPlayer
        source={{
          isNetwork: true,
          type: '',
          uri: "https://cdn.intface.vn/live/1919e0c0cc75451480aa4cbda94c1242716.stream/playlist.m3u8"   // ok
          // uri: "https://cdn.intface.vn/live/191cdb690a0617a4f08b2e144a0010f7946.stream/playlist.m3u8"
        }}  // link camera chạy được 
         control ={true}
         pictureInPicture = {true}
         playWhenInactive={true}
      />
    </View>
  )
}


export default DemoRnVideo

var styles = StyleSheet.create({
  backgroundVideo: {
    width: 350,
    height: 350,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});