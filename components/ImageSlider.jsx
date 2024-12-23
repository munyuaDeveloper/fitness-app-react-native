import { Dimensions, Image, View } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import SliderImages from "../constants/SliderImages";
import Carousel from "react-native-reanimated-carousel";
import { Text } from "react-native";

const SliderImages = [
  require('../assets/images/slide1.png'),
  require('../assets/images/slide2.png'),
  require('../assets/images/slide3.png'),
  require('../assets/images/slide4.png'),
  require('../assets/images/slide5.png'),
];

export default function ImageSlider() {
  return (
      <Carousel
      width={wp(100)}
      height={250}
      data={SliderImages}
      autoPlay={true}
      scrollAnimationDuration={2000}
      mode="parallax" // Enable parallax effect
      modeConfig={{
        parallaxScrollingScale: 0.9, // Scale for the non-focused items
        parallaxScrollingOffset: 50, // Offset for the non-focused items
      }}
      renderItem={({ item }) => (
        <View className="p-0 m-0">
          <Image source={item} style={{ width: wp(100), height: 250 }} resizeMode="contain" className="m-0 rounded-[100p]" />
        </View>
      )}
    />
  );
}

const ItemCard = ({ index }) => {
  return <Text className="text-red-400">Card Items {index}</Text>;
};
