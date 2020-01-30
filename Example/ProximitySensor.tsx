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
    recording: false,
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
    const {recording, supported, data} = this.state;
    const {isNear, distance, minDistance, maxDistance} = data;
    return (
      <TouchableOpacity
        onPress={() => (recording ? this.stopListener() : this.startListener())}
        style={styles.card}>
        <Text style={styles.title}>Proximity</Text>
        <Text>Recording : {recording ? 'YES' : 'NO'}</Text>
        <Text>Detect : {isNear ? 'YES' : 'NO'}</Text>
        <Text>Distance : {distance ? distance : 'NOT SUPPORTED'}</Text>
        <Text>MinDistance : {minDistance ? minDistance : 'NOT SUPPORTED'}</Text>
        <Text>MaxDistance : {maxDistance ? maxDistance : 'NOT SUPPORTED'}</Text>
        <Text>Supported : {supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
