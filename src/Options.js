import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Options = ({ icon, size, iconColor, title }) => {
  return (
    <View style={styles.background}>
      <FontAwesome name={icon} size={size} color={iconColor} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 100,
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 7,
    color: "#00001a",
    fontWeight: "normal",
  },
});

export default Options;
