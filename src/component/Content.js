import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  },
  avatar: {
    borderRadius: 16,
    marginRight: 5
  },
  username: {
    fontSize: 13,
    fontWeight: "600",
    marginRight: 5
  },
  caption: {
    flex: 1,
    flexWrap: "wrap"
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    marginRight: 5
  }
});

function Content({ data }) {
  const { urls, user, description } = data;
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          resizeMethod="scale"
          resizeMode="cover"
          source={{ uri: user.profile_image.small, height: 32, width: 32 }}
        />
        <Text style={styles.username}>{user.username}</Text>
      </View>
      <View>
        <Image
          resizeMethod="scale"
          resizeMode="cover"
          source={{ uri: urls.regular, height: height * 0.3, width }}
          fadeDuration={3000}
        />
        <View style={styles.row}>
          <Text style={styles.username}>{user.username}</Text>
          <View style={styles.caption}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Content;
