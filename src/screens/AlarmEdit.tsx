import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, FAB, Text, TextInput } from "react-native-paper";
import { AmPm } from "../utils/time";
import { TextInput as DefaultTextInput } from "react-native";
import { ScreenProps } from "../screenTypes";
import { Audio } from "expo-av";
import withAlarmFiring from "../components/withAlarmFiring";
import SoundContext, { PlayState } from "../components/SoundContext";
import { PlaybackMixin } from "expo-av/build/AV";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  timeElement: {
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 45,
  },
  timeText: {
    fontSize: 40,
    color: "#97f",
  },
  numberInput: {
    width: 100,
    paddingHorizontal: 10,
  },
  hourInput: {
    textAlign: "right",
  },
  minuteInput: {
    textAlign: "left",
    marginRight: 15,
  },
  fab: {
    bottom: 0,
    right: 0,
    margin: 16,
    position: "absolute",
  },
  previewSoundButtonContainer: {
    marginTop: 20,
    paddingHorizontal: "20%",
  },
});

const hourRegex = /^(|0?[1-9]|1[0-2])$/;
const minuteRegex = /^[0-5]?[0-9]?$/;

const AlarmEdit: React.FC<ScreenProps<"AlarmEdit">> = (
  props: ScreenProps<"AlarmEdit">
) => {
  const [hour, setHour] = React.useState(8);
  const [minute, setMinute] = React.useState(0);
  const [amPm, setAmPm] = React.useState<AmPm>("AM");

  const [hourText, setHourText] = React.useState("8");
  const [minuteText, setMinuteText] = React.useState("00");

  const [name, setName] = React.useState("");
  const [playState, setPlayState] = React.useContext(SoundContext);

  React.useEffect(() => {
    if (props.route.params.mode === "update") {
      const hour = ((props.route.params.hour + 11) % 12) + 1;
      setHour(hour);
      setHourText(String(hour));
      setAmPm(props.route.params.hour < 12 ? "AM" : "PM");

      const minute = props.route.params.minute;
      setMinute(minute);
      setMinuteText(String(minute).padStart(2, "0"));

      setName(props.route.params.name);
    }
  }, [props.route.params]);

  const handleAmPmPress = () => {
    setAmPm(amPm == "AM" ? "PM" : "AM");
  };

  const handleHourTextChange = (newText: string) => {
    if (hourRegex.test(newText)) setHourText(newText);
  };

  const handleHourFinishEdit = () => {
    if ((hourText?.length ?? 0) == 0) setHourText(String(hour));
    else {
      const hour = parseInt(hourText);
      setHourText(String(hour));
      setHour(hour);
    }
  };

  const handleMinuteTextChange = (newText: string) => {
    if (minuteRegex.test(newText)) setMinuteText(newText);
  };

  const handleMinuteFinishEdit = () => {
    if ((minuteText?.length ?? 0) == 0)
      setMinuteText(String(minute).padStart(2, "0"));
    else {
      const minute = parseInt(minuteText);
      setMinuteText(String(minute).padStart(2, "0"));
      setMinute(minute);
    }
  };

  const handleDone = () => {
    if ((hourText?.length ?? 0) == 0 || (minuteText?.length ?? 0) == 0) return;
    const hour = parseInt(hourText);
    const minute = parseInt(minuteText);
    props.navigation.navigate("Alarms", {
      ...props.route.params,
      hour: (hour % 12) + (amPm == "AM" ? 0 : 12),
      minute,
      name,
    });
  };

  const handlePreviewSound = () => {
    if (playState === PlayState.PAUSED) setPlayState(PlayState.PLAY_ONCE);
    else setPlayState(PlayState.PAUSED);
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.timeElement}>
          <DefaultTextInput
            placeholder="HH"
            style={[styles.timeText, styles.numberInput, styles.hourInput]}
            value={hourText}
            keyboardType="number-pad"
            onChangeText={handleHourTextChange}
            onEndEditing={handleHourFinishEdit}
          />
          <Text style={styles.timeText}>:</Text>
          <DefaultTextInput
            placeholder="MM"
            style={[styles.timeText, styles.numberInput, styles.minuteInput]}
            value={minuteText}
            onChangeText={handleMinuteTextChange}
            onEndEditing={handleMinuteFinishEdit}
            keyboardType="number-pad"
          />
          <Text style={styles.timeText} onPress={handleAmPmPress}>
            {amPm}
          </Text>
        </View>

        <TextInput label="Alarm Name" value={name} onChangeText={setName} />
        <View style={styles.previewSoundButtonContainer}>
          <Button mode="contained" onPress={handlePreviewSound}>
            {playState === PlayState.PAUSED ? "Preview Sound" : "Stop Preview"}
          </Button>
        </View>
      </ScrollView>
      <FAB icon="check-bold" style={styles.fab} onPress={handleDone} />
    </SafeAreaView>
  );
};

export default withAlarmFiring(AlarmEdit);
