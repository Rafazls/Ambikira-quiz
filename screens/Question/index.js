import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function QuestionPage({ navigation, route }) {
  return (
    <View style={styles.teste}>
      <Text>Pagina onde ficará as questões. Terá o cronometro e tudo mais</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Finish");
        }}
      >
        <Text>Finalizar questionario</Text>
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
