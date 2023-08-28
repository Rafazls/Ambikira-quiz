import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    PixelRatio,
    ScrollView,
} from "react-native";
import logo from "../../assets/newLogo.png";
import React from "react";
import { useFonts } from "expo-font";
import normalize from "../../assets/normalizeFont";
import { Circle, Defs, Ellipse, G, Path, Rect, Svg } from "react-native-svg";

export default function TermsAndConditions({ navigation, route }) {
    const [fontsLoaded] = useFonts({
        //carrega as fontes
        Anton: require("../../assets/fonts/Anton-Regular.ttf"),
        Battambang: require("../../assets/fonts/Battambang-Regular.ttf"),
        InriaSans: require("../../assets/fonts/Inria_Sans_Regular_400.ttf"),
        MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    });
    if (!fontsLoaded) return; //verifica se as fontes já carregaram
    return (
        <View style={styles.teste}>
            {/*CIRCULO INFERIOR ESQUERDO*/}
            <Svg
                viewBox="0 0 222 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: "26%",
                    aspectRatio: 0.81617,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: -99
                }}
            >
                <Ellipse cx={26.5} cy={299.5} rx={195.5} ry={199.5} fill="#F9AC01" />
                <Path
                    d="M151 173.5C151 251.541 83.953 315 1 315s-150-63.459-150-141.5S-81.953 32 1 32s150 63.459 150 141.5z"
                    stroke="#fff"
                    strokeWidth={4}
                />
            </Svg>
            {/*CIRCULO SUPERIOR DIREITO*/}
            <Svg
                viewBox="0 0 269 216"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    aspectRatio: 1.24537,
                    width: "32%",
                    height: undefined,
                    right: 0,
                    top: 0,
                    position: "absolute",
                    zIndex: -99
                }}
            >
                <G filter="url(#filter0_d_718_220)">
                    <Path
                        d="M417.6 -3.92905C417.6 110.907 326.252 204 213.57 204C100.887 204 0 110.907 0 -3.92905C0 -118.765 100.887 -211.858 213.57 -211.858C326.252 -211.858 417.6 -118.765 417.6 -3.92905Z"
                        fill="#F85D17"
                    />
                    <Path
                        d="M490 -116.484C490 6.61664 400.439 106.033 290.4 106.033C180.361 106.033 90.7999 6.61664 90.7999 -116.484C90.7999 -239.584 180.361 -339 290.4 -339C400.439 -339 490 -239.584 490 -116.484Z"
                        stroke="black"
                        strokeWidth={4}
                    />
                </G>
                <Defs></Defs>
            </Svg>
            <View style={{ paddingHorizontal: normalize(100), flex: 1, paddingVertical: normalize(48), alignItems: 'center' }}>
                <Image
                    source={logo}
                    style={{ width: "30%", aspectRatio: 2.35632, height: undefined, alignSelf: 'flex-start' }}
                    resizeMode="contain"
                />
                <Text style={{ fontFamily: 'MontserratBold', fontSize: normalize(40), color: "#F85D17", textAlign: 'center', marginTop: normalize(100) }}>Termos e Condições</Text>
               <ScrollView>
                <Text style={{ fontFamily: 'MontserratMedium', fontSize: normalize(28), color: 'black', marginTop: "12%" }}>
                1. A página https://ambikira.org.br/ pertence ao Instituto Ambikira (“Instituto”) e veicula, gratuitamente, informações e documentos pertinentes a seus objetivos sociais. Todas as demais páginas e redes sociais vinculada ao domínio acima indicado estarão submetidas, no que couber, a esta Política. {'\n\n'}
                2. O Instituto poderá realizar alterações no conteúdo das páginas, a qualquer tempo, sem prévio aviso, e não pode ser responsabilizado por erros ou imprecisões no conteúdo disponibilizado. Caso você identifique alguma informação que possa ser enquadrada como erro ou imprecisão em nosso site, poderá reportá-la pelos nossos canais de contato institucional.{'\n\n'}
                3. Você pode copiar e redistribuir o material disponibilizado pelo Instituto, sem autorização prévia, mencionando a fonte e incluindo o(a) autor(a) do texto ou da foto, quando for o caso. Em qualquer circunstância, você é o(a) único(a) responsável pelo uso que fizer da página e dos materiais por ela disponibilizados, devendo respeitar a legislação vigente e utilizar o conteúdo com boa-fé em eventuais reproduções, totais ou parciais. {'\n\n'}
                4. O Instituto se compromete com a privacidade dos seus dados pessoais, cumprindo a Constituição Brasileira, a Lei Geral de Proteção de Dados e as demais normas aplicáveis.{'\n\n'}
                5. É vedado o acesso à página por crianças e adolescentes sem o consentimento de seus pais ou responsáveis legais. {'\n\n'}
                6. A newsletter disponibilizada por meio do site é uma publicação que tem como finalidade manter os(as) subscritores atualizados(as) sobre as iniciativas da organização. {'\n\n'}
                7. O envio da newsletter ocorrerá apenas mediante o seu consentimento específico, que será materializado a partir do envio dos dados solicitados, que se restringem a: nome (obrigatório), organização (não obrigatório) e e-mail (obrigatório). {'\n\n'}
                8. Os dados acima serão tratados por colaboradores(as) e prestadores(as) de serviço do Instituto exclusivamente para a manutenção da sua assinatura, que poderá ser cancelada a qualquer tempo através de link de descadastramento que acompanha o conteúdo enviado.{'\n\n'}
                9. Os seus dados pessoais também poderão ser coletados de forma automática. O site utiliza cookies de navegação e coleta de dados para o Google Analytics. {'\n\n'}
                10. O Instituto não se responsabiliza pelos cookies decorrentes do conteúdo externo que poderá ser acessado a partir de sua página. Se o(a) visitante clicar em um link de terceiros, ele será direcionado para o site correspondente, devendo verificar e aceitar ou não as respectivas políticas de privacidade. {'\n\n'}
                11. Caso você realize uma doação em favor do Instituto por meio da conta bancária indicada pelo site, os seus dados pessoais serão tratados exclusivamente com o propósito de formalizar, de modo adequado, a sua relação com o Instituto. {'\n\n'}
                12. Para obter acesso, solicitar correções, atualizações ou exercer quaisquer direitos relativos aos seus dados pessoais, envie um e-mail para: contato@ambikira.org.br {'\n\n'}
                13. Esta política foi publicada em 01/08/2022 e poderá ser alterada a qualquer tempo. As alterações serão divulgadas neste mesmo espaço. {'\n\n'}
                14. As eventuais controvérsias decorrentes da aplicação desta Política serão resolvidas, preferencialmente, por solução consensual e, não sendo possível, ficará eleito o Foro Central da Comarca de São Paulo para dirimir os litígios.{'\n\n'}
                </Text>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home"); //Vai para a tela de home
                    }}
                    style={styles.botaoJogar}
                >
                    <Text
                        style={{
                            fontFamily: "InriaSans",
                            color: "#FFF",
                            fontSize: normalize(36),
                        }}
                    >
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    teste: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    botaoJogar: {
        backgroundColor: "#000000",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 500,
        marginTop: normalize(80)
    },
});
