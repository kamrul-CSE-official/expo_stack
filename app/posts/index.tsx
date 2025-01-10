import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Posts = () => {
  return (
    <View>
      <Text>Posts</Text>
      <Link href="/posts/1">
        <Button title="Post-1" />
      </Link>
      <Link href="/posts/2">
        <Button title="Post-2" />
      </Link>
      <Link href="/posts/3">
        <Button title="Post-3" />
      </Link>
    </View>
  );
};

export default Posts;
