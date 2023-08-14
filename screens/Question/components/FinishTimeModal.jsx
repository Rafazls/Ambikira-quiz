import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import normalize from "../../../assets/normalizeFont";
import { LinearGradient } from "expo-linear-gradient";
import timeFinished from "../../../assets/questions_assets/timeStopped.png";
import alvo from '../../../assets/questions_assets/alvo.png'

export default function FinishAlert({ endQuiz, visible }) {
  return (
    <View style={visible ? [styles.containerModal, { display: 'flex' }] : [styles.containerModal, { display: 'none' }]}>
      <LinearGradient
        colors={["rgba(208, 132, 62, 0.99)", "rgba(198, 89, 105, 0.99)"]}
        style={{width: "50%", height: undefined, aspectRatio: 1, alignItems: 'center', paddingHorizontal: normalize(46), borderRadius: 16}}
      >
        <Image source={timeFinished} style={{aspectRatio: 1, height: undefined, width: normalize(155)}} resizeMode="contain"/>
        <Text style={{fontFamily:"MontserratBold", fontSize: normalize(28), color: 'white'}}>O tempo chegou ao fim!</Text>
        <Text style={{fontFamily:"MontserratMedium", fontSize: normalize(28), color: 'white', marginTop: 16}}>Suas respostas serão enviadas e seus acertos serão contabilizados.</Text>
        <TouchableOpacity style={{marginTop: 12}} onPress={endQuiz}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "65%", backgroundColor: '#FFF', borderRadius: 500, paddingHorizontal: 16}}>
                <Image source={alvo}/>
                <Text style={{fontSize: normalize(26), color: "#BD3247", fontFamily: "MontserratMedium"}}>Pontuação</Text>
            </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  questionView: {
    paddingHorizontal: normalize(64),
    alignItems: "center",
    width: "100%",
    padding: 24,
    borderRadius: 20,
  },
  alternativesView: {
    backgroundColor: "#FF3131",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 24,
    borderRadius: 24,
    paddingVertical: 16,
  },
  containerModal: {
    width: "100%", 
    height: "100%", 
    position: 'absolute', 
    zIndex: 99, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: "rgba(255,255,255, 0.7)"}
});
