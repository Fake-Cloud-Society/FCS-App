import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import {useSession} from "@/components/ctx";
import React from "react";

export default function DashboardLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="example"/>
    </Stack>
  )
}
