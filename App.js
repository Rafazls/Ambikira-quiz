import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Introduction from "./screens/Introduction";
import Home from "./screens/Home";
import QuestionPage from "./screens/Question";
import Finish from "./screens/Finish";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introduction"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Introduction} name="Introduction" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={QuestionPage} name="Questions" />
        <Stack.Screen component={Finish} name="Finish" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
