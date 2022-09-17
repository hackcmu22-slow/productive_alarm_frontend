import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { FAB, Text, TextInput } from "react-native-paper";
import { AmPm } from "../utils/time";
import { TextInput as DefaultTextInput } from "react-native";
import { ScreenProps } from "../screenTypes";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  timeElement: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: 45,
  },
  timeText: {
    fontSize: 50,
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

  React.useEffect(() => {
    if (props.route.params.mode === "update") {
      const hour = ((props.route.params.hour + 11) % 12) + 1;
      setHour(hour);
      setHourText(String(hour));
      setAmPm(hour < 12 ? "AM" : "PM");

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
      </ScrollView>
      <FAB icon="check-bold" style={styles.fab} onPress={handleDone} />
    </SafeAreaView>
  );
};

export default AlarmEdit;
