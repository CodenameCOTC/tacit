import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default App;
