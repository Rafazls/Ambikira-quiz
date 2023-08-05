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

export default function Question({
  questaoAtual,
  numeroQuestaoAtual,
  respostasObject,
}) {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setSelected(null);
  }, [questaoAtual]);

  function updateQuestion(resposta) {
    const respostasCopy = [...respostasObject.respostas];
    respostasCopy.splice(numeroQuestaoAtual, 1, resposta);
    console.log(respostasCopy);
    respostasObject.setRespostas(respostasCopy);
  }

  return (
    <>
      <View style={styles.questionView}>
        <View style={styles.circleNumber}>
          <Text style={{ fontFamily: "Imprima", fontSize: 24 }}>
            {numeroQuestaoAtual + 1}°
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "PassionOne700",
            maxWidth: "90%",
            color: "#FFF",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          {questaoAtual.pergunta}
        </Text>
      </View>
      <View style={styles.alternativesView}>
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
    </>
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
  circleNumber: {
    borderRadius: 50000,
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
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
