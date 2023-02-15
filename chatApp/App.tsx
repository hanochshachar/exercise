import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "./config/firebase";

export type RootStackParamList = {
  Chat: undefined;
  Home: undefined;
};

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import { createContext, useContext, useEffect, useState } from "react";
const stack = createStackNavigator();
const authenticatedUserContext = createContext<any>({});

const AuthenticatedUserProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  return (
    <authenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </authenticatedUserContext.Provider>
  );
};

const ChatStack = () => {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={Home as any} />
      <stack.Screen name="Chat" component={Chat as any} />
    </stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <stack.Screen name="Login" component={Login as any} />
      <stack.Screen name="Signup" component={SignUp as any} />
    </stack.Navigator>
  );
};

const RootNavigator = () => {
  const { user, setUser } = useContext(authenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
