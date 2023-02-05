import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

export default function Chat() {
  return <GiftedChat/>
   
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})