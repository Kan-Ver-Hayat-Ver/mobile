import React from 'react';
import {saveUser, getUser, removeUser, enbableOnboarding} from './storage';
// import NetInfo from '@react-native-community/netinfo';

const KVContext = React.createContext();

export class KVProvider extends React.Component {
  state = {
    user: null,
    isLoggedIn: false,
  };

  setUser = (user) => {
    this.setState({user});
  };

  login = (user) => {
    this.setState({
      isLoggedIn: true,
      user,
    });
    saveUser(user);
  };

  handleLogout = () => {
    enbableOnboarding();
    removeUser();
    this.setState({user: null, isLoggedIn: false});
  };

  checkUser = async () => {
    const user = await getUser();
    if (user.user) {
      this.setState({user, isLoggedIn: true});
    }
  };

  handleLogout = () => {
    enbableOnboarding();
    removeUser();
    this.setState({user: null, isLoggedIn: false});
  };

  //   checkConnection = async () => {
  //     return await NetInfo.fetch();
  //   };

  componentDidMount() {
    this.checkUser();
  }

  render() {
    const {children} = this.props;
    return (
      <KVContext.Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.handleLogout,
        }}>
        {children}
      </KVContext.Provider>
    );
  }
}

export const KVConsumer = KVContext.Consumer;

export default KVContext;
