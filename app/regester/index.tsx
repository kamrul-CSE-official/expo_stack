import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RegesterScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Regester" }} />
      <Text>RegesterScreen</Text>
    </View>
  );
};

export default RegesterScreen;
