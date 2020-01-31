import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PedometerSensor} from 'react-ultra';
import styles from './styles';

interface State {
  recording: boolean;
  supported: boolean;
  data: {
    numberOfSteps?: number | null;
    distance?: number | null;
    averageActivePace?: number | null;
    currentPace?: number | null;
    floorsAscended?: number | null;
    floorsDescended?: number | null;
  };
}

export default class Pedometer extends React.PureComponent<{}, State> {
  state: State = {
    recording: false,
    supported: false,
    data: {
      numberOfSteps: 0,
      distance: 0,
      averageActivePace: 0,
      currentPace: 0,
      floorsAscended: 0,
      floorsDescended: 0,
    },
  };

  componentDidMount() {
    PedometerSensor.isSupported().then(supported => this.setState({supported}));
  }

  componentWillUnmount() {
    this.stopListener();
  }

  onDataChange = data => {
    this.setState({data, recording: true});
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
    const {recording, supported, data} = this.state;
    const {
      averageActivePace,
      currentPace,
      distance,
      floorsAscended,
      floorsDescended,
      numberOfSteps,
    } = data;
    return (
      <TouchableOpacity
        onPress={() => (recording ? this.stopListener() : this.startListener())}
        style={styles.card}>
        <Text style={styles.title}>Pedometer</Text>
        <Text>Recording : {recording ? 'YES' : 'NO'}</Text>
        <Text>numberOfSteps : {numberOfSteps}</Text>
        <Text>averageActivePace : {averageActivePace}</Text>
        <Text>currentPace : {currentPace}</Text>
        <Text>distance : {distance}</Text>
        <Text>floorsAscended : {floorsAscended}</Text>
        <Text>floorsDescended : {floorsDescended}</Text>
        <Text>Supported : {supported ? 'YES' : 'NO'}</Text>
      </TouchableOpacity>
    );
  }
}
