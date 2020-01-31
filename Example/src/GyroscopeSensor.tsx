import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {GyroscopeSensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  isSupported: boolean;
  data: {
    x: number;
    y: number;
    z: number;
  };
}

export default class Gyroscope extends React.PureComponent<{}, State> {
  state: State = {
    recording: false,
    isSupported: false,
    data: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  componentDidMount() {
    GyroscopeSensor.isSupported().then(isSupported =>
      this.setState({isSupported}),
    );
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = data => {
    this.setState({data, recording: true});
  };

  startListener() {
    GyroscopeSensor.addListener(this.onDataChange);
  }

  stopListener() {
    GyroscopeSensor.removeListener(this.onDataChange);
    this.setState({recording: false});
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.state.recording ? this.stopListener() : this.startListener()
        }
        style={styles.card}>
        <Text style={styles.title}>Gyroscope</Text>
        <Text>Recording : {this.state.recording ? 'YES' : 'NO'}</Text>
        <Text>X : {this.state.data.x}</Text>
        <Text>Y : {this.state.data.y}</Text>
        <Text>Z : {this.state.data.z}</Text>
        <Text>Supported : {this.state.isSupported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
