import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlarmInfo } from "./components/AlarmListing";

type AlarmEditMode = { mode: "create" } | ({ mode: "update"; id: string } & AlarmInfo);

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Navigation: undefined;
  Alarms:
    | undefined
    | (AlarmEditMode & { hour: number; minute: number; name: string });
  AlarmEdit: AlarmEditMode;
  AlarmRinging: undefined;
  Success: undefined;
  TakePictureScreen: undefined;
  "TEMPLATE COPY ME": undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
