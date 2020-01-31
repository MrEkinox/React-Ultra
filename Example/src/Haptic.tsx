import {Text, View, Button, TouchableOpacity, Platform} from 'react-native';
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

  renderButton(triggerType) {
    return (
      <TouchableOpacity
        style={{
          borderTopWidth: 1,
          paddingVertical: 5,
          borderColor: 'lightgrey',
          paddingTop: 5,
          marginTop: 5,
        }}
        onPress={() => Haptic.trigger(triggerType)}>
        <Text>{triggerType}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {supported} = this.state;
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Haptic</Text>
        <Text>Supported : {supported ? 'YES' : 'NO'}</Text>
        {this.renderButton('selection')}
        {this.renderButton('impactLight')}
        {this.renderButton('impactMedium')}
        {this.renderButton('impactHeavy')}
        {this.renderButton('notificationSuccess')}
        {this.renderButton('notificationWarning')}
        {this.renderButton('notificationError')}
        {Platform.OS === 'android' && this.renderButton('clockTick')}
        {Platform.OS === 'android' && this.renderButton('contextClick')}
        {Platform.OS === 'android' && this.renderButton('keyboardPress')}
        {Platform.OS === 'android' && this.renderButton('keyboardRelease')}
        {Platform.OS === 'android' && this.renderButton('keyboardTap')}
        {Platform.OS === 'android' && this.renderButton('longPress')}
        {Platform.OS === 'android' && this.renderButton('textHandleMove')}
        {Platform.OS === 'android' && this.renderButton('virtualKey')}
        {Platform.OS === 'android' && this.renderButton('virtualKeyRelease')}
      </View>
    );
  }
}
