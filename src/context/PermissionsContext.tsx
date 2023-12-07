import React, {createContext, useState} from "react";
import {Platform} from "react-native";
import {PERMISSIONS, PermissionStatus, request} from "react-native-permissions";

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
  locationStatus: "unavailable",
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

//Creación del contexto
export const PermissionsContext = createContext({} as PermissionsContextProps);

// Creacion del provider (functional components with childrens)
export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionInitState);

  const askLocationPermission = async () => {
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

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  const checkLocationPermission = () => {};

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
