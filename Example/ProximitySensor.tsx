import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProximitySensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  level: number;
  charging: boolean;
  supported: boolean;
}

export default class Proximity extends React.PureComponent<{}, State> {
  state: State = {
    recording: true,
    level: -1,
    charging: false,
    supported: false,
  };

  componentDidMount() {
    ProximitySensor.isSupported().then(supported => this.setState({supported}));
    this.startListener();
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = ({level, charging}) => {
    this.setState({level, charging, recording: true});
  };

  startListener() {
    this.setState({recording: true});
    BatterySensor.addListener(this.onDataChange);
  }

  stopListener() {
    BatterySensor.removeListener(this.onDataChange);
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
        <Text>Level : {this.state.level}</Text>
        <Text>Charging : {this.state.charging ? 'YES' : 'NO'}</Text>
        <Text>Supported : {this.state.supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
