import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import logoOnApp from "../../assets/logoApp.png";
import Question from "./components/Question";
import { useFonts } from "expo-font";
import circleBackground from "../../assets/circles-question-page-1.png";
import circleBackgroundTwo from "../../assets/circles-question-page-2.png";
import questions from "../../assets/questions/perguntas.json";
import axios from "axios";
import normalize from "../../assets/normalizeFont";

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
  const { cpf, email, name, tel } = { //VARIAVEIS VINDA DA ROTA ANTERIOR (HOME)
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
  const [respostas, setRespostas] = useState([ //ARRAY ONDE FICARÁ TODAS AS RESPOSTAS DO USUÁRIO
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
  const [questionsSelected, setQuestionsSelected] = useState([]); //Questões selecionadas aleatoriamente
  const [numberQuestion, setNumberQuestion] = useState(0); //Numero da questão atual do usuário
  const [tempo, setTempo] = useState(120); //Tempo que falta para o usuário terminar as questões
  const [interval, setIntervalo] = useState(null); //Variável para guardar o interval do ceap
  function startTimer(setTempo) { //Função que inicia o timer das questões
    let segundos = 0;
    const myInterval = setInterval(() => {
      segundos++;
      setTempo(120 - segundos);
    }, 1000);
    return myInterval;
  }
  async function endQuiz(interval) { //Função que encerra o quiz
    let points = 0;
    for (let index in questionsSelected) {
      if (questionsSelected[index].alternativaCorreta === respostas[index]) {
        points++;
      }
    }
    clearInterval(interval); 
    try {
      const response = await axios.post("https://backend-ambikira.fly.dev/users", {
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
        navigation.navigate("Finish", {
          points
        });
      }
    } catch (error) {
      Alert.alert("Error", "Ocorreu um erro no seu cadastro no banco de dados, verifique seus dados e jogue novamente: " + error.response.data + error.response, [
        { text: 'Retornar ao menu principal', onPress: () => navigation.popToTop() },
      ])
    }
  }

  useEffect(() => { //Executado a primeira vez que o componente é renderizado
    setQuestionsSelected(sortearQuestoes());
    setIntervalo(startTimer(setTempo));
  }, []);
  useEffect(() => { //Executa toda vez que a variável tempo é atualizada
    console.log(tempo)
    if (tempo <= 0) {
      endQuiz(interval);
      Alert.alert("Tempo esgotado!", "Seu tempo acabou. Mas não se preocupe, todo seu progresso até agora será salvo. Sua pontuação será liberada logo em seguida!")
    }
  }, [tempo])

  if (!fontsLoaded || questionsSelected.length === 0) { //Espera o carregamento das fontes e das questões
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
                fontSize: normalize(32),
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
              if (respostas[numberQuestion] === null){
                Alert.alert("Confirmação", "Você tem certeza que deseja prosseguir com a questão em branco? Esteja ciente que não poderá retornar depois, portanto sua resposta ficará como nula.", [{ text: 'Cancelar', onPress: () => { console.log("Cancelled")}}, { text: "Sim, tenho certeza.", onPress: () => {
                  setNumberQuestion( numberQuestion + 1);
                }}])
                return;
              }
              else {
                setNumberQuestion( numberQuestion + 1)
              }
              
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans700",
                fontSize: normalize(32),
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
    fontSize: normalize(80),
  },
  nextQuestionButton: {
    backgroundColor: "#F0B528",
    padding: 16,
    borderRadius: 50,
  },
});
