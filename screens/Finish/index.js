import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import circleBackground from "../../assets/circle-finish-page-1.png";
import circleBackground2 from "../../assets/circle-finish-page-2.png";
import logo from "../../assets/logoApp.png";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";

export default function Finish({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
    PassionOne700: require("../../assets/fonts/Passion_One_Bold_700.ttf"),
  });
  if (!fontsLoaded) return;
  return (
    <View style={styles.teste}>
      <Image
        source={logo}
        style={{
          position: "absolute",
          left: "5%",
          top: "5%",
          width: "30%",
          height: undefined,
          aspectRatio: 2.313559322,
        }}
        resizeMode="contain"
      />

      <Image
        source={circleBackground}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "25%",
          height: undefined,
          aspectRatio: 1.057416268,
        }}
        resizeMode="contain"
      />

      <Image
        source={circleBackground2}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "35%",
          height: undefined,
          aspectRatio: 1.243243243,
        }}
        resizeMode="contain"
      />
      <Text style={styles.textoQuadrado}>
          Muito obrigado por ter jogado conosco!
      </Text>
      <Text style={{fontFamily: "Battambang", fontSize: normalize(32)}}>Sua pontuação foi:</Text>
      <View style={{backgroundColor: "#7079F3", paddingHorizontal: 32, paddingVertical: 12, borderRadius: 24, marginTop: 20}}>
        <Text style={{fontFamily: "PassionOne700", color: "#FFF", fontSize: normalize(72)}}>{route.params.points}/15</Text>
      </View>
      <View style={styles.quadrado}>
        <Text style={styles.textoQuadrado2}>
          Agradecemos por participar do nosso quiz sobre Educação no Brasil!
          Esperamos que você tenha desfrutado da experiência de testar seus
          conhecimentos e aprender mais sobre o assunto. Continue nos
          acompanhando para mais desafios e conteúdos educativos. Seu interesse
          em aprender é fundamental para um futuro mais brilhante.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Introduction");
        }}
        style={styles.botaoInicio}
      >
        <Text style={{ fontFamily: "InriaSans", fontSize: normalize(48), color: "#FFF" }}>
          INÍCIO
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Developers");
        }}
        style={styles.botaoDevs}
      >
        <Text
          style={{ fontFamily: "PassionOne700", fontSize: normalize(32), color: "#FFF" }}
        >
          Desenvolvedores
        </Text>
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
    backgroundColor: "#FFEDC2",
    marginTop: "5%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 0,
    maxWidth: "70%",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  textoQuadrado: {
    color: "#FF3131",
    fontSize: normalize(48),
    textAlign: "center",
    fontFamily: "Anton",
    marginTop: "20%",
    width: "50%",
  },

  textoQuadrado2: {
    textAlign: "left",
    fontFamily: "Battambang",
    fontSize: normalize(24),
  },

  botaoInicio: {
    backgroundColor: "#F0B528",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  botaoDevs: {
    backgroundColor: "#FF3131",
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
