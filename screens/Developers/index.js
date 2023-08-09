import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Background  from '../../assets/Fundo.png'
import Background2  from '../../assets/Fundo2.png'
import AmbikiraLogo  from '../../assets/AmbikiraLogo.png'
import CeapLogo  from '../../assets/CeapLogo.png'
import React from "react";
import { useFonts } from "expo-font";

export default function Developers({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
  });
  if (!fontsLoaded) return;

  return (

    <View style={styles.container}>

      <Image
        source={Background}
        style={{
          width: "50%",
          left: -3,
          top:0,
          height: undefined,
          aspectRatio: 1.35,
          position: "absolute",
        }}
        resizeMode="contain"
      />

      <Image
        source={Background2}
        style={{
          width: "50%",
          right:-3,
          bottom:0,
          height: undefined,
          aspectRatio: 1.10,
          position: "absolute",
        }}
        resizeMode="contain"
      />

      <Image
        source={AmbikiraLogo}
        style={{
          width: "38%",
          right:15,
          top:40,
          height: undefined,
          aspectRatio: 1.10,
          position: "absolute",
        }}
        resizeMode="contain"
      />    
    

      <View style={styles.textblock}>
        <Text style={styles.title}>Esse aplicativo foi desenvolvido por:</Text>
        <Text></Text>
        <View style={styles.devNames}>

          <View>
            <Text style={styles.devText}>Daniel Vigano</Text>
            <Text style={styles.devText}>Felipe fernandes</Text>
            <Text style={styles.devText}>Gabriel Scarpelin</Text>
            <Text style={styles.devText}>Pedro Henrique</Text>
            <Text style={styles.devText}>Rafael Kaue</Text>
            <Text style={styles.devText}>Vitor Vilela</Text>
          </View>

          <View>
            <Text style={styles.devText}>Eduardo Porto Bispo</Text>
            <Text style={styles.devText}>Gabriel Galdino</Text>
            <Text style={styles.devText}>João Pedro</Text>
            <Text style={styles.devText}>Rafael Souza</Text>
            <Text style={styles.devText}>Thiago Evangalista</Text>
            <Text style={styles.devText}>William Ramos</Text>
          </View>

          <Image
        source={CeapLogo}
        style={{
          width: "35%",
          bottom:-90,
          right:100,
          height: undefined,
          aspectRatio: 1.30,
          position: "absolute",
        }}
        resizeMode="contain"
      />  
        </View>
      </View>

      <TouchableOpacity style={styles.botton}
      onPress={()=> {
        navigation.goBack();
      }}>
        <Text style={styles.bottonText}>VOLTAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textblock:{
    width: 350,
    height: 510,
    backgroundColor: '#FF3131',
    borderRadius: 25,
    padding:15,
    paddingTop:15,
    marginTop:45,
    marginBottom:30,

  },
  
  devNames:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  title:{
    fontSize:28,
    color: '#FFEDC2', 
    textAlign:"center",
    fontFamily:"Anton",
  },

  devText:{
    fontSize:16,
    margin:10,
    color:'#FFFFFF',
    fontFamily:"Battambang"
  },

  botton:{
    backgroundColor:'#F0B528',
    borderRadius: 50,
    height:80,
    width:250,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
    
  },
  bottonText:{
    fontSize:25,
    color: '#FFFFFF'
  },
});