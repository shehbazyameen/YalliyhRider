import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Home, SignUpLogin, Email, Verification} from '../screens';
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const HomeStack = ({props}) => {
  return (
    <AppStack.Navigator initialRouteName={'Home'}>
      <AppStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </AppStack.Navigator>
  );
};

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator initialRouteName={Splash}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="SignUpLogin"
        component={SignUpLogin}
      />

      <AppStack.Screen
        options={{headerShown: false}}
        name="Email"
        component={Email}
      />

      <AppStack.Screen
        options={{headerShown: false}}
        name="Verification"
        component={Verification}
      />
    </AuthStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthenticationStack"
        component={AuthenticationStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="HomeStack"
        component={HomeStack}
      />
    </RootStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export {AppNavigator};
