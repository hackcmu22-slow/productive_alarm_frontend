import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/RegisterScreen";
import AlarmList from "./src/screens/AlarmList";
import TemplateCopyMe from "./src/screens/TemplateCopyMe";
import { RootStackParamList } from "./src/screenTypes";
import AlarmEdit from "./src/screens/AlarmEdit";
import { capitalize } from "./src/utils/text";
import Navigation from "./src/screens/Navigation";
import Success from "./src/screens/Success";
<<<<<<< HEAD
import TakePictureScreen from "./src/screens/TakePictureScreen";
import CameraScreen from "./src/screens/CameraScreen";
=======
import TakePictureScreen from "./src/screens/TakePictureScreen"
>>>>>>> master

const Stack = createNativeStackNavigator<RootStackParamList>();

// If you are getting type errors, you need to edit src/screenTypes.ts
export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
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
            name="Success"
            component={Success}
            options={{ title: "Success"}}
          />
          <Stack.Screen 
            name="TakePictureScreen"
            component={TakePictureScreen}
            options={{ title: "TakePictureScreen"}}
          />
<<<<<<< HEAD
          <Stack.Screen 
            name="CameraScreen"
            component={CameraScreen}
            options={{ title: "CameraScreen"}}
          />
=======
>>>>>>> master
          <Stack.Screen
            name="TEMPLATE COPY ME"
            component={TemplateCopyMe}
            options={{ title: "Template copy me" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
