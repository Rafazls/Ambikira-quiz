import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import vect1 from '../../assets/home_assets/grup1.png'
import vect2 from '../../assets/home_assets/grup2.png'
import logo from '../../assets/home_assets/logo.png'
import { TextInput } from "@react-native-material/core";
import { cpf } from "cpf-cnpj-validator";
// import {IP_LOCALHOST} from "@env"

function verifiyCPF(getcpf){
 const num = getcpf
 console.log(cpf.isValid(num))
}

const getusersforverify = async () => {
  const request = new Request("http://192.168.15.4:3333/users", {
    method  : 'POST',  
    //Teste 
    body: JSON.stringify({
      id:4 ,
      name: "Neymar",
      email: "sd@gmail.com",
      cpf: "12345678915",
      tel: "11982277878",
      time: 10,
      pontos: 5
    }),
});
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
};

export default function Home({ navigation, route }) {

  const [getname, name] = useState("") //Armazenando os valores
  const [getemail, email] = useState("") //Armazenando os valores
  const [getcpf,cpf] = useState("") //Armazenando os valores
  const [gettel, tel] = useState("") //Armazenando os valores


  return (
    /* Container */
    <View style={styles.container}>
      {/* Vetores e logo */}
      <View>
        <Image
          source={vect1}
          style={{
            width: '50%',
            left: 0,
            height: undefined,
            aspectRatio: 1.65,
            position: "absolute",

          }}
          resizeMode="contain"
        />
        <Image
          source={logo}
          style={{
            width: '50%',
            left: '25%',
            height: undefined,
            aspectRatio: 0.7,
            position: "absolute",

          }}
          resizeMode="contain"
        />
        <Image
          source={vect2}
          style={{
            width: '31%',
            right: 0,
            height: undefined,
            aspectRatio: 0.1,
            position: "absolute",

          }}
          resizeMode="contain"
        />
      </View>

      {/* Formulário */}

      <View style={{
        left:'10%',
        justifyContent: "space-between",
        top: '30%',

      }}>

        {/* Nome */}
        <View style={styles.forms}>
          <Image source={require('../../assets/home_assets/user.png')} style={styles.icons} />
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
        <Image source={require('../../assets/home_assets/mail.png')} style={styles.icons} />
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
        <Image source={require('../../assets/home_assets/cpf.png')} style={styles.icons} />
          <TextInput
            label="CPF"
            style={styles.input}
            keyboardType="number-pad"
            variant="standard"
            value={getcpf} 
            onChangeText={cpf}
          />

        </View>


        {/* Telefone */}
        <View style={styles.forms}>
        <Image source={require('../../assets/home_assets/call.png')} style={styles.icons} />
          <TextInput
            label="Telefone"
            style={styles.input}
            variant="standard"
            value={gettel} 
            onChangeText={tel}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            
           verifiyCPF(getcpf);
            navigation.navigate("Questions");
           getusersforverify();
          }}>
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
    width: '50%',
    height: '18%',
    left:'18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#F0B528'
  },
  input: {
    width: '60%',
  },
  icons: {
    padding: '5%',
    margin: '3%',
    height: '5%',
    width: '5%',
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  forms: {
    flexDirection: "row",
  }
});