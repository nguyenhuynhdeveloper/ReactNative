import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import HomeScreen from './HomeScreen'
import Settings from './Settings'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const DemoTopTabsNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Tab.Navigator
                    //id
                    initialRouteName='Home'
                    //   tabBarPosition={"bottom"}   // Vị trí của  tabs

                    screenOptions={{    // Cái này dành cho Navigator
                        tabBarLabelStyle: { fontSize: 18 },
                        tabBarItemStyle: { width: 200 },
                        tabBarStyle: { backgroundColor: 'powderblue' },
                    }}
                    

                // backBehavior=''
                // keyboardDismissMode=''   // Liệu bàn phím có được loại bỏ khi có cử chỉ kéo : default auto
                // initialLayout= {}
                // sceneContainerStyle=    // style áp dụng cho view bọc mỗi màn hình 
                // style = {{}}  // style áp dụng tới tab view container 
                // tabBar = { () => { }}   // Hàm trả về 1 component để hiển thị như 1 tabbar

                >
                    <Tab.Screen 
                    name="Home"
                     component={HomeScreen}
                     options ={{     // Cái này dành cho Screen Đuọc nấo cấp từ 6.0 thay thế cho tabBarOptions ở trên Navigator bản 5.0
                        title :"xin chào ",
                        tabBarShowLabel: false,
                        // tabBarAccessibilityLabel,
                        // tabBarAllowFontScaling,
                        // tabBarIcon: ({ focused }) => (
                        //     <FastImage
                        //         source={IC_CLOUD_NORMAL}
                        //         tintColor={focused ? theme.mainColor : Colors.grey20}
                        //         style={focused ? styles.iconSelect : styles.iconUnSelect} />
                        // ),
                        // tabBarShowIcon,
                        // tabBarBadge,tabBarIndicator , 
                        // tabBarIndicatorStyle , 
                        // tabBarIndicatorContainerStyle , 
                        // tabBarTestID ,
                        //  tabBarActiveTintColor , 
                        //  tabBarInactiveTintColor,
                        // tabBarPressColor ,  
                        //  tabBarPressOpacity ,
                        //   tabBarBounces  ,
                        //   tabBarScrollEnabled , 
                        //   tabBarIconStyle , 
                        //   tabBarLabelStyle , 
                        //   tabBarItemStyle ,
                        //    tabBarContentContainerStyle ,
                        //      tabBarStyle,
                        // swipeEnabled ,
                        //  lazy , 
                        //  lazyPreloadDistance , 
                        //  lazyPlaceholder

                  

              
                     }}
                     />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>

            </SafeAreaView>
        </NavigationContainer>
    );
}
export default DemoTopTabsNavigator

const styles = StyleSheet.create({})