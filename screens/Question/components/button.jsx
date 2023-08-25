import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import normalize from "../../../assets/normalizeFont";
export default function ButtonQuestion({ onPress, text }){
    return (
        <TouchableOpacity onPress={onPress} style={{marginTop: 16, width: "25%"}}>
            <LinearGradient colors={["#F0B528", "#F0B528"]} style={{borderRadius: 500, paddingVertical: 8, alignItems: 'center'}}>
                <Text style={{fontSize: normalize(32), color: "black"}}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}