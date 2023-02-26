import { useState } from "react";
import { skandinavLotto } from "./components/randNums";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

export default function App() {
  const [winningNumbers, setWinningNumbers] = useState([]);
  const date = new Date();

  function handlePress() {
    const numbers = skandinavLotto();
    const currentDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    setWinningNumbers((currentNumbers) => [
      ...currentNumbers,
      { nums: numbers.join(","), date: currentDate },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Lottó szám generátor</Text>
      <Pressable onPress={handlePress} style={styles.generatorBtn}>
        <Text style={styles.generatorBtnTxt}>Generálás</Text>
      </Pressable>
      <View style={styles.numbersContainer}>
        <FlatList
          data={winningNumbers}
          renderItem={(numbersData) => {
            return (
              <View style={styles.numbersView}>
                <Text style={styles.generateDate}>{numbersData.item.date}</Text>
                <Text style={styles.winNumbers}>{numbersData.item.nums}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#93D14F",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  mainTitle: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#93D14F",
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
    letterSpacing: 3,
  },
  numbersContainer: {
    flex: 3,
    backgroundColor: "#93D14F",
    justifyContent: "center",
    alignItems: "center",
  },
  numbersView: {
    borderColor: "#FAFAFF",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    width: "80%",
    marginTop: 8,
    marginBottom: 8,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    textAlign: "center",
    justifyContent: "space-between",
  },
  generateDate: {
    color: "#FAFAFF",
    fontSize: 16,
  },
  winNumbers: {
    color: "#FAFAFF",
    fontSize: 20,
  },
});
