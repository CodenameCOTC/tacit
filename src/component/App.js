import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Header";
import Content from "./Content";

const fakeData = {
  description: "A man drinking a coffee.",
  user: {
    username: "kingqu",
    profile_image: {
      small:
        "http://tes77.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg",
      medium:
        "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
      large:
        "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
    }
  },
  urls: {
    raw: "https://images.unsplash.com/face-springmorning.jpg",
    full: "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg",
    regular:
      "http://tes77.com/wp-content/uploads/2017/10/dark-chocolate-bar-squares.jpg",
    small:
      "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max",
    thumb:
      "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max"
  }
};

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
      <Content data={fakeData} />
      <Content data={fakeData} />
    </View>
  );
}

export default App;
