/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TinderSwipe from './src/screens/TinderSwipe';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <TinderSwipe />
    </SafeAreaView>
  );
}

export default App;
