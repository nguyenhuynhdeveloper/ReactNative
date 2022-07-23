import React, { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet,Text ,Image } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import RNFS from 'react-native-fs';

export const PATH_VIDEO = "/IntCam/videos/"

const DemoRN_fetch_blob =() => {
  const [image, setImage] = useState("")

  const downloadFileVideo = async () => {
      let dirs = RNFetchBlob.fs.dirs.DCIMDir
      if (Platform.OS == 'ios') {
          dirs = RNFetchBlob.fs.dirs.DocumentDir
      }
      let fileName = (new Date().getTime().toString());
      const folder = dirs + PATH_VIDEO
      const file_path = folder + `my_video_${fileName}.png`
      try {
          let check;
          if (Platform.OS == 'ios') {
              check = await RNFS.exists(folder) || false
          } else {
              check = await RNFS.existsAssets(folder) || false
          }
          if (!check) {
              await RNFS.mkdir(folder)   // Nếu folder đó chưa có thì tạo ra 1 folder đó 
              check = true
          }
          if (check) {
              try {
                  return RNFS.downloadFile({
                      fromUrl: "https://i.ytimg.com/vi/Mp9ZKRHNvMI/maxresdefault.jpg",
                      toFile: file_path,
                      progressDivider: 1,
                      background: true,
                      
                      progress: (data) => {
                          console.log("first " , data)
                          const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
                          if (percentage) {
                            
                              console.log("phần tram download" ,percentage )
                          }
                      },
  
                      begin: () => {
                          console.log('StartDownload file')
                      }
                  }).promise.then(res => {
                      console.log("first" ,res )
                      //22/6/2022_download
                     
                      
                  }).catch(err => {
                      console.log(err, 'download failed!!');
                  });
              } catch (error) {
                  console.log('downloadFileVideo1 error', error)
              }
          }
      }
      catch (error) {
          console.log('downloadFileVideo error', error)
      }
  }
  
  const readListVideoDir = async () => {
      try {
          let dirs = RNFetchBlob.fs.dirs.DCIMDir
          if (Platform.OS == 'ios') {
              dirs = RNFetchBlob.fs.dirs.DocumentDir
          }
          const folder = dirs + PATH_VIDEO
  
          let check;
          if (Platform.OS == 'ios') {
              check = await RNFS.exists(folder) || false
          } else {
              check = await RNFS.existsAssets(folder) || false
          }

          if (!check) {
              await RNFS.mkdir(folder)
              check = true
          }
  
          if (check) {
              const res = await RNFS.readdir(folder, 'base64')
              let tmpList = []
              res.forEach(e => {
                  tmpList.push(`${folder}/${e}`)
              });
              setImage(tmpList[0])
              return tmpList
          }
          return []
      } catch (error) {
          console.log('Read file error', error)
          return []
      }
  }
  useEffect(()=> {
    downloadFileVideo()
    readListVideoDir()
    console.log("đường dẫn " , image)
  })
 return (
 <SafeAreaView>
  <Text> xin chào </Text>
  <Image source= {{ uri: Platform.OS == 'android' ? `file://${image}` : image }} style={{width: 200, height: 200}}/> 
 </SafeAreaView>)
}

export default DemoRN_fetch_blob
const styles = StyleSheet.create({})