import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, PixelRatio } from "react-native";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackground3 from "../../assets/circles-introduction-page-1.png";
import Logo from "../../assets/logoApp.png";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";
import { Circle, Ellipse, Path, Rect, Svg } from "react-native-svg";


export default function Introduction({ navigation, route }) {
  const [fontsLoaded] = useFonts({ //carrega as fontes
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
  });
  if (!fontsLoaded) return; //verifica se as fontes já carregaram
  return (
    <View style={styles.teste}>
      {/*CIRCULO SUPERIOR ESQUERDO*/}
      <Svg viewBox="0 0 388 261" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "39%",
        height: undefined,
        aspectRatio: 1.48659,
      }}
      >
        <Path d="M313.6 53.0707C313.6 167.907 222.252 261 109.57 261C-3.11337 261 -104 167.907 -104 53.0707C-104 -61.7655 -3.11337 -154.859 109.57 -154.859C222.252 -154.859 313.6 -61.7655 313.6 53.0707Z" fill="#F85D17" />
        <Path d="M386 -59.4837C386 63.6166 296.439 163.033 186.4 163.033C76.361 163.033 -13.2 63.6166 -13.2 -59.4837C-13.2 -182.584 76.361 -282 186.4 -282C296.439 -282 386 -182.584 386 -59.4837Z" stroke="white" strokeWidth={4}/>
      </Svg>
      {/*LOGO*/}
      <Svg viewBox="0 0 248 118" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "30%", height: undefined, aspectRatio: 2.10169, position: 'absolute', right: 25, top: '2.5%' }}>
        <Rect x="1.5" y="1.5" width="245" height="115" rx="57.5" stroke="#F85D17" stroke-width="12" />
        <Path d="M109.649 57.1686C108.809 57.1686 106.893 56.816 106.309 57.5495C104.697 59.5744 107.4 64.5604 109.41 65.2452V65.4828H108.693L107.02 73.7969H106.78L104.673 64.7701L104.629 42.4406H100.566V50.9923H100.327L97.6424 45.0536L96.3499 42.6848L91.961 42.4406V65.4828H89.8098V42.4406H84.3122V59.3065L84.5579 65.3394L88.3756 65.7203L85.0293 88.7624H88.8537L89.0927 86.1494H91.961L92.2 88.7624H97.2195L93.3951 65.7203H96.2634V54.318H96.5024L101.044 65.4828H98.4146V88.7624L102.334 88.5183L102.717 85.9119V78.3103H102.956L105.107 88.7624L107.082 88.5183L107.976 85.6743L109.649 78.0728H109.888V88.7624H114.907V73.5594C114.907 71.4042 114.402 68.535 114.983 66.4579C115.265 65.4495 116.565 65.1271 117.287 64.482C118.419 63.4708 119.126 62.0022 119.2 60.4943C119.34 57.6582 118.79 55.3662 116.58 53.4116C114.982 51.9991 112.284 50.9978 111.5 48.8544C111.021 47.5429 112.354 45.9479 113.686 46.8609C114.761 47.5974 114.668 48.8997 114.668 50.0421H118.254C118.254 47.7269 118.361 45.1925 116.536 43.4416C113.737 40.7555 108.065 41.9983 106.969 45.7663C106.054 48.9121 107.594 52.6145 109.891 54.7709C111.245 56.0416 113.574 57.061 113.972 59.069C114.321 60.8266 111.989 62.0617 110.621 61.0364C109.396 60.1171 109.649 58.5171 109.649 57.1686ZM192.829 42.1343C190.467 42.176 188.511 43.1337 187.422 45.2912C186.252 47.6078 186.615 50.385 186.615 52.8927C186.615 58.4145 185.765 66.1538 193.546 65.9544C195.984 65.8919 197.859 64.4208 198.674 62.1571C199.443 60.0194 199.283 57.7342 199.283 55.5057C199.283 50.4028 200.236 42.0037 192.829 42.1343ZM119.21 47.1916H123.751V65.4828H117.059V82.3487C117.059 83.7373 116.417 87.2682 117.304 88.3816C117.782 88.9805 119.018 88.7624 119.688 88.7624C121.994 88.7626 124.791 89.1697 126.858 87.9351C130.05 86.028 131.093 78.167 127.337 76.41V75.9349C131.24 74.1055 129.547 67.1151 125.902 65.9579V65.7203H129.249V47.1916H133.79V42.4406H123.034L119.455 42.8215L119.21 47.1916ZM134.985 65.4828H131.161V88.7624H136.659V65.7203H138.81V88.7624H144.307L144.785 80.6858H145.024L146.698 88.7624H151.956L148.808 72.6092L151.565 65.9579L151.717 59.3065V50.7548L152.1 47.5725L156.259 47.1916V42.4406H141.917V47.1916C142.982 47.1916 145.263 46.7652 146.075 47.5725C147.128 48.6191 146.459 52.4337 146.459 53.8429C146.459 57.8031 147.06 62.2911 146.442 66.1954C146.139 68.1043 144.838 69.7261 144.546 71.659H144.307V65.7203C143.341 65.7203 141.351 66.0967 140.729 65.1697C139.833 63.8355 140.483 60.406 140.483 58.8314V42.4406C139.355 42.4406 135.983 41.8781 135.231 42.8215C134.344 43.9349 134.985 47.4658 134.985 48.8544V65.4828ZM157.454 42.4406C157.454 48.4073 156.464 55.3667 157.721 61.2069C158.159 63.2396 160.472 64.4254 160.765 66.2049C161.148 68.5356 160.8 71.1972 160.8 73.5594V88.7624H165.82V78.5479C170.045 78.8647 166.75 85.7446 168.488 88.2118C169.26 89.3084 172.267 88.7624 173.468 88.7624C173.199 85.4874 174.209 77.9764 170.839 76.41C175.093 72.6275 172.824 65.7313 167.015 65.4828V65.2452C169.742 64.3231 170.122 61.5568 170.122 59.069V42.4406H166.298V56.931C166.298 58.2301 166.61 61.0623 164.622 61.1175C162.567 61.1744 162.951 58.2177 162.951 56.931V42.4406H157.454ZM171.317 47.1916H175.859V61.2069C175.859 62.7939 175.17 65.556 177.293 65.7203L174.185 88.7624C176.73 88.7624 178.008 89.0377 178.01 86.1494H180.878L181.117 88.7624H186.376L182.312 65.4828H181.356V47.1916H185.898V42.4406H175.141L171.563 42.8215L171.317 47.1916ZM192.835 46.9225C194.146 46.9225 194.251 48.6404 194.262 49.5671C194.299 52.4952 194.278 55.428 194.263 58.3563C194.259 59.2803 194.262 61.2463 192.835 61.0962C191.537 60.9596 191.636 59.2869 191.634 58.3563V49.8046C191.634 48.9079 191.448 46.9225 192.835 46.9225ZM153.151 65.4828V88.7624H158.41V65.4828H153.151ZM122.632 69.9278C124.721 69.2109 125.192 73.8899 123.267 74.5209C121.523 75.0927 121.632 70.271 122.632 69.9278ZM165.82 74.7471V69.7586C168.765 70.0849 168.746 74.4223 165.82 74.7471ZM90.5268 76.6475L91.2439 83.2988H89.3317L90.5268 76.6475ZM179.444 76.8851L180.4 83.2988H178.488L179.444 76.8851ZM58.0195 77.4712C50.355 78.9107 53.1287 90.5842 60.8878 88.9072C68.2213 87.3223 65.2768 76.1082 58.0195 77.4712ZM122.632 78.7017C124.899 77.7747 125.213 83.6375 123.487 84.3057C121.432 85.1013 121.563 79.1387 122.632 78.7017Z" fill="#050505" />
        <Path d="M72 42.5H62.5L69.7617 88.5H80L72 42.5Z" fill="#F8AE00" />
        <Circle cx="67" cy="33" r="6" fill="#F8AE00" />
      </Svg>
      {/*CIRCULO INFERIOR DIREITO*/}
      <Svg viewBox="0 0 230 367" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", right: 0, bottom: 0, width: "30%", height: undefined, aspectRatio: 0.62670 }}>
        <Ellipse cx="195.5" cy="299.5" rx="195.5" ry="199.5" fill="#F9AC01" />
        <Path d="M339 143.5C339 221.541 271.953 285 189 285C106.047 285 39 221.541 39 143.5C39 65.4586 106.047 2 189 2C271.953 2 339 65.4586 339 143.5Z" stroke="black" strokeWidth={4} />
      </Svg>

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
    backgroundColor: "#F8AE00",
    marginTop: "25%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 0,
    paddingHorizontal: 48,
    width: "70%",
    paddingVertical: 24,
  },

  textoQuadrado: {
    color: "#FFFFFF",
    fontSize: normalize(48),
    fontFamily: "Anton",
  },

  textoQuadrado2: {
    textAlign: "left",
    fontFamily: "Battambang",
    fontSize: normalize(24),
  },

  botaoJogar: {
    backgroundColor: "#F85D17",
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
