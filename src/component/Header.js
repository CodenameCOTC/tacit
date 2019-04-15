import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({
      android: 25,
      ios: 50
    }),
    paddingBottom: 25,
    backgroundColor: "#d5ad7d",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#f3efe3",
    fontWeight: "bold"
  }
});

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KINGQU</Text>
    </View>
  );
}

export default Header;
