import * as React from "react";

import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { RootTabParamList } from "../screenTypes";
import Dashboard from "../screens/Dashboard";
import AlarmList from "../screens/AlarmList";
import Success from "../screens/Success";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

export default function BottomTabShifting() {
  return (
    <BottomTab.Navigator initialRouteName="Dashboard" shifting={true}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="dashboard"
              color={color}
              size={20}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AlarmList"
        component={AlarmList}
        options={{
          title: "AlarmList",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="directions-run"
              color={color}
              size={20}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
