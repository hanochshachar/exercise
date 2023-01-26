import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [toDo, setToDo] = useState<any>([
    { name: "by a milk", key: 1 },
    { name: "eat breakfast", key: 2 },
  ]);
  function handleDelete() {}
  return (
    <View style={styles.container}>
      <FlatList
        data={toDo}
        renderItem={({ item }) => 
        <TouchableOpacity>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity> }
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
  item: {
   marginTop: ,
    
    
  }
});
