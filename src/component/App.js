import React, { useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import Header from "./Header";
import Content from "./Content";
import SearchInput from "./SearchInput";
import request from "../lib/request";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    setIsLoading(true);
    const res = await request.get("/search/photos", {
      params: { query: searchInput }
    });
    const { results } = await res.data;
    setTimeout(() => {
      setIsLoading(false);
      setImages(results);
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchInput
        value={searchInput}
        onChangeText={setSearchInput}
        fetchImages={fetchImages}
      />
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#d5ad7d"
          style={{ marginTop: 25, alignSelf: "center" }}
        />
      )}
      {images.map(image => (
        <Content data={image} key={image.id} />
      ))}
    </ScrollView>
  );
}

export default App;
