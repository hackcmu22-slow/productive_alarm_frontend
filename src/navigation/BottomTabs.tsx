import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
    "react-navigation-material-bottom-tabs";
  
import Dashboard from "../screens/Dashboard";
import AlarmList from "../screens/AlarmList";
  
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    AlarmList: {
      screen: AlarmList,
      navigationOptions: {
        tabBarLabel: "AlarmList",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#006600" },
  }
);
  
const Navigator = createAppContainer(TabNavigator);
export default Navigator;

// export default function App() {
//   return (
//     <Navigator>
//       <HomeScreen />
//     </Navigator>
//   );
// }