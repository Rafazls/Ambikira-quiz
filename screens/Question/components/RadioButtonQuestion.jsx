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
        <Text style={status ? [styles.containerAlternatives, styles.checked] : [styles.containerAlternatives, styles.unchecked]}>
          {question}
        </Text>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  checked: {
    backgroundColor: "#FFC648",
  },
  unchecked: {
    backgroundColor: "#FFF",
  },
  containerAlternatives: {
     fontFamily: "MontserratMedium", 
     fontSize: normalize(24), 
     color: "black", 
     backgroundColor: "#7380EB", 
     padding: 12, 
     borderRadius: 12,
     height: "20%",
     width: "100%",
  }
});
