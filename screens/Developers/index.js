import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Background  from '../../assets/Fundo.png'
import Background2  from '../../assets/Fundo2.png'
import AmbikiraLogo  from '../../assets/AmbikiraLogo.png'
import CeapLogo  from '../../assets/CeapLogo.png'
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";


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
          width: "30%",
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
          width: "25%",
          right:-3,
          bottom:0,
          height: undefined,
          aspectRatio: 1.10,
          position: "absolute",
        }}
        resizeMode="contain"
      />
      <View style={{width: "100%", alignItems: 'flex-end', marginTop: "10%"}}>
        <Image
          source={AmbikiraLogo}
          style={{
            height: undefined,
            aspectRatio: 2.09322,
            marginRight: 16,
            position:'absolute'
          }}
          resizeMode="contain"
        />
      </View>
          
    

      <View style={styles.textblock}>
        <Text style={styles.title}>Esse aplicativo foi desenvolvido por:</Text>
        <View style={styles.devNames}>

            <View style={{rowGap:8}}>
            <Text style={styles.devText}>Daniel Vigano</Text>
            <Text style={styles.devText}>Felipe fernandes</Text>
            <Text style={styles.devText}>Gabriel Scarpelin</Text>
            <Text style={styles.devText}>Pedro Henrique</Text>
            <Text style={styles.devText}>Rafael Kaue</Text>
            <Text style={styles.devText}>Vitor Vilela</Text>
            </View>
            
            <View style={{rowGap:8}}>
            <Text style={styles.devText}>Eduardo Porto Bispo</Text>
            <Text style={styles.devText}>Gabriel Galdino</Text>
            <Text style={styles.devText}>João Pedro</Text>
            <Text style={styles.devText}>Rafael Souza</Text>
            <Text style={styles.devText}>Thiago Evangalista</Text>
            <Text style={styles.devText}>William Ramos</Text>
            </View>
            
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
    backgroundColor: '#FFFFFF',
    justifyContent:'space-around',
  },
  textblock:{
    backgroundColor: '#F85D17',
    width: '75%',
    flex:0.5,
    height:undefined,
    borderRadius:25,
    gap:10,
    alignSelf:'center',
    justifyContent:'space-around',
    marginLeft:13,
    alignItems:"center",
    justifyContent:"space-around"
  },
  
  devNames:{
    flexDirection:"row",
    alignItems:'center', 
  },
  devText:{
    fontSize: normalize(24),
    color:'#FFFFFF',
    fontFamily:'Anton'
  },
  title:{
    fontSize: normalize(48),
    color: '#FFEDC2', 
    textAlign:"center",
    fontFamily:"Anton",
  },
  botton:{
    backgroundColor:'#F0B528',
    borderRadius: 50,
    height:80,
    width:250,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    alignSelf:'center'
  },
  bottonText:{
    fontSize: normalize(40),
    color: '#000000'
  },
});