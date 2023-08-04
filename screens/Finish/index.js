import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Finish({ navigation, route }) {
  return (
    <View style={styles.teste}>
      <Text>
        Tela de finalização. Aqui a pontuação será salva no banco de dados e vai
        ter um botão para voltar para a tela "introducao"
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Introduction");
        }}
      >
        <Text>Retornar</Text>
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
