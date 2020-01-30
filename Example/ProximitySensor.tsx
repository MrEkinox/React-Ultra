import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProximitySensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  supported: boolean;
  data: {
    isNear: boolean;
    distance: number;
    minDistance: number;
    maxDistance: number;
  };
}

export default class Proximity extends React.PureComponent<{}, State> {
  state: State = {
    recording: true,
    supported: false,
    data: {
      isNear: false,
      distance: 0,
      maxDistance: 0,
      minDistance: 0,
    },
  };

  componentDidMount() {
    ProximitySensor.isSupported().then(supported => this.setState({supported}));
    this.startListener();
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = data => {
    this.setState({data, recording: true});
  };

  startListener() {
    this.setState({recording: true});
    ProximitySensor.addListener(this.onDataChange);
  }

  stopListener() {
    ProximitySensor.removeListener(this.onDataChange);
    this.setState({recording: false});
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.state.recording ? this.stopListener() : this.startListener()
        }
        style={styles.card}>
        <Text style={styles.title}>Battery</Text>
        <Text>Recording : {this.state.recording ? 'YES' : 'NO'}</Text>
        <Text>isNear : {this.state.data.isNear}</Text>
        <Text>Distance : {this.state.data.distance}</Text>
        <Text>MinDistance : {this.state.data.minDistance}</Text>
        <Text>MaxDistance : {this.state.data.maxDistance}</Text>
        <Text>Supported : {this.state.supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
