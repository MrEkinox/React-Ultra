import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PedometerSensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  supported: boolean;
  stepsCount: number;
}

export default class Pedometer extends React.PureComponent<{}, State> {
  state: State = {
    recording: true,
    supported: false,
    stepsCount: 0,
  };

  componentDidMount() {
    PedometerSensor.isSupported().then(supported => this.setState({supported}));
    this.startListener();
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = stepsCount => {
    this.setState({stepsCount, recording: true});
  };

  startListener() {
    this.setState({recording: true});
    PedometerSensor.addListener(this.onDataChange);
  }

  stopListener() {
    PedometerSensor.removeListener(this.onDataChange);
    this.setState({recording: false});
  }

  render() {
    const {recording, supported, stepsCount} = this.state;
    return (
      <TouchableOpacity
        onPress={() => (recording ? this.stopListener() : this.startListener())}
        style={styles.card}>
        <Text style={styles.title}>Pedometer</Text>
        <Text>Recording : {recording ? 'YES' : 'NO'}</Text>
        <Text>Steps : {stepsCount}</Text>
        <Text>Supported : {supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
