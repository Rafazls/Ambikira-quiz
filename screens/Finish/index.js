import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";
import { Circle, Defs, G, Path, Svg } from "react-native-svg";
import logo from '../../assets/biggestLogo.png'
import fogueteIcon from '../../assets/foguete.png'

export default function Finish({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
    PassionOne700: require("../../assets/fonts/Passion_One_Bold_700.ttf"),
    MontserratSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratExtraBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return;
  return (
    <View style={styles.teste}>
      {/*ICONE SUPERIOR DIREITO*/}
      <Svg
        viewBox="0 0 251 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: 1.2243,
          width: "30%",
          height: undefined,
          top: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <G filter="url(#filter0_d_718_107)">
          <Circle
            cx={134.634}
            cy={134.634}
            r={134.634}
            transform="matrix(-.73546 -.67756 .65262 -.75768 198.037 204.466)"
            fill="#F85D17"
          />
          <Path
            d="M317 46c0 77.294-63.549 140-142 140-78.45 0-142-62.706-142-140S96.55-94 175-94c78.451 0 142 62.706 142 140z"
            stroke="#000"
            strokeWidth={4}
          />
        </G>
        <Defs></Defs>
      </Svg>
      {/*CANTO INFERIOR ESQUERDO*/}
      <Svg
      viewBox="0 0 208 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{aspectRatio: 1.181818, width: "25%", height: undefined, bottom: 0, left: 0, position: 'absolute'}}
    >
      <Path
        d="M206.5 159.5c0 87.176-75.129 158-168 158s-168-70.824-168-158 75.129-158 168-158 168 70.824 168 158z"
        stroke="#F85D17"
        strokeWidth={3}
      />
    </Svg>
    {/*RESTANTE DA PÁGINA*/}
    <Image source={logo} style={{aspectRatio: 1.961722, width: "50%", height: undefined, }} resizeMode="contain"/>
    <View style={{paddingHorizontal: 32, backgroundColor: "#F8AE00", borderRadius: 20, width: "75%", alignItems: 'center', height: "55%", justifyContent: 'space-around'}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={fogueteIcon} style={{aspectRatio: 1, width: normalize(152), height: undefined}} resizeMode="contain"/>
        <Text style={{fontFamily: "MontserratSemiBold", fontSize: normalize(28), color: 'black', maxWidth: '50%'}}>
        {<Text style={{fontFamily: "MontserratSemiBold", fontSize: normalize(28), color: '#5365FF'}}>{route.params.name}</Text>}, obrigado por participar do Quiz Ambikira! {"\n"}Sua pontuação foi...
        </Text>
      </View>
      <View style={{padding: 26, backgroundColor: "#F85D17", borderRadius: 16}}>
        <Text style={{fontFamily: "MontserratExtraBold", fontSize: normalize(96), color: "#FFF"}}>
          {route.params.points}/10
        </Text>
      </View>
      <Text style={{fontFamily: "MontserratBold", fontSize: normalize(28), textAlign: 'center', }}>
      Caso seja o ganhador, entraremos em contato em breve.
      </Text>
    </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Developers");
        }}
        style={styles.botaoJogar}
      >
        <Text
          style={{
            fontFamily: "InriaSans",
              color: "#FFF",
              fontSize: normalize(36),
          }}
        >
          PRÓXIMO
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
  botaoJogar: {
    backgroundColor: "#000000",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 500,
    marginTop: normalize(80)
  },
});
