import { SafeAreaView, ScrollView, StyleSheet,View } from "react-native";
import { Text } from "react-native-paper";
import React, {useState} from "react"


const Dashboard: React.FC = () => {
  const [Points, setPoints] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={[styles.card, { backgroundColor: "powderblue" }]}
        />
          <Text>Coins Collected: {Points}</Text>

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

export default Dashboard;


// Standardized template for card
const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  card: {
    width: "80%",
    marginTop: 20,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20/2
 },
});