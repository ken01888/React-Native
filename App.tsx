import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface IApp { }
export default function App<IApp>(props: IApp) {
  return (
    <View style={styles.main}>
      <View style={styles.wrap}>
      <View style={styles.container}>
        <Text style={styles.text}>#crushit</Text>
        <StatusBar style="auto" />
      </View>
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 50
  },
  main:{
    flex:1,
    backgroundColor:'red',
    padding:20,
    marginTop:50
  },
  wrap:{
    flex:1,
    backgroundColor:'black',
    padding:10
  }
});


