import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import RadioSelection from "./RadioButtonQuestion";
import { useFonts } from "expo-font";
import normalize from "../../../assets/normalizeFont";
import { LinearGradient } from "expo-linear-gradient";

export default function Question({
  questaoAtual,
  numeroQuestaoAtual,
  respostasObject,
  questionLayout
}) {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setSelected(null); //Zera as questões escolhidas toda vez que troca de questões
  }, [questaoAtual]);

  function updateQuestion(resposta) {
    //Função que atualiza a resposta selecionada pelo usuário na pergunta atual
    const respostasCopy = [...respostasObject.respostas];
    respostasCopy.splice(numeroQuestaoAtual, 1, resposta);
    respostasObject.setRespostas(respostasCopy);
  }
  return (
    <>
      <LinearGradient colors={["#1C2682", "#5B61F9"]} style={numeroQuestaoAtual > 0 ? [styles.questionView, {marginLeft: 24}] : [styles.questionView]} onLayout={questionLayout}>
        <Text style={{ fontFamily: "MontserratMedium", fontSize: normalize(22), color: "#FFF", }}>
          Questão {numeroQuestaoAtual + 1}/10
        </Text>
        <Text style={{color: "#FFF", fontSize: normalize(26), width: "100%", textAlign: 'center', fontFamily: "MontserratBold", marginTop: 40, marginBottom: 40}}>
          {questaoAtual.pergunta}
        </Text>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <RadioSelection
            status={selected === "A" ? true : false}
            question={questaoAtual.alternativas["A"]}
            alternative={"A"}
            onSelected={() => {
              setSelected("A");
              updateQuestion("A");
            }}
          />
          <RadioSelection
            status={selected === "B" ? true : false}
            alternative={"B"}
            question={questaoAtual.alternativas["B"]}
            onSelected={() => {
              setSelected("B");
              updateQuestion("B");
            }}
          />
          <RadioSelection
            status={selected === "C" ? true : false}
            alternative={"C"}
            question={questaoAtual.alternativas["C"]}
            onSelected={() => {
              setSelected("C");
              updateQuestion("C");
            }}
          />
          <RadioSelection
            status={selected === "D" ? true : false}
            alternative={"D"}
            question={questaoAtual.alternativas["D"]}
            onSelected={() => {
              setSelected("D");
              updateQuestion("D");
            }}
          />
        </View>
      </LinearGradient>
    </>
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
