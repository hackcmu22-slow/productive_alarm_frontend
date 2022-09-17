import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

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
    marginTop: "70%",
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
    marginTop: "70%",
    fontSize: 20,
    fontWeight: "bold",
  },
});
const Wait: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ActivityIndicator size="large" animating={true} color={"#00ff00"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wait;

