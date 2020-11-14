import { StatusBar } from 'expo-status-bar';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyleSheet, Text, View } from 'react-native';

const white = '#fff';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
