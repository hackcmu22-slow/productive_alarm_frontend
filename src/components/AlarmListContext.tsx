import * as React from "react";
import { AlarmReducerAction, Alarms } from "../store/alarms";

const AlarmListContext = React.createContext<
  [Alarms, React.Dispatch<AlarmReducerAction>]
>([{}, () => {}]);

export default AlarmListContext;
