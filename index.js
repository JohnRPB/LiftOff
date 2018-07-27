import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'

// Make deprecation warnings go away

console.tron.log("SCREAMING CONSOLE TRON");
console.tron.log("------------------- START AppRegistry -------------------");
console.tron.log(JSON.stringify(AppRegistry, null, 2));
console.tron.log("-------------------- END AppRegistry --------------------");


import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
]);

AppRegistry.registerComponent('LiftOff', () => App)
