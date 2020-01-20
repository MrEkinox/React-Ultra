/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import BatterySensor from './BatterySensor';
import AccelerometerSensor from './AccelerometerSensor';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <BatterySensor></BatterySensor>
        <AccelerometerSensor></AccelerometerSensor>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: "100%"
  },
});

export default App;
