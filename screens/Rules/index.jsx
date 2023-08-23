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
import { Circle, Defs, G, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import normalize from "../../assets/normalizeFont";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function CircleRightBottom() {
    return (
        <Svg
            viewBox="0 0 267 319"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: undefined, width: "33%", aspectRatio: 0.83699, position: 'absolute', zIndex: -99, right: 0, bottom: 0 }}
        >
            <G filter="url(#filter0_d_421_526)">
                <Circle
                    cx={194.501}
                    cy={252.501}
                    r={144.145}
                    transform="rotate(152.421 194.501 252.501)"
                    fill="url(#paint0_linear_421_526)"
                />
                <G filter="url(#filter1_d_421_526)">
                    <Path
                        d="M166.005 414.132c-48.36-92.587-14.837-205.505 74.694-252.268 89.531-46.764 201.358-9.765 249.718 82.821 48.359 92.587 14.836 205.505-74.695 252.268-89.53 46.764-201.358 9.765-249.717-82.821z"
                        stroke="#fff"
                        strokeWidth={4}
                        shapeRendering="crispEdges"
                    />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_421_526"
                    x1={281.701}
                    y1={328.662}
                    x2={91.6334}
                    y2={255.226}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1C2682" />
                    <Stop offset={1} stopColor="#5365FF" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

function CircleLeftTop() {
    return (
        <Svg
            viewBox="0 0 375 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "45%", height: undefined, aspectRatio: 1.52439, position: 'absolute', zIndex: -99, left: 0, top: 0 }}
        >
            <G filter="url(#filter0_d_421_554)">
                <Circle
                    cx={134.634}
                    cy={134.634}
                    r={134.634}
                    transform="matrix(-.73546 -.67756 .65262 -.75768 50.037 245.162)"
                    fill="url(#paint0_linear_421_554)"
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
            <Defs>
                <LinearGradient
                    id="paint0_linear_421_554"
                    x1={56.1262}
                    y1={38.1294}
                    x2={147.274}
                    y2={112.817}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#00C5FF" />
                    <Stop offset={1} stopColor="#5365FF" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

function Woman(props) {
    return (
        <Svg
            viewBox="0 0 125 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ aspectRatio: 0.576036, height: undefined, width: "15%" }}
        >
            <Path
                d="M58.986 47.384c9.47 0 17.148-7.504 17.148-16.761S68.457 13.86 58.986 13.86s-17.149 7.505-17.149 16.762c0 9.257 7.678 16.761 17.149 16.761z"
                fill="#000"
            />
            <Path
                d="M60.426 47.416c7.754 0 14.04-6.143 14.04-13.722S68.18 19.97 60.426 19.97c-7.753 0-14.039 6.144-14.039 13.723 0 7.579 6.286 13.722 14.04 13.722zM113.894 75.434c-.223.22-.428.455-.613.706l-28.33-.978-3.24-5.94-9.81 3.608 4.69 11.063a4.503 4.503 0 001.896 2.135 4.66 4.66 0 002.827.596l32.059-3.44a6.003 6.003 0 002.928 2.004 6.132 6.132 0 003.573.022 6.01 6.01 0 002.954-1.967 5.759 5.759 0 00.447-6.656 5.96 5.96 0 00-2.664-2.328 6.132 6.132 0 00-3.547-.435 6.052 6.052 0 00-3.17 1.613v-.003z"
                fill="#A0616A"
            />
            <Path
                d="M68.126 78.172a2.747 2.747 0 01-.943-.682 2.671 2.671 0 01-.567-1.004L62.67 63.541a7.32 7.32 0 01-.28-5.717 7.443 7.443 0 011.54-2.5 7.637 7.637 0 012.4-1.733 7.808 7.808 0 015.849-.269 7.684 7.684 0 012.557 1.506 7.489 7.489 0 011.772 2.349l7.644 11.305a2.635 2.635 0 01.353 2.215 2.672 2.672 0 01-.553 1.012 2.746 2.746 0 01-.933.695l-12.599 5.749a2.802 2.802 0 01-2.292.017l-.003.002z"
                fill="#00C5FF"
            />
            <Path
                d="M96.03 209.597l6.154-3.275-9.994-24.763-9.084 4.833 12.923 23.205z"
                fill="#A0616A"
            />
            <Path
                d="M93.367 208.467l12.121-6.45a8.982 8.982 0 016.693-.694 8.862 8.862 0 013.039 1.558 8.65 8.65 0 012.197 2.577l.137.245-19.847 10.56-4.34-7.796z"
                fill="#000"
            />
            <Path
                d="M28.3 209.623h7.008l3.334-26.42H28.296l.005 26.42z"
                fill="#A0616A"
            />
            <Path
                d="M26.513 207.388h13.801c2.333 0 4.57.905 6.22 2.518a8.498 8.498 0 012.575 6.078v.28H26.513v-8.876z"
                fill="#000"
            />
            <Path
                d="M71.847 92.362l2.287 26.819 25.504 74.787a2.188 2.188 0 01-.124 1.706A2.275 2.275 0 0198 196.849l-7.817 1.819c-.5.117-1.027.065-1.494-.147a2.265 2.265 0 01-1.078-1.021l-32.607-63.223a1.128 1.128 0 00-.483-.483 1.168 1.168 0 00-1.308.161 1.11 1.11 0 00-.346.585L38.52 198.436a2.226 2.226 0 01-.8 1.262c-.407.32-.913.494-1.434.494h-7.274a2.332 2.332 0 01-1.615-.651 2.225 2.225 0 01-.497-.723 2.185 2.185 0 01-.175-.891c.667-44.307-1.532-94.788 15.969-102.774l2.858-7.263 26.296 4.472z"
                fill="#1C2682"
            />
            <Path
                d="M44.73 89.793l-2.946-17.42a16.882 16.882 0 01.744-8.521 17.23 17.23 0 014.84-7.125 17.485 17.485 0 017.59-3.96 17.743 17.743 0 018.604.09l.502.135a17.63 17.63 0 018.809 5.687 16.984 16.984 0 013.893 9.592c.563 7.565.058 18.54-5.532 27.863l-.108.18-26.396-6.521z"
                fill="#00C5FF"
            />
            <Path
                d="M74.393 26.4a19.402 19.402 0 01-10.913 3.297 11.851 11.851 0 004.638 1.865 39.375 39.375 0 01-15.727.086 10.337 10.337 0 01-3.293-1.105 4.138 4.138 0 01-1.305-1.117 4.03 4.03 0 01-.727-1.54c-.343-1.926 1.19-3.677 2.787-4.856a20.793 20.793 0 018.25-3.588 21.02 21.02 0 019.027.213c1.93.488 3.863 1.311 5.116 2.827 1.254 1.515 1.625 3.85.43 5.41l1.717-1.492zM58.76 13.778C60.389 7.353 54.556.22 47.785.353c-6.866.136-11.92 6.202-15.394 11.992-3.473 5.79-6.925 12.357-13.3 14.85a14.028 14.028 0 01-6.656.875 13.93 13.93 0 01-6.284-2.314 13.522 13.522 0 01-4.41-4.95 13.176 13.176 0 01-1.483-6.401C-.6 21.44.588 29.054 5.23 34.496c4.643 5.442 13.28 7.895 19.492 4.237 3.544-2.089 5.813-5.72 7.681-9.33 1.869-3.611 3.532-7.42 6.363-10.372 2.831-2.953 7.21-4.912 11.15-3.67 1.564.493 2.967 1.452 4.583 1.746 1.616.294 3.65-.458 3.871-2.05l.39-1.279z"
                fill="#000"
            />
            <Path
                d="M24.92 130.239a5.963 5.963 0 01-1.247-2.298 5.874 5.874 0 01-.136-2.598 5.927 5.927 0 011.001-2.41 6.083 6.083 0 011.95-1.769l12.179-53.358 12.354 4.957-15.855 50.888a5.91 5.91 0 01.448 4.27 6.043 6.043 0 01-2.57 3.481 6.285 6.285 0 01-4.288.929 6.21 6.21 0 01-3.835-2.092z"
                fill="#A0616A"
            />
            <Path
                d="M33.843 75.463a2.644 2.644 0 01-.192-2.235l4.683-12.708a7.47 7.47 0 013.248-4.76 7.791 7.791 0 015.74-1.12 7.658 7.658 0 014.868 3.175 7.337 7.337 0 011.146 5.61l-.711 13.533c-.02.386-.126.764-.309 1.107-.183.343-.44.643-.752.88a2.782 2.782 0 01-1.059.495 2.817 2.817 0 01-1.173.019L35.7 76.776a2.783 2.783 0 01-1.075-.46 2.711 2.711 0 01-.78-.857l-.001.003z"
                fill="#00C5FF"
            />
        </Svg>
    )
}

export default function Rules() {
    const [womanHeigth, setWomanHeigth] = useState(0)
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CircleLeftTop />
            <CircleRightBottom />
            <View style={{ flexDirection: 'row', width: 'auto' }} >
                <Woman />
                <View onLayout={(e) => {
                    setWomanHeigth(e.nativeEvent.layout.height)
                }}
                    style={{ aspectRatio: 1.76973, width: '32%', height: undefined, borderRadius: 16, borderColor: "#1C2682", borderWidth: 2, borderBottomWidth: 4, justifyContent: 'center', alignItems: 'center', position: 'relative', alignSelf: 'flex-end', top: -womanHeigth + 8 }}
                >
                    <Text style={{ fontFamily: "MontserratBold", fontSize: normalize(22), color: "#1C2682" }}>Antes de jogar, você precisa confirmar que está ciente das regras do Quiz: </Text>
                </View>
            </View>
            <View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>Você só poderá jogar uma vez.</Text>
                </View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>Você terá um tempo determinado para responder as perguntas.</Text>
                </View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>O Quiz tem três graus de dificuldade.</Text>
                </View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>Erros ou ausência de resposta serão detratores de pontos.</Text>
                </View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>Seus dados serão utilizados apenas para contato e controle de jogos por pessoa.</Text>
                </View>
                <View style={styles.checkBoxView}>
                    <BouncyCheckbox fillColor="#1C2682" innerIconStyle={{ borderRadius: 4, borderWidth: 2 }} iconStyle={{ borderRadius: 4 }} style={{alignSelf: 'flex-start'}}/>
                    <Text style={styles.fontCheckBox}>O Quiz terá um critério de desempate baseado no tempo ocorrido.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxView: {
        flexDirection: 'row',
        width: "50%",
        marginTop: 24
    },
    fontCheckBox: {
        fontSize: normalize(24),
        fontFamily: "MontserratMedium",
        color: "#1C2682",
        alignSelf: 'flex-start'
    }
});