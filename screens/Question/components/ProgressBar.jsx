import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import RadioSelection from "./RadioButtonQuestion";
import { useFonts } from "expo-font";
import normalize from "../../../assets/normalizeFont";
import clock from '../../../assets/questions_assets/clock.png'
import { LinearGradient } from "expo-linear-gradient";

export default function ProgressBarComponent({ tempo }) {
  const progressAnim = useRef(new Animated.Value(0)).current
  /*const [width, setNewWidth] = useState(0);
  
  if (actualStep > steps){
    throw "actualStep cannot be biggest than steps"
  }
 */
  useEffect(() => {
    Animated.timing(progressAnim, {
        toValue: 100,
        duration: 120000,
        useNativeDriver: false
    }).start()
  }, []);
  const animatedInterpolated = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["100%", "10%"]
  })
  return (
    <View style={styles.fundoProgressBar} >
      <Text style={{color: "#FFF", fontSize: normalize(32), fontWeight: 'bold'}} >{Math.floor(tempo / 60)}:{tempo % 60 < 10 ? "0" + (tempo % 60) : tempo % 60}</Text>
      <Image
        source={clock}
        style={{ zIndex: -99, height: undefined, width: "12.5%", aspectRatio: 1.16, position: 'absolute', right: "2%"}}
        resizeMode="contain"
      />
      <Animated.View style={{width: animatedInterpolated, height: "100%", backgroundColor: "#1C2682", borderRadius: 500, position: 'absolute', zIndex: -9, left: 0, top: 0}}>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionView: {
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: "#7079F3",
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  fundoProgressBar: {
    width: "75%",
    height: undefined,
    backgroundColor: "#C0B9B9",
    marginTop: "7.5%",
    borderRadius: 500,
    borderColor: "#1C2682",
    borderWidth: 0,
    borderCurve: 500,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 8,
    flexDirection: 'row',
    alignContent: 'center',
  }
});
