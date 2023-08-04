import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Home({ navigation, route }) {
  return (
    <View style={styles.teste}>
      <Text>Pagina inicial (colocar dados para iniciar o game)</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Questions");
        }}
      >
        <Text>COMEÇAR O JOGO</Text>
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
