import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const icon = require("./assets/icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Image  source={{
        uri:'https://octodex.github.com/images/Professortocat_v2.png'
      }}      style={{
        width: 200,
        height: 200
      }} />
      <StatusBar style="light" />
      <Text style={{color: '#fff'}}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    backgroundColor: '#233124',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
