import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddToDo from "./components/AddToDo";


export default function App() {
  const [toDo, setToDo] = useState<any>([
    { name: "by a milk", key: 1 },
    { name: "eat breakfast", key: 2 },
  ]);
  function handleDelete(key: number) {
    setToDo((pre: any) => {
      return pre.filter((todo: any) => todo.key != key) 
          })
         
  }
  console.log(toDo)
  function handleSubmit(text: string) {
    const lastObj = toDo[toDo.length - 1] 
    console.log(lastObj);
    if(toDo !== undefined){

      setToDo((pre: any) => {
        return[ ...pre, {name: text, key: lastObj.key + 1 }]
      })
    } else{
      setToDo((pre: any) => {
        return[ {name: text, key: 1 }, ...pre]
      })
    }
  }
  return (
    <>
      

      <AddToDo handleSubmit={handleSubmit}/>

      <View style={styles.allItems}>

      <FlatList
        
        data={toDo}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity> }
      />
      </View>
      

     
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    // flex: 1,
   marginTop: 16,
   
   padding: 20,
   width: 300,
   height: 70,
   backgroundColor: 'pink', 
   textAlign: 'center',
   borderColor: 'purple',
   borderWidth: 1,
   borderRadius: 10,
    
  }, 
  allItems: {
    top: -160,
    flex: 1,
    alignItems: 'center'
    // marginBottom: 30,
    // paddingBottom: 30
  }
});
