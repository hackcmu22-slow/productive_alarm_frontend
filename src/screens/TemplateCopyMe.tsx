import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TemplateCopyMe: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Hello hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TemplateCopyMe;
