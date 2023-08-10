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
      <TouchableWithoutFeedback onPress={onSelected}>
        <View style={styles.containerAlternatives}>
          <View style={styles.circleAlternative}>
            <Text
              style={{ fontFamily: "Imprima", fontSize: normalize(30), color: "#FFF" }}
            >
              {alternative}
            </Text>
          </View>
          <View
            style={
              status
                ? [styles.answerView, styles.checked]
                : [styles.answerView, styles.unchecked]
            }
          >
            <Text style={{ fontFamily: "InriaSans700", fontSize: normalize(24) }}>
              {question}
            </Text>
          </View>
        </View>
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
  circleAlternative: {
    borderRadius: 50000,
    backgroundColor: "#0097B2",
    width: "7%",
    height: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  containerAlternatives: {
    flexDirection: "row",
    alignItems: "center",
  },
  answerView: {
    width: "91%",
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#000fff",
    paddingHorizontal: 8
  },
});
