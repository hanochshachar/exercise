import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './screens/Chat';
const stack = createStackNavigator()

const ChatStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name='chat' component={Chat}/>
    </stack.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator/>
}


