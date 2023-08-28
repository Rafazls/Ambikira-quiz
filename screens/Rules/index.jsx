import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Alert,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Svg,
  
} from "react-native-svg";
import normalize from "../../assets/normalizeFont";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import logo from "../../assets/newLogo.png";


function CircleRightBottom() {
  return (
    <Svg
      viewBox="0 0 267 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: undefined,
        width: "33%",
        aspectRatio: 0.83699,
        position: "absolute",
        zIndex: -99,
        right: 0,
        bottom: 0,
      }}
    >
      <G filter="url(#filter0_d_421_526)">
        <Circle
          cx={194.501}
          cy={252.501}
          r={144.145}
          transform="rotate(152.421 194.501 252.501)"
          fill="#F9AC01"
        />
        <G filter="url(#filter1_d_421_526)">
          <Path
            d="M166.005 414.132c-48.36-92.587-14.837-205.505 74.694-252.268 89.531-46.764 201.358-9.765 249.718 82.821 48.359 92.587 14.836 205.505-74.695 252.268-89.53 46.764-201.358 9.765-249.717-82.821z"
            stroke="#000000"
            strokeWidth={4}
            shapeRendering="crispEdges"
          />
        </G>
      </G>
    </Svg>
  );
}

function CircleLeftTop() {
  return (
    <Svg
      viewBox="0 0 375 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "45%",
        height: undefined,
        aspectRatio: 1.52439,
        position: "absolute",
        zIndex: -99,
        left: 0,
        top: 0,
      }}
    >
      <G filter="url(#filter0_d_421_554)">
        <Circle
          cx={134.634}
          cy={134.634}
          r={134.634}
          transform="matrix(-.73546 -.67756 .65262 -.75768 50.037 245.162)"
          fill="#F85D17"
        />
        <Circle
          cx={157.664}
          cy={157.664}
          r={155.664}
          transform="matrix(.93737 -.34834 .37945 .92521 -40.976 -98.159)"
          stroke="#000"
          strokeWidth={4}
        />
      </G>
    </Svg>
  );
}

export default function Rules({navigation, route}) {
  const [womanHeigth, setWomanHeigth] = useState(0);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [fontsLoaded] = useFonts({
    Imprima: require("../../assets/fonts/Imprima_400.ttf"),
    PassionOne700: require("../../assets/fonts/Passion_One_Bold_700.ttf"),
    InriaSans700: require("../../assets/fonts/Inria_Sans_Bold_700.ttf"),
    Jomhuria: require("../../assets/fonts/Jomhuria.ttf"),
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: normalize(48) }}>
      <Image source={logo} style={{ width: normalize(205), aspectRatio: 2.35632, height: undefined, alignSelf: 'flex-end' }} resizeMode="contain"/>
      <CircleLeftTop />
      <CircleRightBottom />
      <Text
        style={{
          fontFamily: "MontserratBold",
          fontSize: normalize(32),
          color: "#000000",
          textAlign: "center",
          marginTop: normalize(80)
        }}
      >
        Antes de jogar, você precisa confirmar que está ciente das regras do
        Quiz:{" "}
      </Text>
      <View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck1(checked)}
          />
          <Text style={styles.fontCheckBox}>
            O quiz é composto por 6 perguntas, e o tempo total é de 2 minutos.
          </Text>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck2(checked)}
          />
          <Text style={styles.fontCheckBox}>
            Não é possível pausar ou recomeçar o quiz.
          </Text>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck3(checked)}
          />
          <Text style={styles.fontCheckBox}>
            Cada participante poderá responder ao quiz uma única vez em cada
            estande.
          </Text>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck4(checked)}
          />
          <Text style={styles.fontCheckBox}>
            Se o/a participante for o/a melhor pontuado(a) em mais de um
            estande, terá direito somente a um encontro individual.
          </Text>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            onPress={(checked) => setCheck5(checked)}
            style={{ alignSelf: "flex-start" }}
          />
          <Text style={styles.fontCheckBox}>
            Em caso de empate na pontuação, o critério de desempate será o menor
            tempo de resposta do quiz.
          </Text>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck6(checked)}
          />
          <Text style={styles.fontCheckBox}>
            O Quiz terá um critério de desempate baseado no tempo ocorrido.
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 500,
            borderColor: "#000000",
            borderWidth: 2
          }}
        >
          <Text
            style={{
              fontFamily: "InriaSans",
              color: "#000000",
              fontSize: normalize(36),
            }}
          >
            VOLTAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (check1 && check2 && check3 && check4 && check5 && check6) {
              navigation.navigate("Home"); //Vai para a tela de home
            } else {
              Alert.alert(
                "Aviso",
                "Você precisa aceitar todos os termos para jogar"
              );
            }
          }}
          style={[styles.botaoJogar, { marginLeft: 16 }]}
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
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: "row",
    width: "50%",
    marginTop: 24,
  },
  fontCheckBox: {
    fontSize: normalize(24),
    fontFamily: "MontserratMedium",
    color: "#000000",
    alignSelf: "flex-start",
  },
  botaoJogar: {
    backgroundColor: "#000000",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 500,
  },
});
