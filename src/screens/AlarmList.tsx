import * as React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { AnimatedFAB, Text } from "react-native-paper";
import AlarmListing, { AlarmInfo } from "../components/AlarmListing";
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

interface AlarmCReducerAction {
  type: "create";
  payload: {
    hour: number;
    minute: number;
    name: string;
  };
}

interface AlarmUReducerAction {
  type: "update";
  payload: {
    id: string;
    hour: number;
    minute: number;
    name: string;
  };
}

interface AlarmDReducerAction {
  type: "delete";
  payload: {
    id: string;
  };
}

interface AlarmEnableReducerAction {
  type: "enable";
  payload: {
    id: string;
    state: boolean;
  };
}

type Alarms = Record<string, AlarmInfo>;
export type AlarmReducerAction =
  | AlarmCReducerAction
  | AlarmUReducerAction
  | AlarmDReducerAction
  | AlarmEnableReducerAction;

function reducer(state: Alarms, action: AlarmReducerAction): Alarms {
  switch (action.type) {
    case "delete": {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    case "create": {
      const id = Date().toString();
      return { ...state, [id]: { ...action.payload, enabled: true } };
    }
    case "update": {
      const { id, ...others } = action.payload;
      return { ...state, [id]: { ...others, enabled: true } };
    }
    case "enable": {
      const newState = { ...state };
      const targetState = { ...newState[action.payload.id] };
      return {
        ...newState,
        [action.payload.id]: { ...targetState, enabled: action.payload.state },
      };
    }
  }
}

const AlarmList: React.FC<AlarmListProps> = (props: AlarmListProps) => {
  const [isFABExtended, setIsFABExtended] = React.useState(false);

  const [alarms, dispatch] = React.useReducer(reducer, {});

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

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView onScroll={onScroll} style={styles.container}>
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

export default AlarmList;
