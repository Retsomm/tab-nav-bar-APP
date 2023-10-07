import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://c02.purpledshub.com/uploads/sites/41/2023/07/mars-thumbnail-fb84d10.jpg",
        }}
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <Button
        title="go to Mars detail screen"
        onPress={() => props.navigation.push("MarsDetail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
