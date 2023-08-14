import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React from "react";
import normalize from "../../../assets/normalizeFont";

export default function RadioSelection({
  status,
  question,
  alternative,
  onSelected,
}) {
  return (
    <>
      <TouchableWithoutFeedback onPress={onSelected} style={{maxHeight: "20%", width: "100%", height: "20%"}}>
        <Text style={status ? [styles.containerAlternatives, { opacity: 1 }] : [styles.containerAlternatives, { opacity: 0.6 }]}>
          {question}
        </Text>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  checked: {
    backgroundColor: "#FFEDC2",
  },
  unchecked: {
    backgroundColor: "#FFF",
  },
  containerAlternatives: {
     fontFamily: "MontserratMedium", 
     fontSize: normalize(22), 
     color: "#FFF", 
     backgroundColor: "#7380EB", 
     padding: 12, 
     borderRadius: 12,
     height: "20%"
  }
});
