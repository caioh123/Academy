import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Feather style={styles.menu} name="menu" size={32} color="black" />
      <Text style={styles.fontMenu}>Físico em Forma Unidade 1</Text>
      <Feather style={styles.menu} name="bell" size={32} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#0000ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  menu: {
    color: "#fff",
    marginHorizontal: 20,
  },
  fontMenu: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
});

export default NavBar;
