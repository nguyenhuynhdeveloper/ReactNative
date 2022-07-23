import { Text, StyleSheet, View, Animated, SafeAreaView, Easing, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useRef, useState } from 'react'
import LottieView from 'lottie-react-native';

const lottieRn = () => {
    const progress = useRef(new Animated.Value(0)).current
    const refLottieView = useRef()
    const [isRender, setIsRender] = useState(false)

    useEffect(() => {   // Component did mount . khi tất cả component được render xong thì cho chạy hoạt ảnh 
        // Progress quy định tiến trình . thời gian chạy của hiệu ứng LottieViews
        Animated.sequence([
            Animated.timing(progress, {
                useNativeDriver: false,
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
            }),
            Animated.timing(progress, {
                useNativeDriver: false,
                toValue: 0,
                duration: 5000,
                easing: Easing.linear,
            })
        ]).start();

        console.log("refLottieView", refLottieView)
    })   // Không có arrayDependence thì là componentDidUpdation


    return (
        <SafeAreaView>
 

            <View style={{ width: 100, height: 100 }}>
                <LottieView
                    source={require('./download.json')}
                    style={{
                        marginBottom: (6),
                        color: "red",
                    }}
                autoPlay
                    loop
                    ref={refLottieView}

                />
            </View>
            <Text>DOWNLOAD</Text>

            <TouchableOpacity
                onPress={() => {
                    // refLottieView.current.play()
                    refLottieView.current.pause()
                    setIsRender(!isRender)
                }}
            >
                <Text> Toggle</Text>
            </TouchableOpacity>

            <Text>{JSON.stringify(isRender)}</Text>
        </SafeAreaView>
    )
}
export default lottieRn

const styles = StyleSheet.create({})

           {/* <Text>lottieRn</Text>


            <View style={{ width: 100, height: 100 }}>
                <LottieView
                    source={require('./play.json')}
                    style={{
                        marginBottom: (6),
                        color: "red",
                        // backgroundColor: "green"
                    }}
                    autoPlay  // true/ false Có tự động chạy hoạt ảnh khi được gắn hay không 
                    loop   //True/false cho biết hoạt ảnh có lặp lại hay không
                    progress={progress}   // Quy định thời gian chạy của LottieView , nó chỉ được chạy trong 5s vì đã được quy định ở trong useEffect
                />
            </View>
            <Text>PLAY MUSIC</Text>


            <View style={{ width: 100, height: 100 }}>
                <LottieView
                    source={require('./camera.json')}
                    style={{
                        marginBottom: (6),
                        color: "red",
                    }}
                    autoPlay
                    loop
                    colorFilters={[   // 1 mảng các đối tượng biểu thị các lớp và 1 giá trị bộ lọc màu mới 
                        {
                            keypath: 'button',
                            color: 'red',
                        },
                        {
                            keypath: 'Sending Loader',
                            color: '#F00000',
                        },
                    ]}
                />
            </View>
            <Text>CAMERA</Text> */}
