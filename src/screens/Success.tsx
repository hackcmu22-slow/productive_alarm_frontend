import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Success: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Congratulations! You are fully awake!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Success;

// Standardized template for card
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 24,
        fontSize: 20,
        fontWeight: "bold",
    },
});