import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {
  Splash,
  Home,
  SignUpLogin,
  Email,
  Verification,
  SetPassword,
} from '../screens';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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

      <AppStack.Screen
        options={{headerShown: false}}
        name="SetPassword"
        component={SetPassword}
      />
    </AuthStack.Navigator>
  );
};
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}>
      <Drawer.Screen options={{headerShown: false}} name="HomeStack">
        {props => <HomeStack {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
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
        name="MyDrawer"
        component={MyDrawer}
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
