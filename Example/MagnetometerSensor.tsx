import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {MagnetometerSensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  supported: boolean;
  data: {
    x: number;
    y: number;
    z: number;
  };
}

export default class Magnetometer extends React.PureComponent<{}, State> {
  state: State = {
    recording: true,
    supported: false,
    data: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  componentDidMount() {
    MagnetometerSensor.isSupported().then(supported => this.setState({supported}));
    this.startListener();
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = (data) => {
    this.setState({data, recording: true});
  };

  startListener() {
    this.setState({recording: true});
    MagnetometerSensor.addListener(this.onDataChange);
  }

  stopListener() {
    MagnetometerSensor.removeListener(this.onDataChange);
    this.setState({recording: false});
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.state.recording ? this.stopListener() : this.startListener()
        }
        style={styles.card}>
        <Text style={styles.title}>Magnetometer</Text>
        <Text>Recording : {this.state.recording ? 'YES' : 'NO'}</Text>
        <Text>X : {this.state.data.x}</Text>
        <Text>Y : {this.state.data.y}</Text>
        <Text>Z : {this.state.data.z}</Text>
        <Text>Supported : {this.state.supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
