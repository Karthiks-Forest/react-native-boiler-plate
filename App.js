import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <Text>App</Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
