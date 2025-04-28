import {Tabs} from "expo-router";
import React from "react";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{marginBottom: -3}} {...props} />;
}

export default function DashboardLayout() {
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
