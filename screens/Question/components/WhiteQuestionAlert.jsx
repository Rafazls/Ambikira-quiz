import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Alert,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import RadioSelection from "./RadioButtonQuestion";
  import { useFonts } from "expo-font";
  import normalize from "../../../assets/normalizeFont";
  import { LinearGradient } from "expo-linear-gradient";
  
  export default function AlertWhiteQuestion({ confirmation, cancel }) {

    return (
      <View>
        <View>
            <Text></Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    questionView: {
      paddingHorizontal: normalize(64),
      alignItems: 'center',
      width: "100%",
      padding: 24,
      borderRadius: 20
    },
    alternativesView: {
      backgroundColor: "#FF3131",
      width: "100%",
      paddingHorizontal: 24,
      marginTop: 24,
      borderRadius: 24,
      paddingVertical: 16,
    },
  });
  