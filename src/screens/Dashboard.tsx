import { SafeAreaView, ScrollView, StyleSheet,View,TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import React, {useState} from "react"


const FlexDirectionBasics = () => {
  const [Point, setPoint] = useState(0);
  const [Streak, setStreak] = useState(1);
  return (
    <>
      <Text style={styles.label}>Coins Collected: {Point}</Text>
      <View style={styles.container}>
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
      />
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    
  }
});

export default FlexDirectionBasics;
const backup: React.FC = () => {
  const [Points, setPoints] = useState(0);
  const [Streak, setStreak] = useState(2);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={[styles.title, { backgroundColor: "powderblue" }]}>Coins Collected: {Points}</Text>

        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.circle, { backgroundColor: "skyblue" }]}
        />
 
      </ScrollView>
    </SafeAreaView>
  );
};



