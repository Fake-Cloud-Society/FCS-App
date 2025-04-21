import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import {ScrollView} from "@/components/ui/scroll-view";
import {Image} from "@/components/ui/image";
import React from "react";
import {Stack} from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{flexGrow: 1}}
      >
        <HStack className="w-full h-full flex-grow justify-center">
          <VStack
            className="relative hidden md:flex h-full w-full flex-1 items-center  justify-center"
            space="md"
          >
            <Image
              height={100}
              width={100}
              source={require("@/assets/auth/radialGradient.png")}
              className="object-cover h-full w-full"
              alt="Radial Gradient"
            />
          </VStack>
          <VStack
            className="md:items-center md:justify-center flex-1 w-full px-4 py-8 md:gap-10 gap-16 md:m-auto md:w-1/2 h-full">
            <Stack screenOptions={{headerShown: false}}>
              <Stack.Screen name="signin"/>
              <Stack.Screen name="signup"/>
              <Stack.Screen name="forgot-password"/>
              <Stack.Screen name="create-password"/>
            </Stack>
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};
