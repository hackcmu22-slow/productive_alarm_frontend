import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import { renderTime } from "../utils/time";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ScreenProps } from "../screenTypes";
import SoundContext, { PlayState } from "../components/SoundContext";

const AlarmRinging = (props: ScreenProps<"AlarmRinging">): JSX.Element => {
  const colorScheme = useColorScheme();
  const { hour, minute, ampm } = renderTime(
    props.route.params.hour,
    props.route.params.minute
  );

    const [_, setPlayState] = React.useContext(SoundContext);

    React.useEffect(() => {
        setPlayState(PlayState.LOOP);
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.red_circle}>
          <Text variant="bodyLarge">{props.route.params.name}</Text>
          <Text style={styles.title}>
            {hour}:{minute} {ampm}
          </Text>
        </View>
        <CustomButton
          mode="contained"
          color={Colors[colorScheme].tint}
          style={styles.button}
          onPress={() => props.navigation.navigate("TakePictureScreen")}
        >
          Continue
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
  red_circle: {
    backgroundColor: "#cfc0fa",
    width: 300,
    height: 300,
    borderRadius: 200,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    justifyContent: "center",
    marginTop: "30%",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    marginLeft: "25%",
    maxWidth: "50%",
  },
});
