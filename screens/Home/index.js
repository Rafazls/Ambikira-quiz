import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import vect1 from "../../assets/home_assets/grup1.png";
import vect2 from "../../assets/home_assets/grup2.png";
import logo from "../../assets/home_assets/logo.png";
import { TextInput } from "@react-native-material/core";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";
import { handleCPF, handleTelefone } from "./src/masks";
function verifiyCPF(getcpf) {
  const num = getcpf;
  cpf.format(num)
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

  const InvalidCPFAlert = () =>
    Alert.alert('CPF Inválido!', 'Digite novamente!', [
      { text: 'OK', onPress: () => console.log('') },
    ]);
  const InvalidUserAlert = () =>
    Alert.alert('Usuário já cadastrado', 'Digite novamente!', [
      { text: 'OK', onPress: () => console.log('') },
    ]);
  const InvalidEmailAlert = () =>
    Alert.alert('Email Inválido!', 'Digite novamente!', [
      { text: 'OK', onPress: () => console.log('') },
    ]);
  const Nullcamps = () =>
    Alert.alert('Campo Vazio', 'Digite novamente!', [
      { text: 'OK', onPress: () => console.log('') },
    ]);

  let cont = 0;
  return (
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
        <Text style={{color:'#FFF'}}>
          Voltar
        </Text>
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
          onPress={async () => {
            const response = await axios.post(
              "http://192.168.15.4:3333/verify",
              {
                cpf: getcpf,
              }
            );
            console.log(response);
            do {
              if (
                response.data === "Usuário já cadastrado" &&
                response.status === 400
              ) {
                console.log("Usuário já cadastrado")
                InvalidUserAlert();
              }
              if (getcpf == '' ||
                getemail == '' ||
                getname == '' ||
                gettel == ''
              ) {
                console.log("Campo vazio!");
                Nullcamps();
              }
              if (verifiyCPF(getcpf) == false) {
                console.log('CPF inválido');
                InvalidCPFAlert();
              }
              if (verifyEmail(getemail) == null) {
                console.log('Email invalido');
                InvalidEmailAlert();
              }
              cont +=1;
            } while (cont != 1);

            navigation.navigate("Questions", {
             getname,
             getemail,
             getcpf,
             gettel,
            });
          
          }}
        >
          <Text>COMEÇAR O JOGO</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "50%",
    height: "18%",
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
  out:{
    width: "30%",
    height: "6%",
    left:'65%',
    top:'8%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "#E21C16",
    
  }
});
