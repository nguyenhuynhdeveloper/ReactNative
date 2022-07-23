import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, Easing, FlatList, LayoutAnimation, Platform, UIManager, Alert, SafeAreaView } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const AnimatedIcon = Animated.createAnimatedComponent(View);

const FontAwesome5IconAnimated = () => {
    const [isShowLisCamera, setIsShowLisCamera] = useState(true)
    const animRotate = useRef(new Animated.Value(0)).current


    const animLoadRevest = Animated.timing(animRotate, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
    })

    const animLoad = Animated.timing(animRotate, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
    })

    const toggleShowListCamera = () => {
        if (isShowLisCamera) {
            closeListCamera()
        } else {
            openListCamera()
        }
    }

    const openListCamera = () => {
        setIsShowLisCamera(true)
        animLoadRevest.stop()
        animLoad.stop()
        animLoadRevest.start()
    }

    const closeListCamera = () => {
        setIsShowLisCamera(false)
        animLoadRevest.stop()
        animLoad.stop()
        animLoad.start()
    }

    return (

        <SafeAreaView style={styles.viewContainerRight}>
            <TouchableOpacity
                onPress={toggleShowListCamera}
            >
                <Text> Bấm để xoay </Text>
            </TouchableOpacity>

            {/* <AnimatedIcon
        name="caret-down"
        style={[
            styles.containerIcon,
            {
                transform: [
                    {
                        rotate: animRotate.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg']
                        })
                    }
                ],
                color: animRotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["green", "red"]
                })
            }
        ]}>
    </AnimatedIcon> */}

            <AnimatedIcon

                style={[
                    styles.containerIcon,
                    {
                        transform: [
                            {
                                rotate: animRotate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                            }
                        ],
                        color: animRotate.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["green", "red"]
                        })
                    }
                ]}>
                <View >
                    <Text> xin chào</Text>
                </View>
            </AnimatedIcon>

        </SafeAreaView>
    )

}

export default FontAwesome5IconAnimated

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f5f5f5',
        marginHorizontal: 10,
        marginBottom: 4,
        borderRadius: 3,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
})