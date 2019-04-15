import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  form: {
    padding: 10,
    alignSelf: "center",
    borderRadius: 8,
    width: "90%",
    borderColor: "#d5ad7d",
    borderWidth: 1
  }
});

function SearchInput({ value, onChangeText, fetchImages }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here to search"
        style={styles.form}
        value={value}
        onChangeText={onChangeText}
        keyboardType="web-search"
        onSubmitEditing={fetchImages}
      />
    </View>
  );
}

export default SearchInput;
