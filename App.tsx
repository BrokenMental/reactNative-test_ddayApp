import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dday, setDday] = useState('');

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    // D-Day 계산
    const today = new Date();
    const diffTime = currentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDday(`D-${diffDays >= 0 ? diffDays : 'Day Passed'}`);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>D-Day 계산기</Text>
      <Text style={styles.dateText}>{`선택된 날짜: ${date.toLocaleDateString()}`}</Text>
      <Button onPress={showDatepicker} title="날짜 선택" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.ddayText}>{dday}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 20,
  },
  ddayText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default App;
