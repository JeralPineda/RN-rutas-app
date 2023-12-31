import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface BlackButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BlackButton = ({title, onPress, style}: BlackButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        ...(style as any),
        ...styles.button,
      }}>
      <Text style={{...styles.buttonText}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 150,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
