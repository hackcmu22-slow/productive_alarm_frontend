import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/RegisterScreen";
import AlarmList from "./src/screens/AlarmList";
import TemplateCopyMe from "./src/screens/TemplateCopyMe";
import Navigation from "./src/screens/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Navigation">
                <Stack.Screen name="Navigation" component={Navigation} options={{ title: "Navigation"}}/>
                <Stack.Screen name="Login" component={Login} options={{ title: "Login"}}/>
                <Stack.Screen name="RegisterScreen" component={Register} options={{ title: "Register"}}/>
                <Stack.Screen name="Alarm" component={AlarmList} options={{ title: "Alarm"}}/>
                <Stack.Screen name="TEMPLATE COPY ME" component={TemplateCopyMe} options={{ title: "Template copy me"}}/>
            </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
