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
import questions from "../../assets/questions/perguntas.json";
import axios from "axios";
import normalize from "../../assets/normalizeFont";
import ProgressBarComponent from "./components/ProgressBar";
import Question from "./components/Question";
import FinishAlert from "./components/FinishTimeModal";
import ButtonQuestion from "./components/button";
import TimerTest from "./components/setInterval";
const URL_SERVER = process.env.BACKEND_URL;




function sortearQuestoes() {
  const questionsSelected = [];
  const questionsSorted = [[], [], []];
  for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
      let randomNumberQuestion = Math.floor(Math.random() * questions[i].length);
      while (questionsSorted[i].includes(randomNumberQuestion)) {
        randomNumberQuestion = Math.floor(Math.random() * questions.length);
      }
      questionsSorted[i].push(randomNumberQuestion);
      questionsSelected.push(questions[i][randomNumberQuestion]);
    }
  }
  return questionsSelected;
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export default function QuestionPage({ navigation, route }) {
  const { cpf, email, name, tel, estande } = {
    //VARIAVEIS VINDA DA ROTA ANTERIOR (HOME)
    cpf: route.params.getcpf,
    email: route.params.getemail,
    name: route.params.getname,
    tel: route.params.gettel,
    estande: route.params.estande,
  };
  const [fontsLoaded] = useFonts({
    InriaSans700: require("../../assets/fonts/Inria_Sans_Bold_700.ttf"),
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  const [respostas, setRespostas] = useState([
    //ARRAY ONDE FICARÁ TODAS AS RESPOSTAS DO USUÁRIO
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
  const [numberQuestion, setNumberQuestion] = useState(1); //Numero da questão atual do usuário
  const [tempo, setTempo] = useState(90); //Tempo que falta para o usuário terminar as questões
  const [Timer, setTimer] = useState(null); //Variável para guardar o interval do ceap
  const positionQuestions = useRef(new Animated.Value(0)).current;
  const [questionDivWidth, setQuestionWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [timeFinished, setTimeFinished] = useState(false);

  function startTimer(setTempo) {
    //Função que inicia o timer das questões
    let centesimoDeSegundo = 0;
    const Timer = new TimerTest();
    const myInterval = Timer.setInterval(() => {
      centesimoDeSegundo++;
      setTempo(90 - Math.floor(centesimoDeSegundo / 10));
    }, 100);
    return Timer;
  }
  function nextQuestion() {
    if (respostas[numberQuestion - 1] === null) {
      Alert.alert(
        "Confirmação",
        "Você tem certeza que deseja prosseguir com a questão em branco? Esteja ciente que não poderá retornar depois, portanto sua resposta ficará como nula.",
        [
          {
            text: "Cancelar",
            onPress: () => {
              console.log("Cancelled");
            },
          },
          {
            text: "Sim, tenho certeza.",
            onPress: () => {
              setNumberQuestion(numberQuestion + 1);
              Animated.timing(positionQuestions, {
                toValue: -(
                  questionDivWidth * numberQuestion +
                  24 * numberQuestion
                ),
                duration: 300,
                useNativeDriver: false,
              }).start();
            },
          },
        ]
      );
    } else {
      setNumberQuestion(numberQuestion + 1);
      Animated.timing(positionQuestions, {
        toValue: -(questionDivWidth * numberQuestion + 24 * numberQuestion),
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }
  async function endQuiz() {
    //Função que encerra o quiz
    let points = 0;
    for (let index in questionsSelected) {
      if (questionsSelected[index].alternativaCorreta === respostas[index]) {
        points++;
      }
    }
    Timer.clearInterval();
    setTimeFinished(false);
    try {
      const response = await axios.post(`${URL_SERVER}/users`, {
        name,
        email,
        cpf,
        tel,
        estande,
        time: 90 - tempo,
        pontos: points,
      });
      if (
        response.status === 200 &&
        response.data === "Dados cadastrados com sucesso"
      ) {
        navigation.navigate("Finish", {
          points,
          name,
        });
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocorreu um erro no seu cadastro no banco de dados, verifique seus dados e jogue novamente: " +
          error.response.data +
          error.response,
        [
          {
            text: "Retornar ao menu principal",
            onPress: () => navigation.popToTop(),
          },
        ]
      );
    }
  }

  useEffect(() => {
    //Executado a primeira vez que o componente é renderizado
    setQuestionsSelected(sortearQuestoes());
    setTimer(startTimer(setTempo));
  }, []);
  useEffect(() => {
    //Executa toda vez que a variável tempo é atualizada
    if (tempo <= 0) {
      Timer.clearInterval();
      setTimeFinished(true);
    }
  }, [tempo]);

  if (!fontsLoaded || questionsSelected.length === 0) {
    //Espera o carregamento das fontes e das questões
    return null;
  }
  return (
    <View style={styles.container}>
      <FinishAlert visible={timeFinished} endQuiz={endQuiz} />
      <ProgressBarComponent tempo={tempo} />
      <Animated.View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          marginLeft: "12.5%",
          marginRight: "12.5%",
          marginTop: "5%",
          height: "75%",
          transform: [{ translateX: positionQuestions }],
        }}
        /*onTouchStart={(e) => {
          setTouchStart(e.nativeEvent.locationX);
        }}
        onTouchEnd={(e) => {
          if (touchStart - e.nativeEvent.locationX > 50) {
            nextQuestion();
          }
        }}*/
      >
        {questionsSelected.map((question, index) => {
          return (
            <Question
              questaoAtual={question}
              numeroQuestaoAtual={index}
              respostasObject={{ respostas, setRespostas }}
              key={index}
              questionLayout={(e) => {
                setQuestionWidth(e.nativeEvent.layout.width);
              }}
            />
          );
        })}
      </Animated.View>
      {numberQuestion >= questionsSelected.length ? (
        <ButtonQuestion
          onPress={() => {
            endQuiz();
          }}
          text={"FINALIZAR"}
        />
      ) : (
        <ButtonQuestion onPress={nextQuestion} text={"PRÓXIMA"} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});
