import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {LoadingScreen, MapScreen, PermissionsScreen} from "../screens";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          // shadowColor: "transparent", //IOS
        },
        cardStyle: {
          backgroundColor: "white",
        },
      }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};
