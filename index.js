/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
