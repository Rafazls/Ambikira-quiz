import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import logos  from '../../assets/logos.png'
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";
import Svg, { G, Circle, Defs, Path, Ellipse } from "react-native-svg"



export default function Developers({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
    Anton: require("../../assets/fonts/Anton-Regular.ttf"),
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return;

  return (

    <View style={styles.container}>
      <View>
 <Svg
      viewBox="0 0 375 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "45%",
        height: undefined,
        aspectRatio: 1.52439,
        position: "absolute",
        zIndex: -99,
        left: 0,
        top: 0,
      }}
    >
      <G filter="url(#filter0_d_421_554)">
        <Circle
          cx={134.634}
          cy={134.634}
          r={134.634}
          transform="matrix(-.73546 -.67756 .65262 -.75768 50.037 245.162)"
          fill="#F85D17"
        />
        <Circle
          cx={157.664}
          cy={157.664}
          r={155.664}
          transform="matrix(.93737 -.34834 .37945 .92521 -40.976 -98.159)"
          stroke="#000"
          strokeWidth={4}
        />
      </G>
    </Svg>
    <Svg
      viewBox="0 0 267 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: undefined,
        width: "33%",
        aspectRatio: 0.83699,
        position: "absolute",
        zIndex: -99,
        right: 0,
        bottom: 0,
      }}
    >
      <G filter="url(#filter0_d_421_526)">
        <Circle
          cx={194.501}
          cy={252.501}
          r={144.145}
          transform="rotate(152.421 194.501 252.501)"
          fill="#F9AC01"
        />
        <G filter="url(#filter1_d_421_526)">
          <Path
            d="M166.005 414.132c-48.36-92.587-14.837-205.505 74.694-252.268 89.531-46.764 201.358-9.765 249.718 82.821 48.359 92.587 14.836 205.505-74.695 252.268-89.53 46.764-201.358 9.765-249.717-82.821z"
            stroke="#000000"
            strokeWidth={4}
            shapeRendering="crispEdges"
          />
        </G>
      </G>
    </Svg>

        <Image
          source={logos}
          style={{
            height: undefined,
            aspectRatio: 2.09322,
            marginLeft:'35%',
            width:'60%',
            position:'absolute'
          }}
          resizeMode="contain"
        />
</View>

<Text style={{fontFamily: 'MontserratMedium', fontSize: normalize(30), color: 'black', marginTop: "15%",fontWeight: 'bold', marginLeft:'8%'}}>
Este aplicativo foi desenvolvido por alunos do{'\n'}CEAP – Centro Educacional Assistencial Profissionalizante,{'\n'}uma das organizações apoiadas pelo Instituto Ambikira.  </Text>


      <View style={styles.textblock}>
      <View >
            <Text style={styles.devText}>Daniel Vigano</Text>
            <Text style={styles.devText}>Felipe fernandes</Text>
            <Text style={styles.devText}>Gabriel Scarpelin</Text>
            <Text style={styles.devText}>Pedro Henrique</Text>
            <Text style={styles.devText}>Rafael Kaue</Text>
            <Text style={styles.devText}>Vitor Vilela</Text>
            </View>
            
            <View >
            <Text style={styles.devText}>Eduardo Porto Bispo</Text>
            <Text style={styles.devText}>Gabriel Galdino</Text>
            <Text style={styles.devText}>João Pedro</Text>
            <Text style={styles.devText}>Rafael Souza</Text>
            <Text style={styles.devText}>Thiago Evangalista</Text>
            <Text style={styles.devText}>William Ramos</Text>
            </View>
      </View>

      <TouchableOpacity style={styles.botton}
      onPress={()=> {
       navigation.navigate("Introduction");
      }}>
        <Text style={styles.bottonText}>CONCLUIR</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent:'space-between',
  },
  textblock:{
    flexDirection:'row',
    backgroundColor: '#F85D17',
    width: '75%',
    flex:0.6,
    height:undefined,
    borderRadius:25,
    gap:10,
    marginLeft:'13%',
  
  },
  
  devNames:{
    flexDirection:"row",
    alignItems:'center', 
  },
  devText:{
    fontSize: normalize(30),
    color:'#FFFFFF',
    fontFamily:'Anton',
    marginLeft:'17%',
    marginTop:'10%'
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
    height:normalize(77),
    width:normalize(247),
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    alignSelf:'center'
  },
  bottonText:{
    fontSize: normalize(32),
    color: '#000000',
    fontFamily: "MontserratBold"
  },
});