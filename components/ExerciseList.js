import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseList = ({ exercises }) => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <FlatList
        data={exercises}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
          width: "100%",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard item={item} router={router} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

export default ExerciseList;

const ExerciseCard = ({ item, router, index }) => {

  return (
    <Animated.View entering={FadeInDown.duration(400).delay(200 * index).springify()}>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exerciseDetails", params: item })}
        style={{ height: 200, width: 200 }}
        className="flex justify-end  mb-4"
      >
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ height: 200, width: 160 }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
          style={{
            height: 100,
            width: 160,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <Text className="absolute text-white capitalize text-center font-semibold w-[160px] pb-4">
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
