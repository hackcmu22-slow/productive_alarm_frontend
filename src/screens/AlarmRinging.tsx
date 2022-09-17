import { SafeAreaView, ScrollView, StyleSheet, View, useWindowDimensions} from "react-native";
import { Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const AlarmRinging: React.FC = ({ navigation }: any) => {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.red_circle}>
          <Text style={styles.title}>8:00AM</Text>
        </View>
        <CustomButton
          mode="contained"
          color={Colors[colorScheme].tint}
          style={styles.button}
          onPress={() => navigation.navigate('Alarms')}>
        Snooze
        </CustomButton>
        <CustomButton mode="outlined" style={styles.button} onPress={() => navigation.navigate('TakePictureScreen')}>
        Ready
        </CustomButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlarmRinging;

// Standardized template for card
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  red_circle:{
    backgroundColor: "#cfc0fa",
    width: 300,
    height: 300,
    borderRadius: 200,
    justifyContent: "center",
    marginTop: "30%",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    marginLeft: "25%",
    maxWidth: "50%",
  },
});
