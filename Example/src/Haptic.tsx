import {Text, View, Button} from 'react-native';
import React from 'react';
import {Haptic} from 'react-ultra';
import styles from './styles';

interface State {
  supported: boolean;
}

export default class Pedometer extends React.PureComponent<{}, State> {
  state: State = {
    supported: false,
  };

  componentDidMount() {
    Haptic.isSupported().then(supported => this.setState({supported}));
  }

  componentWillUnmount() {}

  render() {
    const {supported} = this.state;
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Haptic</Text>
        <Text>Supported : {supported ? 'YES' : 'NO'}</Text>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('selection')}
          title="selection"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('impactLight')}
          title="impactLight"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('impactMedium')}
          title="impactMedium"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('impactHeavy')}
          title="impactHeavy"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('notificationSuccess')}
          title="notificationSuccess"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('notificationWarning')}
          title="notificationWarning"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('notificationError')}
          title="notificationError"></Button>
        <Text>Only for Android</Text>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('clockTick')}
          title="clockTick"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('contextClick')}
          title="contextClick"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('keyboardPress')}
          title="keyboardPress"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('keyboardRelease')}
          title="keyboardRelease"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('keyboardTap')}
          title="keyboardTap"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('longPress')}
          title="longPress"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('textHandleMove')}
          title="textHandleMove"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('virtualKey')}
          title="virtualKey"></Button>
        <Button
          color="darkgrey"
          onPress={() => Haptic.trigger('virtualKeyRelease')}
          title="virtualKeyRelease"></Button>
      </View>
    );
  }
}
