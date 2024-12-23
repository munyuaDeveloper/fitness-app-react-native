import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { bodyParts } from "../constants";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function BodyParts() {
  return (
    <View >
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20, }}
        columnWrapperStyle={{flex: 1, justifyContent: "space-between", width: '100%'}}
        scrollEnabled={true}
        renderItem={({ item, index }) => <BodyPartCard item={item} index={index} />}
      />
    </View>
  );
}

const BodyPartCard = ({item, index}) => {
    const router = useRouter()
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(200 * index).springify()}>
      <TouchableOpacity
      onPress={()=>router.push({pathname: '/exercises', params: item})}
        style={{ height: 200, width: 200 }}
        className="flex justify-end  mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ height: 200, width: 160 }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
          style={{ height: 50, width: 160,borderBottomLeftRadius:35, borderBottomRightRadius: 35 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <Text className="absolute text-white capitalize text-center font-semibold w-[160px] pb-4">{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
