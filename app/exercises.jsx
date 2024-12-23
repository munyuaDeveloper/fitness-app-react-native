import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyParts } from "../api/excerciseDB";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) {
      fetchExercises(item.name);
    }
  }, [item.name]);

  const fetchExercises = async (bodyPart) => {
    const data = await fetchExercisesByBodyParts(bodyPart);
    setExercises(data);
  };

  return (
    <ScrollView nestedScrollEnabled>
      <StatusBar style="light" />

      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40PX]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ width: hp(5.5), height: hp(5.5), marginTop: hp(7) }}
        className="absolute top-5 left-5 bg-rose-500 rounded-full flex justify-center items-center mx-4 pr-1"
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color={"white"} />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700 capitalize">
          {item.name} Exercises
        </Text>

        <View className="mb-10">
          <ExerciseList exercises={exercises} />
        </View>
      </View>
      
    </ScrollView>
  );
}
