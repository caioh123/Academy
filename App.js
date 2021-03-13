import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import NavBar from "./src/NavBar";
import BodyTemplate from "./src/BodyTemplate";

export default function App() {
  return (
    <>
      <StatusBar style="none" />
      <View style={styles.container}>
        <NavBar />
      </View>
      <BodyTemplate />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
