import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>
      {/* @ts-ignore */}
      <Link href="/not-found" asChild>
        <Button title="Not Found!" />
      </Link>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis harum
        explicabo voluptate totam eaque, facilis nobis corrupti perferendis
        consectetur ex eius culpa ea incidunt corporis mollitia voluptatibus
        obcaecati sed hic.
      </Text>
    </View>
  );
}

export default LoginScreen;
