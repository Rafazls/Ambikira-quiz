import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../../assets/home_assets/logo.png";
import seta from "../../assets/seta.png";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";
import { handleCPF, handleTelefone } from "./src/masks";
import { useFonts } from "expo-font";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import voltarImg from '../../assets/de-volta.png'
import normalize from "../../assets/normalizeFont";
import Svg, { G, Circle, Defs, Path, Ellipse } from "react-native-svg";
import { SelectList } from 'react-native-dropdown-select-list'
import { Picker } from "@react-native-picker/picker";
import SelectDropdown from "react-native-select-dropdown";
const URL_SERVER = process.env.BACKEND_URL
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
  const estandes = ["Absolute - Fabiano Rios", "Credit Suisse - Augusto Martins", "Dahlia - Felipe Hirai", "Genoa - Rodrigo Noel", "Ibiuna - Rodrigo Azevedo", "JGP - André Jakurski", "Jive - Alexandre Cruz", "Legacy", "Neo - Marcelo Cabral", "RBR - Ricardo Almendra", "RPS - Paolo Di Sora", "SPX - Rogério Xavier", "Truxt - Bruno Garcia", "Verde - Luis Stuhlberger", "Vinland - André Laport"]
  const [getname, name] = useState("");
  const [getemail, email] = useState("");
  const [getcpf, cpf] = useState("");
  const [gettel, tel] = useState("");
  const [parsedTel, setParsedTel] = useState("");
  const [parsedCPF, setParsedCPF] = useState("");
  const [loading, setLoading] = useState(false)
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [estande, setEstande] = useState("")
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
      <Svg
        viewBox="0 0 420 272"
        xmlns="http://www.w3.org/2000/svg" fill="none"
        style={{
          width: "55%",
          left: 0,
          height: undefined,
          aspectRatio: 1.65,
          position: "absolute",
        }}>
        <G filter="url(#a)">
          <Circle
            cx={134.634}
            cy={134.634}
            r={134.634}
            fill="#F85D17"
            transform="matrix(-.73546 -.67756 .65262 -.75768 68.037 245.161)"
          />
          <Circle
            cx={157.664}
            cy={157.664}
            r={155.664}
            stroke="#000"
            strokeWidth={4}
            transform="matrix(.93737 -.34834 .37945 .92521 -22.976 -98.158)"
          />
        </G>
        <Defs></Defs>
      </Svg>
      <Image source={logo} style={{ width: "30%", aspectRatio: 2.35632, height: undefined, alignSelf: 'flex-end', top: '4%', right: '4%' }} resizeMode="contain" />

      <Svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 1"
        fill="none"
        style={{
          width: "25%",
          right: 0,
          bottom: 0,
          height: undefined,
          aspectRatio: 0.609929078,
          position: "absolute",
        }}>
        <Ellipse
          cx={165}
          cy={163.382}
          fill="#F9AC01"
          rx={164.284}
          ry={162.825}
          transform="rotate(152.421 165 163.382)"
        />
        <G filter="url(#a)">
          <Path
            stroke="#000"
            strokeWidth={4}
            d="M112.21 309.69c-48.36-92.586-14.836-205.504 74.695-252.268 89.531-46.763 201.358-9.764 249.717 82.822 48.36 92.586 14.837 205.504-74.694 252.268-89.531 46.764-201.358 9.765-249.718-82.822Z"
            shapeRendering="crispEdges"
          />
        </G>
        <Defs></Defs>
      </Svg>

      {/* Formulário */}
      <View
        style={{
          justifyContent: "space-between",
          marginTop: "5%",
          alignItems: 'center',
          flex: 1

        }}
      >

        <Text style={{ fontFamily: 'MontserratMedium', fontSize: normalize(28), color: 'black', marginTop: "15%", fontWeight: 'bold', marginVertical: '3%', textAlign: 'center' }}>
          Os dados a seguir são solicitados a fim de que possamos{"\n"}identificar a sua pontuação no ranking e {'\n'}fazer contato com os(as) vencedores(as).
        </Text>
        {/* Nome */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/user.png")}
            style={{ aspectRatio: 1.0222, width: "5%", height: undefined }}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            label="Nome"
            placeholder="Nome e sobrenome"
            placeholderTextColor={'#000'}
            value={getname}
            onChangeText={name}
          />
        </View>

        {/* Email */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/Email.png")}
            style={{ aspectRatio: 1.3214, width: "4.4%", height: undefined }}
            resizeMode="contain"
          />

          <TextInput
            label="Email"
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#000'}
            value={getemail}
            onChangeText={email}
          />
        </View>

        {/* CPF */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/cpf.png")}
            style={{ aspectRatio: 1, width: "5.2%", height: undefined }}
            resizeMode="contain"
          />
          <TextInput
            label="CPF"
            style={styles.input}
            keyboardType="number-pad"
            placeholder="CPF"
            placeholderTextColor={'#000'}
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
            style={{ aspectRatio: 0.9782, width: "5.2%", height: undefined }}
            resizeMode="contain"
          />
          <TextInput
            label="Telefone"
            style={styles.input}
            placeholder="Telefone com DDD"
            placeholderTextColor={'#000'}
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

        {/* Estantes */}
        <View style={styles.forms}>
          <Image
            source={require("../../assets/home_assets/estante.png")}
            style={{ aspectRatio: 0.9782, width: "5.2%", height: undefined, marginRight:16, marginLeft:12 }}
            resizeMode="contain"
          />
          <SelectDropdown
            data={estandes}
            buttonStyle={[styles.input, {alignItems:'center', justifyContent:'flex-start'}]}
            buttonTextStyle={{fontSize:normalize(26), width:"5%",  textAlign:'left'}}
            defaultButtonText="Estande"
            renderDropdownIcon={
              () => {
                return(
                  <Svg xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 27"
                  style={{aspectRatio: 1.1851, height: undefined, width: normalize(32)}}
                  >
                  <Path
                    fill="#F3F4FF"
                    stroke="#F9AC01"
                    strokeWidth={3}
                    d="M13.556 24.327 1.845 5.038C1.035 3.705 1.995 2 3.555 2h24.689c1.601 0 2.553 1.788 1.66 3.116l-12.979 19.29a2 2 0 0 1-3.369-.08Z"
                  />
                </Svg>
                )
              }
            }
            dropdownIconPosition="right"
            onSelect={(selectedItem, index) => {
              setEstande(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />


        </View>

        {/* Termos de uso */}
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck1(checked)}
          />



          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TermsAndConditions");
            }}
          ><Text style={{ fontWeight: 'bold', fontFamily: 'MontserratMedium', fontSize: normalize(24) }}>Eu li e aceito os {<Text style={{color: "#F85D17"}}>termos de uso</Text>} e a política de privacidade referente ao uso de dados.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkBoxView}>
          <BouncyCheckbox
            fillColor="#F85D17"
            innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
            iconStyle={{ borderRadius: 4 }}
            style={{ alignSelf: "flex-start" }}
            onPress={(checked) => setCheck2(checked)}
          />



          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LGPD");
            }}
          ><Text style={{ fontWeight: 'bold', fontFamily: 'MontserratMedium', fontSize: normalize(24) }}>Eu li e aceito os termo com relação à LGPD (Lei Geral de Proteção de dados) {<Text style={{color: "#F85D17"}}>Acessar LGPD</Text>}, nele está contido a finalidade do seus dados.</Text>
          </TouchableOpacity>
        </View>


        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Introduction");
            }}
            style={{
              flexDirection: 'row',
              width: "25%",
              height: "35%",
              justifyContent: 'space-around',
              alignItems: "center",
              borderRadius: 500,
              backgroundColor: "#FFF",
              paddingHorizontal: 12,
              borderColor: "black",
              borderWidth: 2
            }}
          >
            <Text style={{ fontFamily: "InriaSans700", fontSize: normalize(32) }}>VOLTAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {

              if (!check1 && !check2) {
                Alert.alert(
                  "Aviso",
                  "Você precisa aceitar os termos de Uso para jogar!"
                );
                return;
              }

              if (
                getcpf == "" ||
                getemail == "" ||
                getname == "" ||
                gettel == "" ||
                estande == ""
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
              console.log(URL_SERVER)
              setLoading(true)
              axios
                .post(`${URL_SERVER}/verify`, {
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
                      estande

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
              COMEÇAR
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgb(255, 255, 255)" }}>
      <ActivityIndicator size={"large"} color={"#000000"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "25%",
    height: "35%",
    left: "18%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    backgroundColor: "#F85D17",
  },
  input: {
    width: "60%",
    marginLeft: 16,
    borderWidth: 2,
    borderColor: "#F9AC01",
    borderRadius: 500,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(16),
    justifyContent:'space-between'

  },
  icons: {
    padding: "4%",
    margin: "3%",
    height: "4%",
    width: "4%",
    resizeMode: "stretch",
    alignItems: "center",
  },
  forms: {
    flexDirection: "row",
    alignItems: 'center'
  },
  checkBoxView: {
    flexDirection: "row",
    marginTop: 15,
    width: "65%"
  }
});
