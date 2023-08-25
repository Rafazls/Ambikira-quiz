import { StatusBar } from "expo-status-bar";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Introduction from "./screens/Introduction";
import Home from "./screens/Home";
import QuestionPage from "./screens/Question";
import Finish from "./screens/Finish";
import Developers from './screens/Developers'
import { useEffect } from "react";
import Rules from "./screens/Rules";
import Terms from './screens/Terms_and_conditions';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Developers"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Introduction} name="Introduction" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={QuestionPage} name="Questions" />
        <Stack.Screen component={Finish} name="Finish" initialParams={{points: 0}}/>
        <Stack.Screen component={Developers} name="Developers" />
        <Stack.Screen component={Rules} name="Rules" />
        <Stack.Group screenOptions={{ presentation: 'fullScreenModal', animation: 'fade_from_bottom'}}>
          <Stack.Screen component={Terms} name="TermsAndConditions" />
        </Stack.Group>
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
