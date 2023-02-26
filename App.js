import { useState } from "react";
import { skandinavLotto} from "./components/randNums";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  function handlePress() {
    console.log("pressed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Lottó szám generátor</Text>
      <Pressable style={styles.generatorBtn} onPress={handlePress()}>
        <Text>Generálás</Text>
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
    backgroundColor: "#ffffff",
    color: "#0000",
    fontSize: 20,
    width: "80%",
    padding: 15,
    textAlign: "center",
  },
});
