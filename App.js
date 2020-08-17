/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

// Screens
import HomeScreen from './src/screens/Home/index';
import ProfileScreen from './src/screens/Profile/index';
import TopScreen from './src/screens/toplist/index';
import OnboardScreen from './src/screens/Onboard/index';
import ControllerScreen from './src/screens/ControllerScreen/index';
import AddDonationScreen from './src/screens/AddDonation/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Context
import {KVProvider} from './src/core/context';

const AppContext = createContext();

function LogoTitle() {
  return (
    <Image
      style={{width: 200, height: 50, resizeMode: 'center'}}
      source={require('./src/assets/img/logo.png')}
    />
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#FF2744',
          },
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddDonationScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#FF2744',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#FF2744',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const TopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopList"
        component={TopScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#FF2744',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const LoggedInStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-box' : 'account-box';
          } else if (route.name === 'Top List') {
            iconName = focused ? 'star' : 'star';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF2744',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Top List" component={TopStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const LoggedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboard"
        component={OnboardScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Controller" component={ControllerScreen} />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoggedOut"
          component={LoggedOutStack}
        />

        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#FF2744',
            },
          }}
          name="LoggedIn"
          component={LoggedInStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <KVProvider>{AppStack()}</KVProvider>
    </>
  );
};

export default App;
