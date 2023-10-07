import React from "react";
import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";

export default function HomeDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Elon Musk dreams of dying on Mars—now he might be one of the pioneering
        colonists
      </Text>
      <Image
        source={{
          uri: "https://content.fortune.com/wp-content/uploads/2022/10/GettyImages-1242720271-2.jpg?w=1440&q=75",
        }}
        style={{ width: 300, height: 300, marginBottom: 10 }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="article"
          onPress={() =>
            Linking.openURL(
              "https://fortune.com/2022/10/07/elon-musk-spacex-tesla-mars-pioneer-crewed-mission-starship/"
            )
          }
        />
        <View style={{ marginRight: 100 }} />
        <Button title="go back" onPress={() => props.navigation.pop()} />
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
