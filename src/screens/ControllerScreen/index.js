const React = require('react');
const {View, StyleSheet, Text} = require('react-native');
import {login} from '../../core/api';
import KVContext from '../../core/constants';
import DeviceInfo from 'react-native-device-info';

export default class ControllerScreen extends React.Component {
  static contextType = KVContext;

  tryLogin = () => {
    const context = this.context;

    login(DeviceInfo.getUniqueId()).then((data) => {
      console.log(data);
    });
  };

  //
  componentDidMount() {
    console.log(DeviceInfo.getUniqueId());
    console.log(this.context); //{}
    if (true) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'LoggedIn'}],
      });
    } else {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'LoggedOut'}],
      });
    }
  }
  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
