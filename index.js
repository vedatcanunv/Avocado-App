/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Rooter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
