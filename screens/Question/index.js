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
import { LinearGradient } from "expo-linear-gradient";
import ProgressBarComponent from "./components/ProgressBar";
import Question from "./components/Question";
import FinishAlert from "./components/FinishTimeModal";
import ButtonQuestion from "./components/button";
import backgroundImg from '../../assets/questions_assets/background.png'

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
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export default function QuestionPage({ navigation, route }) {
  const steps = 12;
  /*const { cpf, email, name, tel } = { //VARIAVEIS VINDA DA ROTA ANTERIOR (HOME)
    cpf: route.params.getcpf,
    email: route.params.getemail,
    name: route.params.getname,
    tel: route.params.gettel,
  };*/
  const [fontsLoaded] = useFonts({
    Imprima: require("../../assets/fonts/Imprima_400.ttf"),
    PassionOne700: require("../../assets/fonts/Passion_One_Bold_700.ttf"),
    InriaSans700: require("../../assets/fonts/Inria_Sans_Bold_700.ttf"),
    Jomhuria: require("../../assets/fonts/Jomhuria.ttf"),
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
  const [tempo, setTempo] = useState(120); //Tempo que falta para o usuário terminar as questões
  const [interval, setIntervalo] = useState(null); //Variável para guardar o interval do ceap
  const positionQuestions = useRef(new Animated.Value(0)).current;
  const [questionDivWidth, setQuestionWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(null)

  function startTimer(setTempo) {
    //Função que inicia o timer das questões
    let segundos = 0;
    const myInterval = setInterval(() => {
      segundos++;
      setTempo(120 - segundos);
    }, 1000);
    return myInterval;
  }
  function nextQuestion() {
    if (respostas[numberQuestion] === null){
      Alert.alert("Confirmação", "Você tem certeza que deseja prosseguir com a questão em branco? Esteja ciente que não poderá retornar depois, portanto sua resposta ficará como nula.", [{ text: 'Cancelar', onPress: () => { console.log("Cancelled")}}, { text: "Sim, tenho certeza.", onPress: () => {
        setNumberQuestion( numberQuestion + 1);
        Animated.timing(positionQuestions, {
          toValue: -(
            questionDivWidth * numberQuestion +
            24 * numberQuestion
          ),
          duration: 300,
          useNativeDriver: true,
        }).start();
      }}])
    }
    else{
      setNumberQuestion(numberQuestion + 1);
      Animated.timing(positionQuestions, {
        toValue: -(
          questionDivWidth * numberQuestion +
          24 * numberQuestion
        ),
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }
  async function endQuiz(interval) {
    //Função que encerra o quiz
    let points = 0;
    for (let index in questionsSelected) {
      if (questionsSelected[index].alternativaCorreta === respostas[index]) {
        points++;
      }
    }
    
    clearInterval(interval);
    /*
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
    */
  }

  useEffect(() => {
    //Executado a primeira vez que o componente é renderizado
    setQuestionsSelected(sortearQuestoes());
    //setIntervalo(startTimer(setTempo));
  }, []);
  useEffect(() => {
    //Executa toda vez que a variável tempo é atualizada
    /*const timeTracked = 120 - tempo
    setStep(Math.floor(timeTracked/steps))
    if (tempo <= 0) {
      endQuiz(interval);
      Alert.alert("Tempo esgotado!", "Seu tempo acabou. Mas não se preocupe, todo seu progresso até agora será salvo. Sua pontuação será liberada logo em seguida!")
    }*/
  }, [tempo]);

  if (!fontsLoaded || questionsSelected.length === 0) {
    //Espera o carregamento das fontes e das questões
    return null;
  }
  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={{position: 'absolute', zIndex: -100, width: "100%", height: undefined, aspectRatio: SCREEN_WIDTH / SCREEN_HEIGHT, minHeight: "100%" }} resizeMode="cover" />
      <FinishAlert visible={false} endQuiz={endQuiz}/>
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
        onTouchStart={( e ) => {
          setTouchStart(e.nativeEvent.locationX)
        }}
        onTouchEnd={(e) => {
          if (touchStart - e.nativeEvent.locationX > 50) {
            nextQuestion()
          }
        }}
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
      {numberQuestion === 10 ? (<ButtonQuestion onPress={endQuiz} text={"FINALIZAR"}/>) : (<ButtonQuestion onPress={nextQuestion} text={"PRÓXIMA"} />)
      }
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
