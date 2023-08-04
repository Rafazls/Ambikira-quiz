import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Introduction({ navigation, route }) {
  return (
    <View style={styles.teste}>
      <Text>Pagina de introducao</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>JOGAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
