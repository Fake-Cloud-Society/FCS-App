import {Tabs} from "expo-router";
import React from "react";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useSession} from "@/components/ctx";
import { Redirect } from 'expo-router';
import {Text} from "@/components/ui/text";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{marginBottom: -3}} {...props} />;
}

export default function DashboardLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView className="h-full w-full">
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
          }}
        />

        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            tabBarIcon: ({color}) => <TabBarIcon name="feed" color={color}/>,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({color}) => <TabBarIcon name="male" color={color}/>,
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
