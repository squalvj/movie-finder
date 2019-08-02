/**
 * @format
 */

import {AppRegistry} from 'react-native';
import boot from './src/store';
import {name as appName} from './app.json';
const app = boot();

AppRegistry.registerComponent(appName, () => app);
