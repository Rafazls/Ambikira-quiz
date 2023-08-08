import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackground2 from "../../assets/circles-question-page-2.png";
import circleBackground3 from "../../assets/circles-introduction-page-1.png";
import Logo from "../../assets/logoApp.png";
import React from "react";

export default function Introduction({ navigation, route }) {
  return (
    <View style={styles.teste}>

      <Image
        source={circleBackground3}
        style={{
          position: "absolute",
          right: 260,
          bottom: 720,
          width: "39%",
          height: undefined,
          aspectRatio: 0.9999,
        }}
        resizeMode="contain"
      />


      <Image
        source={Logo}
        style={{
          position: "absolute",
          right: 25,
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
          right: 0,
          bottom: 0,
          width: "30%",
          height: undefined,
          aspectRatio: 0.6934,
        }}
        resizeMode="contain"
      />

      <Image
        source={circleBackground2}
        style={{
          position: "absolute",
          right: 320,
          bottom: 0,
          width: "30%",
          height: undefined,
          aspectRatio: 1.2222,
        }}
        resizeMode="contain"
      />


      <View style={styles.quadrado}>
        <Text></Text>
        <Text style={styles.textoQuadrado}>BEM VINDO AO AMBIKIRA</Text>
        <Text></Text>
        <Text style={styles.textoQuadrado2}>Apresento-lhe um aplicativo educativo criado para desafiar seus conhecimentos sobre Educação no Brasil. Com uma interface intuitiva e cativante, o app oferece diversas categorias de perguntas relacionadas ao sistema educacional, história e muito mais.
          Você poderá competir com amigos ou outros usuários, testar suas habilidades e aprender enquanto se diverte.</Text>
      </View>



      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.botaoJogar}>JOGAR</Text>
      </TouchableOpacity>
    </View>


  );
}



const styles = StyleSheet.create({
  teste: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'flex-start',
    justifyContent: "center",
    alignItems: "center",
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
  },

  textoQuadrado2: {
    paddingLeft: 30,
    paddingRight: 20,
    textAlign: "left",
  },

  botaoJogar: {
    height: 40,
    width: 200,
    color: "#fff",
    backgroundColor: "red",
    marginTop: 120,
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 20,
    fontWeight: "bold",
  },

  circleBackground: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "17%",
    height: undefined,
    aspectRatio: 0.6934,
  }
});
