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
import GyroscopeSensor from './GyroscopeSensor';
import MagnetometerSensor from './MagnetometerSensor';
import ProximitySensor from './ProximitySensor';
import PedometerSensor from './PedometerSensor';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <BatterySensor></BatterySensor>
        <AccelerometerSensor></AccelerometerSensor>
        <AccelerometerSensor></AccelerometerSensor>
        <GyroscopeSensor></GyroscopeSensor>
        <MagnetometerSensor></MagnetometerSensor>
        <ProximitySensor></ProximitySensor>
        <PedometerSensor></PedometerSensor>
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
