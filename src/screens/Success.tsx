import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";

const Success: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/success_img.png")}
        />
        <Text style={styles.title}>Congratulations! You are fully awake!</Text>
        <CustomButton
            mode="outlined"
            style={styles.button}
            onPress={() => navigation.navigate('Alarms')}
        >
        Return
        </CustomButton>
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
    image: {
        height: 260,
        width: 260,
        marginTop: 100,
        marginLeft: 50,
    },
    title: {
        marginTop: 24,
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
    },
    button: {
        width: 160,
        marginTop: 20,
        marginLeft: 100,
    },
});