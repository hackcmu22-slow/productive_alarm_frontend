import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const TemplateCopyMe: React.FC = () => {
  return (
    <ScrollView>
      <Text>Hello hello</Text>
    </ScrollView>
  );
};

export default TemplateCopyMe;

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