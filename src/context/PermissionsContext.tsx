import React, {createContext, useState} from "react";
import {PermissionStatus} from "react-native-permissions";

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

  const askLocationPermission = () => {};
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
