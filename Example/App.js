/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import BatterySensor from './src/BatterySensor';
import AccelerometerSensor from './src/AccelerometerSensor';
import GyroscopeSensor from './src/GyroscopeSensor';
import MagnetometerSensor from './src/MagnetometerSensor';
import ProximitySensor from './src/ProximitySensor';
import PedometerSensor from './src/PedometerSensor';
import Haptic from './src/Haptic';

const App = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="always" style={styles.scrollView}>
      <Haptic></Haptic>
      <BatterySensor></BatterySensor>
      <AccelerometerSensor></AccelerometerSensor>
      <GyroscopeSensor></GyroscopeSensor>
      <MagnetometerSensor></MagnetometerSensor>
      <ProximitySensor></ProximitySensor>
      <PedometerSensor></PedometerSensor>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
});

export default App;
