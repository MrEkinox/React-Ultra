import {Text} from 'react-native';
import React, {Fragment} from 'react';
import {BatterySensor} from 'react-ultra';

interface State {
  level: number;
  charging: boolean;
}

export default class Test extends React.PureComponent<{}, State> {
  state: State = {
    level: -1,
    charging: false,
  };

  async componentDidMount() {
    const level = await BatterySensor.getLevel();
    const charging = await BatterySensor.isCharging();
    this.setState({level, charging});
  }

  render() {
    return (
      <Fragment>
        <Text>Level : {this.state.level}</Text>
        <Text>Charging : {this.state.charging ? 'YES' : 'NO'}</Text>
      </Fragment>
    );
  }
}
