import * as React from "react";
import { RootStackParamList, ScreenProps } from "../screenTypes";
import AlarmListContext from "./AlarmListContext";

function withAlarmFiring<T extends keyof RootStackParamList>(
  WrappedScreenComponent: React.ComponentType<ScreenProps<T>>
) {
  const displayName =
    WrappedScreenComponent.displayName ||
    WrappedScreenComponent.name ||
    "Component";

  const ScreenWithAlarmFiring = (props: ScreenProps<T>) => {
    const [alarms, _] = React.useContext(AlarmListContext);
    const [timeoutIds, setTimeoutIds] = React.useState<number[]>([]);
    React.useEffect(() => {
      timeoutIds.map(clearTimeout);
      setTimeoutIds(
        Object.values(alarms)
          .filter(({ enabled }) => enabled)
          .map((alarm) => {
            let date = new Date();
            date.setHours(alarm.hour);
            date.setMinutes(alarm.minute);
            date.setSeconds(0);
            if (date < new Date()) {
              date = new Date(date.getTime() + 86400000);
            }
            const callback = () => props.navigation.replace("AlarmRinging", alarm);
            return setTimeout(callback, date.getTime() - Date.now());
          })
      );
    }, [alarms]);
    return <WrappedScreenComponent {...props} />;
  };

  ScreenWithAlarmFiring.displayName = displayName;

  return ScreenWithAlarmFiring;
}

export default withAlarmFiring;
