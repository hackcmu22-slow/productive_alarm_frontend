import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, IconButton, Switch, Text } from "react-native-paper";

const styles = StyleSheet.create({
  alarmContent: {
    flex: 1,
    flexDirection: "row",
  },
});

export interface AlarmListingProps {
  name: string;
  hour: number; // 24 hour
  minute: number;
  enabled: boolean;
  onEnabledChange: (newState: boolean) => void;
}

const AlarmListing: React.FC<AlarmListingProps> = (
  props: AlarmListingProps
) => {
  const handleSwitch = () => {
    props.onEnabledChange(!props.enabled);
  };

  return (
    <Card>
      <Card.Title title={props.name} />
      <Card.Content style={styles.alarmContent}>
        <Text variant="displayMedium" /* HH:MM */>
          {String(props.hour).padStart(2, "0")}:
          {String(props.minute).padStart(2, "0")}
        </Text>
        <Switch value={props.enabled} onValueChange={handleSwitch} />
      </Card.Content>
      <Card.Actions>
        <IconButton icon="pencil" mode="contained-tonal" />
        <IconButton icon="delete" mode="contained-tonal" />
        <IconButton icon="content-copy" mode="contained-tonal" />
      </Card.Actions>
    </Card>
  );
};

export default AlarmListing;
