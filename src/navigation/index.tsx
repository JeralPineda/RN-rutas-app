import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {LoadingScreen, MapScreen, PermissionsScreen} from "../screens";
import {PermissionsContext} from "../context/PermissionsContext";

const Stack = createStackNavigator();

export const Navigation = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === "unavailable") {
    return <LoadingScreen />;
  }

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
      {permissions.locationStatus === "granted" ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};
