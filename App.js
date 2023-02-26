import { useState } from "react";
import { skandinavLotto} from "./components/randNums";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";

export default function App() {
  function handlePress() {
    console.log("pressed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Lottó szám generátor</Text>
      <Pressable onPress={handlePress} style={styles.generatorBtn}>
        <Text style={styles.generatorBtnTxt}>Generálás</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#93D14F",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    fontSize: 40,
    textAlign: "center",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  generatorBtn: {
    color: "#0000",
    backgroundColor: "#ffffff",
    width: "80%",
    padding: 15,
    textAlign: "center",
    marginTop: 15,
  },
  generatorBtnTxt: {
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "uppercase",
    letterSpacing: 3
  },
});
