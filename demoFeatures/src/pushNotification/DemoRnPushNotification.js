import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import PushNotification from "react-native-push-notification";

export default  DemoPushNotification =() => {

  const handleNotification = (item, index) => {

    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
        channelId: "test-channel",
        title: "You clicked on " ,
        message: "Xin chao",
        bigText: " is one of the largest and most beatiful cities in " ,
        color: "red",
        id: index
    });

    PushNotification.localNotificationSchedule({
        channelId: "test-channel",
        title: "Alarm",
        message: "You clicked on "  + " 20 seconds ago",
        date: new Date(Date.now() + 20 * 1000),
        allowWhileIdle: true,
    });
}
  return (
    <View style={styles.body}>
        <Text style={[
           
            styles.text
        ]}>
            Welcome {name} !
        </Text>
       
                <TouchableOpacity
                    onPress={() => { handleNotification("Xin chao ", 45) }}
                >
                  <Text> Bam de hien thong bao</Text>
                </TouchableOpacity>
        
    </View>
)
}

const styles = StyleSheet.create({
body: {
    flex: 1,
    alignItems: 'center',
},
text: {
    fontSize: 40,
    margin: 10,
},
input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
},
item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize: 30,
    margin: 10,
},
subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
}
  })


