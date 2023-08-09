import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import logoOnApp from "../../assets/logoApp.png";
import Question from "./components/Question";
import { useFonts } from "expo-font";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackgroundTwo from "../../assets/circles-question-page-2.png";
import questions from "../../assets/questions/perguntas.json";
import axios from "axios";

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
  const { cpf, email, name, tel } = {
    cpf: route.params.getcpf,
    email: route.params.getemail,
    name: route.params.getname,
    tel: route.params.gettel,
  };
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
  async function endQuiz(interval) {
    let points = 0;
    for (let index in questionsSelected) {
      if (questionsSelected[index].alternativaCorreta === respostas[index]) {
        points++;
      }
    }
    clearInterval(interval);
    const response = await axios.post("http://192.168.10.108:3333/users", {
      name,
      email,
      cpf,
      tel,
      time: 120 - tempo,
      pontos: points,
    });
    if (
      response.status === 200 &&
      response.data === "Dados cadastrados com sucesso"
    ) {
      navigation.navigate("Finish");
    }
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
        <Animated.Text
          style={
            tempo < 30
              ? [styles.textTime, { color: "red" }]
              : [styles.textTime, { color: "black" }]
          }
        >
          {Math.floor(tempo / 60)}:
          {tempo % 60 < 10 ? "0" + (tempo % 60) : tempo % 60}
        </Animated.Text>
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
    fontFamily: "Jomhuria",
    fontSize: 56,
  },
  nextQuestionButton: {
    backgroundColor: "#F0B528",
    padding: 16,
    borderRadius: 50,
  },
});
