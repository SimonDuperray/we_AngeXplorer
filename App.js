import React from 'react';
import Svg from 'react-native-svg';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/logoreduitnoir.svg';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'white'}}>Open up App.js to start working on your app !</Text> */}
      <Image source={logo} style={{width: 200, height: 300, aspectRatio: 2/3}} />
      {/* <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <Image source={logo} style={{height: undefined, width: '100%', aspectRatio: 1}} />
      </Svg> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDB934',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
