import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import {signOut} from 'firebase/auth';
import {auth, database} from '../config/firebase';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import colors from "../colors";


export default function Chat() {
  const [message, setMessage] = useState([])
  const navigation = useNavigation()
  const onSignOut = () => {
    signOut(auth).catch(error => console.log(error))
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={onSignOut}
        >
          <AntDesign name='logout' size={24} color={colors.gray} style={{marginRight: 10}}/>
        </TouchableOpacity>
      }
    })
  }, [navigation])
  useLayoutEffect(() => {
    const collectionRef =  collection(database, 'chats')
    const q = query(collectionRef, orderBy('createdAt', "desc"))
    const unsubscribe = 
  })
  return <GiftedChat />;
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
