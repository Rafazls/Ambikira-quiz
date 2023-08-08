import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import circleBackground from "../../assets/circle-finish-page-1.png";
import circleBackground2 from "../../assets/circle-finish-page-2.png";
import logo from "../../assets/logoApp.png";
import React from "react";

export default function Finish({ navigation, route }) {
  return (
    <View style={styles.teste}>

      <Image
        source={logo}
        style={{
          position: "absolute",
          right: 270,
          bottom: 725,
          width: "30%",
          height: undefined,
          aspectRatio: 0.9999,
        }}
        resizeMode="contain"
      />

      <Image
        source={circleBackground}
        style={{
          position: "absolute",
          right: 290,
          bottom: 0,
          width: "35%",
          height: undefined,
          aspectRatio: 1.2222,
        }}
        resizeMode="contain"
      />

      <Image
        source={circleBackground2}
        style={{
          position: "absolute",
          right: 0,
          bottom: 700,
          width: "30%",
          height: undefined,
          aspectRatio: 0.6934,
        }}
        resizeMode="contain"
      />

      <View style={styles.quadrado}>
        <Text></Text>
        <Text style={styles.textoQuadrado}>Muito obrigado por ter jogado conosco!</Text>
        <Text></Text>
        <Text style={styles.textoQuadrado2}>Agradecemos por participar do nosso quiz sobre Educação no Brasil!
          Esperamos que você tenha desfrutado da experiência de testar seus conhecimentos e aprender mais sobre o assunto.
          Continue nos acompanhando para mais desafios e conteúdos educativos. Seu interesse em aprender é fundamental para
          um futuro mais brilhante.</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Introduction");
        }}
      >
        <Text style={styles.botaoInicio}>Início</Text>
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

  quadrado: {
    width: 350,
    height: 300,
    backgroundColor: "#FFEDC2",
    marginTop: 100,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 0,
  },

  textoQuadrado: {
    color: "#FF3131",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  textoQuadrado2: {
    paddingLeft: 30,
    paddingRight: 20,
    textAlign: "left",
  },

  botaoInicio: {
    height: 40,
    width: 200,
    color: "#fff",
    backgroundColor: "#F0B528",
    marginTop: 120,
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
