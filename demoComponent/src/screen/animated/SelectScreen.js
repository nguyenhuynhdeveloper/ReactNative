import { Text, StyleSheet, View, Button, Dimensions, Animated, TouchableOpacity ,SafeAreaView} from 'react-native'
import React, { Component, useRef, useState , useEffect} from 'react'
import ViewPropTypes from 'deprecated-react-native-prop-types'
// import { SafeAreaView } from 'react-native-safe-area-context'

const SelectScreen = () => {
    const { width } = Dimensions.get('screen')
    const refAnimation = useRef(new Animated.Value(0)).current
    const [isShowMap, setIsShowMap] = useState()
    const openMapAnim = Animated.timing(refAnimation, {
        duration: 300,
        useNativeDriver: true,
        toValue: 1
    })

    const closeMapAnim = Animated.timing(refAnimation, {
        duration: 300,
        useNativeDriver: true,
        toValue: 0
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
            {/* <Button onPress={() => { setIsShowMap(!isShowMap) }} title ={'bấm vào để đổi'}>
                <Text> Bấm vào để sang phần khác</Text>
            </Button> */}

            <TouchableOpacity  onPress={() => { setIsShowMap(!isShowMap) }} >
                <Text> CHANGE</Text>
            </TouchableOpacity>

            <Animated.View style={{
                width: 2 * width,
                height: '100%',
                flexDirection: "row",
                transform: [{
                    translateX: refAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -width]
                    })
                }]
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Text> màn 1</Text>
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <Text> màn 2</Text>
                </View>

            </Animated.View>
        </SafeAreaView>
    )
}
export default SelectScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})