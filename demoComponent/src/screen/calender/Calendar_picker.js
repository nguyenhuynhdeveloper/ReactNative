import { months } from 'moment';
import React, { Component , useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default Calendar_picker =() =>  {
 
   const [selectedStartDate , setSelectedStartDate] = useState("") 

 const onDateChange = (date) =>  {
    setSelectedStartDate(date) 
    console.warn(date)    // Chỉ có console.warn là nó hiện ra thông báo trên màn hình điện thoại 
 } 

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
        //   onDateChange={ onDateChange}
        onDateChange={(dateSelected) => onDateChange(dateSelected) }
        onMonthChange = {(month) => console.log(month._i.month)}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});