import * as React from 'react';
import {View, StyleSheet, TextInput,Text, Button} from 'react-native';

export default function LoginPage(){
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
    
      <Text style={styles.text} >Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize:50,
  },
  input: {
    height: 40,
    width:80,
    margin:5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "red",
  },
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'yellow',
  },
});

