import axios from "axios";
import * as React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { AnimatedFAB, Button, Text } from "react-native-paper";
import AlarmListContext from "../components/AlarmListContext";
import AlarmListing from "../components/AlarmListing";
import withAlarmFiring from "../components/withAlarmFiring";
import { ScreenProps } from "../screenTypes";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 40,
  },
  noAlarmsText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    margin: 20,
  },
  fab: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});

interface AlarmListProps extends ScreenProps<"Alarms"> {}

const AlarmList: React.FC<AlarmListProps> = (props: AlarmListProps) => {
  const [isFABExtended, setIsFABExtended] = React.useState(false);

  const [alarms, dispatch] = React.useContext(AlarmListContext);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(event.nativeEvent?.contentOffset?.y) ?? 0;
    setIsFABExtended(currentScrollPosition <= 0);
  };

  React.useEffect(() => {
    if (props.route.params) {
      switch (props.route.params.mode) {
        case "create":
          dispatch({
            type: "create",
            payload: {
              hour: props.route.params.hour,
              minute: props.route.params.minute,
              name: props.route.params.name,
            },
          });
          break;
        case "update":
          dispatch({
            type: "update",
            payload: {
              hour: props.route.params.hour,
              minute: props.route.params.minute,
              name: props.route.params.name,
              id: props.route.params.id,
            },
          });
      }
    }
  }, [props.route.params]);

  const handleAddAlarm = () => {
    props.navigation.push("AlarmEdit", { mode: "create" });
  };

  const listOfAlarms = Object.entries(alarms);

  const onPing = async () => {
    try {
      const response = await axios.get("http://172.26.69.11:5000/submit");
      console.log(response);
    } catch (e) {
      console.log("rip");
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView
        onScroll={onScroll}
        style={styles.container}
        scrollEventThrottle={20}
      >
        {listOfAlarms.length === 0 && (
          <View style={styles.noAlarmsText}>
            <Text variant="bodyLarge">You don't have any alarms yet.</Text>
          </View>
        )}
        {listOfAlarms.map(([key, alarm]) => (
          <AlarmListing
            key={key}
            {...alarm}
            onEnabledChange={(newState) =>
              dispatch({
                type: "enable",
                payload: { id: key, state: newState },
              })
            }
            onEdit={() =>
              props.navigation.push("AlarmEdit", {
                mode: "update",
                id: key,
                ...alarm,
              })
            }
            onDelete={() => dispatch({ type: "delete", payload: { id: key } })}
          />
        ))}
      </ScrollView>
      <AnimatedFAB
        icon="plus"
        label="Add new alarm"
        extended={isFABExtended}
        visible={true}
        animateFrom="right"
        iconMode="static"
        style={styles.fab}
        onPress={handleAddAlarm}
      />
    </SafeAreaView>
  );
};

export default withAlarmFiring(AlarmList);
