import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import AlarmListing, { AlarmListingProps } from "../components/AlarmListing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AlarmList: React.FC = () => {
  const [isAlarmOn, setIsAlarmOn] = React.useState(false);

  const alarms: AlarmListingProps[] = [
    {
      name: "hello",
      hour: 7,
      minute: 8,
      enabled: isAlarmOn,
      onEnabledChange: setIsAlarmOn,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {alarms.map((alarm, index) => (
          <AlarmListing key={index} {...alarm} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlarmList;
