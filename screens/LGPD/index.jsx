import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    PixelRatio,
    ScrollView,
} from "react-native";
import logo from "../../assets/newLogo.png";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";
import { Circle, Defs, Ellipse, G, Path, Rect, Svg } from "react-native-svg";

export default function LGPD({ navigation, route }) {
    const [fontsLoaded] = useFonts({
        //carrega as fontes
        InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
        MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    });
    if (!fontsLoaded) return; //verifica se as fontes já carregaram
    return (
        <View style={styles.teste}>
            {/*CIRCULO INFERIOR ESQUERDO*/}
            <Svg
                viewBox="0 0 222 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: "26%",
                    aspectRatio: 0.81617,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: -99
                }}
            >
                <Ellipse cx={26.5} cy={299.5} rx={195.5} ry={199.5} fill="#F9AC01" />
                <Path
                    d="M151 173.5C151 251.541 83.953 315 1 315s-150-63.459-150-141.5S-81.953 32 1 32s150 63.459 150 141.5z"
                    stroke="#fff"
                    strokeWidth={4}
                />
            </Svg>
            {/*CIRCULO SUPERIOR DIREITO*/}
            <Svg
                viewBox="0 0 269 216"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    aspectRatio: 1.24537,
                    width: "32%",
                    height: undefined,
                    right: 0,
                    top: 0,
                    position: "absolute",
                    zIndex: -99
                }}
            >
                <G filter="url(#filter0_d_718_220)">
                    <Path
                        d="M417.6 -3.92905C417.6 110.907 326.252 204 213.57 204C100.887 204 0 110.907 0 -3.92905C0 -118.765 100.887 -211.858 213.57 -211.858C326.252 -211.858 417.6 -118.765 417.6 -3.92905Z"
                        fill="#F85D17"
                    />
                    <Path
                        d="M490 -116.484C490 6.61664 400.439 106.033 290.4 106.033C180.361 106.033 90.7999 6.61664 90.7999 -116.484C90.7999 -239.584 180.361 -339 290.4 -339C400.439 -339 490 -239.584 490 -116.484Z"
                        stroke="black"
                        strokeWidth={4}
                    />
                </G>
                <Defs></Defs>
            </Svg>
            <View style={{ paddingHorizontal: normalize(100), flex: 1, paddingVertical: normalize(48), alignItems: 'center' }}>
                <Image
                    source={logo}
                    style={{ width: "30%", aspectRatio: 2.35632, height: undefined, alignSelf: 'flex-start' }}
                    resizeMode="contain"
                />
                <Text style={{ fontFamily: 'MontserratBold', fontSize: normalize(40), color: "#F85D17", textAlign: 'center', marginTop: normalize(100) }}>LGPD</Text>
               <ScrollView>
                <Text style={{ fontFamily: 'MontserratMedium', fontSize: normalize(32), color: 'black', marginTop: "12%" }}>
                Os dados fornecidos neste cadastro serão compartilhados com o Instituto Ambikira, em conformidade com a Lei nº
13.709 - Lei Geral de Proteção de Dados Pessoais (LGPD), com a única e exclusiva finalidade de registrar sua
participação neste Quiz e para contato no caso do vencedor do Quiz. Não usaremos ou armazenaremos suas
informações para nenhuma outra finalidade, exceto se requerido para fins de cumprimento legal ou regulatório, e elas
serão destruídas após o cumprimento de sua finalidade. O Instituto Ambikira fica autorizado a compartilhar os dados
fornecidos neste cadastro com o CEAP (Centro Educacional Assistencial Profissionalizante), exclusivamente para a
finalidade aqui prevista. Ao realizar o cadastro nesta página você concorda com os termos da coleta de seus dados.
                </Text>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home"); //Vai para a tela de home
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
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
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
    botaoJogar: {
        backgroundColor: "#000000",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 500,
        marginTop: normalize(80)
    },
});
