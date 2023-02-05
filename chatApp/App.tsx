import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList ={
  Chat: undefined;
}

import Chat from './screens/Chat';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Home from './screens/Home'
const stack = createStackNavigator<RootStackParamList>()

const ChatStack = () => {
  return (
     <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name='Home' component={Home as any}/>
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


