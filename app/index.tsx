import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Link href="/posts" asChild>
        <Button title="Posts" />
      </Link>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        tempora dolor sequi reprehenderit, illo quaerat, vitae unde, repellat
        fuga explicabo qui! Ipsam impedit cupiditate, quam dolorem doloremque
        porro libero molestias.
      </Text>
    </View>
  );
};

export default HomeScreen;
