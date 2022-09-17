import * as React from "react";
import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer, NavigationContainerRefContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/RegisterScreen";
import AlarmList from "./src/screens/AlarmList";
import TemplateCopyMe from "./src/screens/TemplateCopyMe";
import { RootStackParamList } from "./src/screenTypes";
import AlarmEdit from "./src/screens/AlarmEdit";
import AlarmRinging from "./src/screens/AlarmRinging";
import { capitalize } from "./src/utils/text";
import Navigation from "./src/screens/Navigation";
import Success from "./src/screens/Success";
import Wait from "./src/screens/Wait";
import Dashboard from "./src/screens/Dashboard";
import TakePictureScreen from "./src/screens/TakePictureScreen";
import CameraScreen from "./src/screens/CameraScreen";
import BottomTabShifting from './src/navigation/BottomTabs';
import { TabRouter } from 'react-navigation';
import AlarmListContext from "./src/components/AlarmListContext";
import reducer from "./src/store/alarms";

const Stack = createNativeStackNavigator<RootStackParamList>();

// If you are getting type errors, you need to edit src/screenTypes.ts
export default function App() {
  const [alarms, alarmsDispatch] = React.useReducer(reducer, {});
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <BottomTabShifting />
        <AlarmListContext.Provider value={[alarms, alarmsDispatch]}>
          <Stack.Navigator initialRouteName="Navigation">
            <Stack.Screen
              name="Navigation"
              component={Navigation}
              options={{ title: "Navigation" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ title: "Register" }}
            />
            <Stack.Screen
              name="Alarms"
              component={AlarmList}
              options={{ title: "Alarms" }}
            />
            <Stack.Screen
              name="AlarmEdit"
              component={AlarmEdit}
              options={({ route }) => ({
                title: capitalize(route.params.mode) + " Alarm",
              })}
            />
            <Stack.Screen
              name="AlarmRinging"
              component={AlarmRinging}
              options={{ title: "AlarmRinging" }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ title: "Success" }}
            />
            <Stack.Screen
              name="Wait"
              component={Wait}
              options={{ title: "Wait" }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ title: "Dashboard" }}
            />
            <Stack.Screen
              name="TakePictureScreen"
              component={TakePictureScreen}
              options={{ title: "TakePictureScreen" }}
            />
            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={{ title: "CameraScreen" }}
            />
            <Stack.Screen
              name="TEMPLATE COPY ME"
              component={TemplateCopyMe}
              options={{ title: "Template copy me" }}
            />
          </Stack.Navigator>
        </AlarmListContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
