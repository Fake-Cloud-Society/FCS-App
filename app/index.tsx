import {VStack} from "@/components/ui/vstack";
import {Button, ButtonText} from "@/components/ui/button";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";
import React, {useEffect, useState} from "react";
import {useRouter} from "expo-router";
import {SafeAreaView} from "@/components/ui/safe-area-view";
import {ScrollView} from "@/components/ui/scroll-view";
import {HStack} from "@/components/ui/hstack";
import {Image} from "@/components/ui/image";
import {useSession} from "@/components/ctx";
import * as Linking from 'expo-linking';
import {Spinner} from "@/components/ui/spinner";
import colors from "tailwindcss/colors"

export default function Index() {
  const router = useRouter();
  const { signIn } = useSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    signIn().then(async () => {
      const url = await Linking.getInitialURL()
      router.replace(url ? url as any : "/dashboard/home")
    }).catch(() => {
      // Do nothing
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="w-full h-full justify-center align-middle">
        <Spinner size="large" color={colors.gray[500]}/>
      </SafeAreaView>
    )
  }
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
            <VStack
              className="w-full max-w-[440px] items-center h-full justify-center"
              space="lg"
            >
              <VStack>
                <Heading className="text-center" size="3xl">
                  Fake Cloud Society App
                </Heading>
                <Text className="text-center">Welcome to our awesome app</Text>
              </VStack>
              <VStack className="w-full" space="lg">
                <Button
                  className="w-full"
                  onPress={() => {
                    router.push("/auth/signin");
                  }}
                >
                  <ButtonText className="font-medium">Log in</ButtonText>
                </Button>
                <Button
                  onPress={() => {
                    router.push("/auth/signup");
                  }}
                >
                  <ButtonText className="font-medium">Sign Up</ButtonText>
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};
