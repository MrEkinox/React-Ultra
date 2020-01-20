import {Text} from 'react-native';
import React, {Fragment} from 'react';
import {BatterySensor} from 'react-ultra';

interface State {
  level: number;
  charging: boolean;
  supported: boolean;
}

export default class Battery extends React.PureComponent<{}, State> {
  state: State = {
    level: -1,
    charging: false,
    supported: false,
  };

  componentDidMount() {
    const test = new BatterySensor();
    test.getLevel().then(level => {
      this.setState({level});
    });
    test.isCharging().then(charging => this.setState({charging}));
    test.isSupported().then(supported => this.setState({supported}));
  }

  render() {
    return (
      <Fragment>
        <Text>Level : {this.state.level}</Text>
        <Text>Charging : {this.state.charging ? 'YES' : 'NO'}</Text>
        <Text>Supported : {this.state.supported ? 'YES' : 'NO'}</Text>
      </Fragment>
    );
  }
}
