import { Text, StyleSheet, View, Button, Dimensions, Animated, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component, useRef, useState, useEffect } from 'react'
import ViewPropTypes from 'deprecated-react-native-prop-types'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import {ViewPropTypes} from 'deprecated-react-native-prop-types'

const Transform = () => {
    const { width } = Dimensions.get('screen')
    const refAnimation = useRef(new Animated.Value(0)).current
    const [isShowMap, setIsShowMap] = useState()
    const openMapAnim = Animated.timing(refAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
    })

    const closeMapAnim = Animated.timing(refAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    })
    useEffect(() => {
        if (isShowMap) {
            closeMapAnim.stop()
            openMapAnim.start()
        } else {
            openMapAnim.stop()
            closeMapAnim.start()
        }
    }, [isShowMap])

    return (



        <SafeAreaView style={styles.container}>


            <TouchableOpacity onPress={() => { setIsShowMap(!isShowMap) }} >
                <Text> CHANGE</Text>
            </TouchableOpacity>

            <Animated.View style={{
                width: width,
                // height: '100%',
                flexDirection: "row",
                transform: [{
                    translateX: refAnimation.interpolate({      // Tương tự translateY  translate :Không được hỗ trợ
                        inputRange: [0, 1],
                        outputRange: [ 0, 100]
                    })
                }]
            }}>

                <Text>translateX</Text>
            </Animated.View>

            <Animated.View style={{
                width: width,
                // height: '100%',
                flexDirection: "row",
                transform: [{
                    rotate: refAnimation.interpolate({      // Tương tự translateY
                        inputRange: [0, 1],
                        outputRange: ["0 deg", "-30 deg"]
                    })
                }]
            }}>

                <Text>rotate</Text>
            </Animated.View>

            <Animated.View style={{
                width: width,
                // height: '100%',
                flexDirection: "row",
                transform: [{
                    rotateX: refAnimation.interpolate({      // Tương tự rotateY
                        inputRange: [0, 1],
                        outputRange: ["0 deg", "30 deg"]
                    })
                }]
            }}>
                <Text>rotateX</Text>
            </Animated.View>

            {/* <Animated.View style={{
                width: width ,
                // height: '100%',
                flexDirection: "row",
                transform: [{
                    skewY: refAnimation.interpolate({      // Không hỗ trợ skew , skewX, skewY
                        inputRange: [0, 1],
                        outputRange: ["0 deg", "30 deg"] 
                    })
                }]
            }}>
                    <Text>rotateX</Text>
            </Animated.View> */}

            <Animated.View style={{
                width: width,
                // height: '100%',
                justifyContent: 'center',
                alignItems:"center",
                flexDirection: "row",
                transform: [{
                    scale: refAnimation.interpolate({      // Tương tự rotateY
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }]
            }}>
                <Text>scale</Text>
            </Animated.View>

            {/* <Animated.View style={{
                width: width,
                // height: '100%',
                justifyContent: 'center',
                alignItems:"center",
                flexDirection: "row",
                transform: [{
                    matrix: refAnimation.interpolate({      // Không hỗ trợ matrix
                        inputRange: [0, 1],
                        outputRange: [(0.866,0.7,-0.8,0.866,0,0),(0.866,0.7,-0.8,0.866,0,0)]
                    })
                }]
            }}>
                <Text>scale</Text>
            </Animated.View> */}

        </SafeAreaView>
    )
}
export default Transform

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})