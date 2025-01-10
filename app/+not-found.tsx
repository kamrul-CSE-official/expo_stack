import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "404" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Page Not Found</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 18,
    color: "#6c757d",
    fontWeight: "bold",
  },
});

export default NotFoundScreen;
