import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddToDo({handleSubmit}: {handleSubmit: Function}) {
    const [text, setText] = useState('')
    function handleChange(ev: any) {
        setText(ev)
    }
    function handlePress(){
        handleSubmit(text)
        setText('')
    }
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='add todo'
      onChangeText={handleChange}/>
      <Button title='add todo' onPress={handlePress}/>
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
    marginBottom: 0
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    marginBottom: 15,
    width: 180,
    textAlign: 'center'
  }
});
