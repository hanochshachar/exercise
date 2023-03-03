import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";

export default function Chat() {
  const [message, setMessage] = useState<any>([]);
  const navigation = useNavigation();
  const onSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <AntDesign
            name="logout"
            size={24}
            color={colors.gray}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>;
      },
    });
  }, [navigation]);
  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe: any = onSnapshot(q, (snapshot) => {
      setMessage(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
      return unsubscribe;
    });
  });

  const onSend = useCallback((message: IMessage[] = []) => {
    setMessage((previousMessage: IMessage[]) =>
      GiftedChat.append(previousMessage, message)
    );
    const { _id, createdAt, text, user } = message[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={message}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(message) => onSend(message)}
      messagesContainerStyle={{backgroundColor: '#fff'}}
      user={{
        _id: auth?.currentUser?.email || 'default'
      }}
    />
  );
}
