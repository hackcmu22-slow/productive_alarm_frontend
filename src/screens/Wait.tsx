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
});
const Wait: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wait;

