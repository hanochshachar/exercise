import { StatusBar } from "expo-status-bar";
import {  FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';



import manModel from "../assets/manModel.jpeg";
import woman from "../assets/womanModel.jpg";
import winter from "../assets/winter.jpg";
import summer from "../assets/summer.jpg";
import underwire from "../assets/underware.jpg";
import shoes from "../assets/shoes.jpg";
import Man from "./innerScreens/Man";
import Woman from "./innerScreens/Woman";
import Winter from "./innerScreens/Winter";
import Summer from "./innerScreens/Summer";
import Underwire from "./innerScreens/Underwire";
import Shoes from "./innerScreens/Shoes";

export default function Home() {
  const collections: any =  ([
    { name: "man collection", img: require("../assets/manModel.jpeg"), compo: Man, key: 1 },
    {
      name: "woman collection",
      img: require("../assets/womanModel.jpg"), compo: Woman,
      key: 2,
    },
    { name: "winter collection", img: require("../assets/winter.jpg"), compo: Winter, key: 3 },
    { name: "summer collection", img: require("../assets/summer.jpg"), compo: Summer, key: 4 },
    {
      name: "underwire collection",
      img: require("../assets/underware.jpg"), compo: Underwire,
      key: 5,
    },
    { name: "shoes collection", img: require("../assets/shoes.jpg"), compo: Shoes, key: 6 },
  ]);

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
        <FlatList
          numColumns={2}
          data={collections}
          renderItem={({ item }) => (
            <>
              
              <TouchableOpacity onPress={() => {
                navigation.navigate(item.compo)
              }}>
              <Image style={styles.image } source={item.img} />
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
