import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function exerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute rounded-full mx-2 top-4 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color={"#f43f5e"} />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Animated.Text entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold tracking-wider text-neutral-800 capitalize"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide text-neutral-700 mt-2"
        >
          Equipment{" "}
          <Text
            style={{ fontSize: hp(2) }}
            className="font-semibold text-neutral-800"
          >
            {item.equipment}
          </Text>
        </Animated.Text >
        <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide text-neutral-700 mt-2"
        >
          Secondary Muscles{" "}
          <Text
            style={{ fontSize: hp(2) }}
            className="font-semibold text-neutral-800"
          >
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>

        <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="tracking-wide text-neutral-700 mt-2"
        >
          Target{" "}
          <Text
            style={{ fontSize: hp(2) }}
            className="font-semibold text-neutral-800"
          >
            {item.target}
          </Text>
        </Animated.Text>

        <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="tracking-wide text-neutral-700 mt-4"
        >
          Instructions
        </Animated.Text>
        {
          item.instructions.split(',').map((instruction, index) => (
            <Animated.Text entering={FadeInDown.delay(index+6 * 100).duration(300).springify()}
              key={index}
              style={{ fontSize: hp(1.7) }}
              className="tracking-wide text-neutral-800 mt-3"
            >
              - {instruction}
            </Animated.Text>
          ))
          || null
          }
      </ScrollView>
    </View>
  );
}
