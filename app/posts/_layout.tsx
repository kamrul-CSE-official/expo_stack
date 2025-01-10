import { Stack } from "expo-router";
import React from "react";

const PostLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Posts" }} />
      <Stack.Screen name="[id]" options={{ title: "Post Details" }} />
    </Stack>
  );
};

export default PostLayout;
