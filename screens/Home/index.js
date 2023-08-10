import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import vect1 from "../../assets/home_assets/grup1.png";
import vect2 from "../../assets/home_assets/grup2.png";
import logo from "../../assets/home_assets/logo.png";
import { TextInput } from "@react-native-material/core";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";
import { handleCPF, handleTelefone } from "./src/masks";
import { useFonts } from "expo-font";
import voltarImg from '../../assets/de-volta.png'
import normalize from "../../assets/normalizeFont";

function verifiyCPF(getcpf) {
  const num = getcpf;
  cpf.format(num);
  return cpf.isValid(num);
}
function verifyEmail(email) {
  const isValidEmail = email.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  return isValidEmail;
}

export default function Home({ navigation, route }) {
  const [getname, name] = useState("");
  const [getemail, email] = useState("");
  const [getcpf, cpf] = useState("");
  const [gettel, tel] = useState("");
  const [parsedTel, setParsedTel] = useState("");
  const [parsedCPF, setParsedCPF] = useState("");
  const [ loading, setLoading ] = useState(false)
  const InvalidCPFAlert = () =>
    Alert.alert("CPF Inválido!", "Digite novamente!", [
      { text: "OK", onPress: () => console.log("") },
    ]);
  const InvalidUserAlert = () =>
    Alert.alert("Usuário já cadastrado", "Digite novamente!", [
      { text: "OK", onPress: () => console.log("") },
    ]);
  const InvalidEmailAlert = () =>
    Alert.alert("Email Inválido!", "Digite novamente!", [
      { text: "OK", onPress: () => console.log("") },
    ]);
  const Nullcamps = () =>
    Alert.alert("Campo Vazio", "Digite novamente!", [
      { text: "OK", onPress: () => console.log("") },
    ]);
  const [fontsLoaded] = useFonts({
    InriaSans700: require("../../assets/fonts/Inria_Sans_Bold_700.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return !loading ? (
    /* Container */
    <View style={styles.container}>
      {/* Vetores e logo */}
      <Image
        source={vect1}
        style={{
          width: "50%",
          left: 0,
          height: undefined,
          aspectRatio: 1.65,
          position: "absolute",
        }}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Introduction");
        }}
        style={styles.out}
      >
        <Image source={voltarImg} style={{height: undefined, width: "15%", aspectRatio: 1}} resizeMode="contain"/>
      </TouchableOpacity>
      <Image
        source={vect2}
        style={{
          width: "31%",
          right: 0,
          bottom: 0,
          height: undefined,
          aspectRatio: 0.609929078,
          position: "absolute",
        }}
        resizeMode="contain"
      />
      <Image
        source={logo}
        style={{
          width: "50%",
          left: "25%",
          height: undefined,
          aspectRatio: 2.35555555,
          marginTop: "20%",
        }}
        resizeMode="contain"
      />
      {/* Formulário */}
      <View
        style={{
          left: "10%",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        {/* Nome */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/user.png")}
            style={styles.icons}
          />
          <TextInput
            style={styles.input}
            label="Nome"
            variant="standard"
            value={getname}
            onChangeText={name}
          />
        </View>

        {/* Email */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/mail.png")}
            style={styles.icons}
          />
          <TextInput
            label="Email"
            style={styles.input}
            variant="standard"
            value={getemail}
            onChangeText={email}
          />
        </View>

        {/* CPF */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/cpf.png")}
            style={styles.icons}
          />
          <TextInput
            label="CPF"
            style={styles.input}
            keyboardType="number-pad"
            variant="standard"
            value={parsedCPF}
            onChangeText={(e) => {
              const parsed = handleCPF(e);
              setParsedCPF(parsed);
              cpf(e.replace(/(\D)/g, ""));
              console.log(getcpf, parsed);
            }}
            maxLength={14}
          />
        </View>

        {/* Telefone */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/call.png")}
            style={styles.icons}
          />
          <TextInput
            label="Telefone"
            style={styles.input}
            variant="standard"
            value={parsedTel}
            onChangeText={(e) => {
              const parsed = handleTelefone(e);
              setParsedTel(parsed);
              tel(e.replace(/(\D)/g, ""));
              console.log(gettel, parsed);
            }}
            keyboardType="number-pad"
            maxLength={14}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {

            if (
              getcpf == "" ||
              getemail == "" ||
              getname == "" ||
              gettel == ""
            ) {
              console.log("Campo vazio!");
              Nullcamps();
              return;
            }
            if (verifiyCPF(getcpf) == false) {
              console.log("CPF inválido");
              InvalidCPFAlert();
              return;
            }
            if (verifyEmail(getemail) == null) {
              console.log("Email invalido");
              InvalidEmailAlert();
              return;
            }
            setLoading(true)
            axios
              .post("https://backend-ambikira.fly.dev/verify", {
                cpf: getcpf,
              })
              .then((response) => {
                setLoading(false);
                if (response.status === 200 && response.data === "Usuário qualificado para jogar") {
                  navigation.navigate("Questions", {
                    getname,
                    getemail,
                    getcpf,
                    gettel,
                  });
                }
              })
              .catch((reject) => {
                const { response } = reject;
                setLoading(false);
                if (
                  response.data === "Usuário já cadastrado" &&
                  response.status === 400
                ) {
                  console.log("Usuário já cadastrado");
                  InvalidUserAlert();
                }
              });
          }}
        >
          <Text
            style={{ fontFamily: "InriaSans700", color: "#FFF", fontSize: normalize(32) }}
          >
            COMEÇAR O JOGO
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgb(255, 255, 255)"}}>
      <ActivityIndicator size={"large"} color={"#000000"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "50%",
    height: "12%",
    left: "18%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#F0B528",
  },
  input: {
    width: "60%",
  },
  icons: {
    padding: "5%",
    margin: "3%",
    height: "5%",
    width: "5%",
    resizeMode: "stretch",
    alignItems: "center",
  },
  forms: {
    flexDirection: "row",
  },
  out: {
    width: "40%",
    height: "6%",
    left: "65%",
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
