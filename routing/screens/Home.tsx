import { StatusBar } from "expo-status-bar";
import  {createStackNavigator}  from '@react-navigation/stack';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useNavigation, StackActions, useNavigationContainerRef } from "@react-navigation/native";

import Man from "./Man";
import Woman from './Woman'


export default function Home({navigation}: any) {

  const navigationRef = useNavigationContainerRef()
  
  const collections: { name: string; img: any; compo: any; key: number }[]= [
    {
      name: "man collection",
      img: require("../assets/manModel.jpeg"),
      compo: "Man",
      key: 1,
    }, 
    {
      name: "woman collection",
      img: require("../assets/womanModel.jpg"),
      compo: "Woman",
      key: 2,
    },
  ]

  const Stack = createNativeStackNavigator();
    // const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
       <FlatList
        numColumns={2}
        data={collections}
        renderItem={({ item }) => (
          <>
             <TouchableOpacity
              onPress={() => {
                navigation.navigate('Man');
                

              }}
            >
              <Image style={styles.image} source={item.img} />
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
          </>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 170,
    height: 180,
    margin: 15,
  },
  title: {
    position: "absolute",
    left: "15%",
    right: "15%",
    width: "70%",
    top: 90,
    fontSize: 17,
    color: "white",
    backgroundColor: "purple",
    fontWeight: "bold",
    textAlign: "center",
  },
});
