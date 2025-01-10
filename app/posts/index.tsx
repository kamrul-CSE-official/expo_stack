import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts Screen</Text>
      <View style={styles.buttonContainer}>
        {/* @ts-ignore */}
        <Link href="/posts/1" asChild>
          <Button title="Post-1" />
        </Link>
        {/* @ts-ignore */}
        <Link href="/posts/2" asChild>
          <Button title="Post-2" />
        </Link>
        {/* @ts-ignore */}
        <Link href="/posts/3" asChild>
          <Button title="Post-3" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10, // This requires React Native >= 0.71
  },
});

export default PostScreen;
