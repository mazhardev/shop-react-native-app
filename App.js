import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [total, setTotal] = useState(0);
  const handleIncrementCounter = () => {
    let result = total + 1
    setTotal(result);
  }
  const handleDicrementCounter = () => {
    let result = total - 1
    setTotal(result);
  }
  return (
    <View style={styles.container}>
      <Button title="Increment!" onPress={() => handleIncrementCounter()} />
      <Text>{total}</Text>
      <Button title="Decrement!" onPress={() => handleDicrementCounter()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
