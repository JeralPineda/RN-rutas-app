import React from "react";
import {Button, Platform, StyleSheet, Text, View} from "react-native";
import {
  PERMISSIONS,
  PermissionStatus,
  // check,
  request,
} from "react-native-permissions";

export const PermissionsScreen = () => {
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === "ios") {
      //* Saber si tiene acceso a la localización en IOS
      // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      //* Solicitar permiso a la localización cuando se usa IOS, si ya tiene el acceso no lo pide nuevamente
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      //* Saber si tiene acceso a la localización en IOS
      // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      //* Solicitar permiso a la localización cuando se usa IOS
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    console.log(permissionStatus);
  };

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>

      <Button title="Permiso" onPress={checkLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
