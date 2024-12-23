import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex justify-between flex-row items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ width: hp(6), height: hp(6) }}
            className="rounded-full"
          />
          <View
            className="mt-3 flex bg-neutral-200 justify-center items-center rounded-full border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color={"gray"} />
          </View>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>
      <View className="absolute mx-5">
        <View className="relative top-[420]">
          <BodyParts />
        </View>
      </View>
    </SafeAreaView>
  );
}
