import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, PixelRatio } from "react-native";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackground2 from "../../assets/circles-question-page-2.png";
import circleBackground3 from "../../assets/circles-introduction-page-1.png";
import Logo from "../../assets/logoApp.png";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";


export default function Introduction({ navigation, route }) {
  const [fontsLoaded] = useFonts({ //carrega as fontes
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
  });
  if (!fontsLoaded) return; //verifica se as fontes já carregaram
  return (
    <View style={styles.teste}>
      <Image
        source={circleBackground3}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "39%",
          height: undefined,
          aspectRatio: 2.2613,
        }}
        resizeMode="contain"
      />

      <Image
        source={Logo}
        style={{
          position: "absolute",
          right: 25,
          top: "2.5%",
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
          left: 0,
          bottom: 0,
          width: "30%",
          height: undefined,
          aspectRatio: 0.85384,
        }}
        resizeMode="contain"
      />

      <View style={styles.quadrado}>
        <Text></Text>
        <Text style={styles.textoQuadrado}>BEM VINDO AO AMBIKIRA</Text>
        <Text></Text>
        <Text style={styles.textoQuadrado2}>
          Apresento-lhe um aplicativo educativo criado para desafiar seus
          conhecimentos sobre Educação no Brasil. Com uma interface intuitiva e
          cativante, o app oferece diversas categorias de perguntas relacionadas
          ao sistema educacional, história e muito mais. Você poderá competir
          com amigos ou outros usuários, testar suas habilidades e aprender
          enquanto se diverte.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home"); //Vai para a tela de home
        }}
        style={styles.botaoJogar}
      >
        <Text style={{ fontFamily: "InriaSans", color: "#FFF", fontSize: normalize(48) }}>
          PREENCHER DADOS
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },

  quadrado: {
    backgroundColor: "#FFEDC2",
    marginTop: "25%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 0,
    paddingHorizontal: 48,
    width: "70%",
    paddingVertical: 24,
  },

  textoQuadrado: {
    color: "#FF3131",
    fontSize: normalize(48),
    fontFamily: "Anton",
  },

  textoQuadrado2: {
    textAlign: "left",
    fontFamily: "Battambang",
    fontSize: normalize(24),
  },

  botaoJogar: {
    backgroundColor: "#FF3131",
    marginTop: 80,
    paddingVertical: 18,
    paddingHorizontal: 64,
    borderRadius: 20,
  },

  circleBackground: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "17%",
    height: undefined,
    aspectRatio: 0.6934,
  },
});
