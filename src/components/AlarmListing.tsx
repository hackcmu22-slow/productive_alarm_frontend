import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, IconButton, Switch, Text } from "react-native-paper";
import { AlarmInfo } from "../store/alarms";
import { renderTime } from "../utils/time";

const styles = StyleSheet.create({
  alarmContent: {
    flex: 1,
    flexDirection: "row",
  },
  timeElement: {
    flexGrow: 1,
  },
});

export interface AlarmListingProps extends AlarmInfo {
  onEnabledChange: (newState: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
}

const AlarmListing: React.FC<AlarmListingProps> = (
  props: AlarmListingProps
) => {
  const handleSwitch = () => {
    props.onEnabledChange(!props.enabled);
  };

  const timeComponents = renderTime(props.hour, props.minute);

  return (
    <Card>
      <Card.Title title={props.name} />
      <Card.Content style={styles.alarmContent}>
        <View style={styles.timeElement}>
          <Text variant="displayMedium" /* HH:MM */>
            {timeComponents.hour}:{timeComponents.minute} {timeComponents.ampm}
          </Text>
        </View>
        <View>
          <Switch value={props.enabled} onValueChange={handleSwitch} />
        </View>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon="pencil"
          mode="contained-tonal"
          onPress={props.onEdit}
        />
        <IconButton
          icon="delete"
          mode="contained-tonal"
          onPress={props.onDelete}
        />
      </Card.Actions>
    </Card>
  );
};

export default AlarmListing;
