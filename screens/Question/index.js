import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import logoOnApp from "../../assets/logoApp.png";
import Question from "./components/Question";
import { useFonts } from "expo-font";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackgroundTwo from "../../assets/circles-question-page-2.png";
import questions from "../../assets/questions/perguntas.json";

function sortearQuestoes() {
  const questionsSelected = [];
  const questionsSorted = [];
  for (let i = 0; i < 10; i++) {
    let randomNumberQuestion = Math.floor(Math.random() * questions.length);
    while (questionsSorted.includes(randomNumberQuestion)) {
      randomNumberQuestion = Math.floor(Math.random() * questions.length);
    }
    questionsSorted.push(randomNumberQuestion);
    questionsSelected.push(questions[randomNumberQuestion]);
  }
  return questionsSelected;
}

export default function QuestionPage({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Imprima: require("../../assets/fonts/Imprima_400.ttf"),
    PassionOne700: require("../../assets/fonts/Passion_One_Bold_700.ttf"),
    InriaSans700: require("../../assets/fonts/Inria_Sans_Bold_700.ttf"),
    Jomhuria: require("../../assets/fonts/Jomhuria.ttf"),
  });
  const [respostas, setRespostas] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [questionsSelected, setQuestionsSelected] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [tempo, setTempo] = useState(120);
  let interval = null;
  function startTimer(setTempo) {
    let segundos = 0;
    const myInterval = setInterval(() => {
      if (segundos === 120) {
        endQuiz(myInterval);
      }
      segundos++;
      setTempo(120 - segundos);
    }, 1000);
    return myInterval;
  }
  function endQuiz(interval) {
    let points = 0;
    for (let index in questionsSelected) {
      console.log(
        questionsSelected[index].alternativaCorreta,
        respostas[index]
      );
      if (questionsSelected[index].alternativaCorreta === respostas[index]) {
        points++;
      }
    }
    console.log(points);
    clearInterval(interval);
    navigation.navigate("Finish");
  }

  useEffect(() => {
    setQuestionsSelected(sortearQuestoes());
    interval = startTimer(setTempo);
  }, []);
  if (!fontsLoaded || questionsSelected.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logoOnApp}
          style={{ width: "35%" }}
          resizeMode="contain"
        />
        <Text style={[styles.textTime]}>
          {Math.floor(tempo / 60)}:
          {tempo % 60 < 10 ? "0" + (tempo % 60) : tempo % 60}
        </Text>
      </View>
      <View style={{ marginHorizontal: 38 }}>
        <Question
          questaoAtual={questionsSelected[numberQuestion]}
          numeroQuestaoAtual={numberQuestion}
          respostasObject={{ respostas, setRespostas }}
        />
      </View>
      <View style={{ width: "100%", marginTop: 8, alignItems: "center" }}>
        {numberQuestion === 9 ? (
          <TouchableOpacity
            style={styles.nextQuestionButton}
            onPress={() => {
              endQuiz(interval);
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans700",
                fontSize: 24,
                color: "#FFF",
              }}
            >
              FINALIZAR
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextQuestionButton}
            onPress={() => {
              setNumberQuestion(numberQuestion + 1);
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans700",
                fontSize: 24,
                color: "#FFF",
              }}
            >
              PRÓXIMA PERGUNTA
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={circleBackground}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "17%",
          height: undefined,
          aspectRatio: 0.6934,
        }}
        resizeMode="contain"
      />
      <Image
        source={circleBackgroundTwo}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "17%",
          height: undefined,
          aspectRatio: 0.8538,
        }}
        resizeMode="contain"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
    marginHorizontal: 44,
  },
  textTime: {
    fontSize: 56,
    fontFamily: "Jomhuria",
  },
  nextQuestionButton: {
    backgroundColor: "#F0B528",
    padding: 16,
    borderRadius: 50,
  },
});
