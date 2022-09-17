import * as React from "react";
import { ScrollView } from "react-native";
import { Card, Switch, Text } from "react-native-paper";
import AlarmListing, { AlarmListingProps } from "../components/AlarmListing";


const AlarmList: React.FC = () => {
  const [isAlarmOn, setIsAlarmOn] = React.useState(false);

    const alarms: AlarmListingProps[] = [
        {
            name: "hello",
            hour: 7,
            minute: 8,
            enabled: isAlarmOn,
            onEnabledChange: setIsAlarmOn
        }
    ]

  return (
    <ScrollView>
        {alarms.map((alarm, index) => (
            <AlarmListing key={index} {...alarm} />
        ))}
    </ScrollView>
  );
};

export default AlarmList;
