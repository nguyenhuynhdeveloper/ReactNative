
import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { VLCPlayer, VlCPlayerView} from 'react-native-vlc-media-player';
import Orientation from 'react-native-orientation';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons"
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


const Demo_Rn_vlc = () => {
    const [isPause, setIsPause] = useState(true)

    return (
        <SafeAreaView
            style={{ flex: 1 }}

        >
            <View
                style={{ flex: 1 }}

            >
                {/* <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    renderItem={({ item, index }) => <View style={{ height: 300, width: 300 }}>
                        <VLCPlayer
                            style={{ height: 300, width: 300 }}
                            videoAspectRatio="16:9"
                            source={{ uri: "https://cdn.intface.vn/live/191cdb690a0617a4f08b2e144a0010f7946.stream/playlist.m3u8" }}
                        />
                    </View>

                    }
                    keyExtractor={(index) => `${index}`}
                >
                </FlatList> */}

                <VLCPlayer
                    source={{ uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }}
                    style={{ height: 300, width: 300 }}
                    videoAspectRatio="16:9"
                    muted ={false}
                />
{/* 
                <VlCPlayerView
                    autoplay={false}
                    url="https://cdn.intface.vn/live/1917a2a4e3f5f184363a22dbccf50462b5c.stream/playlist.m3u8"
                    // url = "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
                    Orientation={Orientation}  //Để  xoay màn hình 
                //       ggUrl=""
                //       title="Big Buck Bunny"
                //     //   showGG={true}
                //     //   showTitle={true}
                //       showBack={true}
                //       onLeftPress={()=>{}}
                //     paused={isPause}
                //     playInBackground={true}
                //     resizeMode={"contain"}
                //     onPaused= {(e) => console.log("Video đã pause" , e) }
                //     onProgress= {(e) => console.log("Quá trình chạy video ", e)}
                // 
                /> */}


                <TouchableOpacity onPress={() => setIsPause(!isPause)}
                    style={{ backgroundColor: "red" }}
                >
                    <Text> tam dung</Text>
                </TouchableOpacity>




            </View>
        </SafeAreaView>
    )

}

export default Demo_Rn_vlc

// const styles =  StyleSheet.create



// or you can use

//     <VlCPlayerView
//           autoplay={false}
//           url="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"
//           Orientation={Orientation}
//           ggUrl=""
//           showGG={true}
//           showTitle={true}
//           title="Big Buck Bunny"
//           showBack={true}
//           onLeftPress={()=>{}}
//        />