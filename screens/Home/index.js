import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import vect1 from '../../assets/grup1.png'
import vect2 from '../../assets/grup2.png'
import logo from '../../assets/logo.png'
import { TextInput } from "@react-native-material/core";



export default function Home({ navigation, route }) {
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
          <Image source={require('../../assets/user.png')} style={styles.icons} />
          <TextInput
            style={styles.input}
            label="Nome"
            variant="standard"
          />
        </View>

        {/* Email */}
        <View style={styles.forms}>
        <Image source={require('../../assets/mail.png')} style={styles.icons} />
          <TextInput
            label="Email"
            style={styles.input}
            variant="standard"
          />
        </View>

        {/* CPF */}
        <View style={styles.forms}>
        <Image source={require('../../assets/cpf.png')} style={styles.icons} />
          <TextInput
            label="CPF"
            style={styles.input}
            keyboardType="number-pad"
            variant="standard"
          />

        </View>


        {/* Telefone */}
        <View style={styles.forms}>
        <Image source={require('../../assets/call.png')} style={styles.icons} />
          <TextInput
            label="Telefone"
            style={styles.input}
            variant="standard"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Questions");
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