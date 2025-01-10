import React from "react";
import { Link, router, Stack } from "expo-router";
import { Button, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: "black",
          // },
          // headerTintColor: "white",
        }
      }
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Button title="Login" onPress={() => router.push("/login")} />
          ),
        }}
      />
      <Stack.Screen
        name="regester/index.tsx"
        options={{
          title: "Regester",
          headerRight: () => (
            <Button title="Login" onPress={() => router.push("/login")} />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
