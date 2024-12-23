import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import "../global.css"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


export default function Index() {
  const router = useRouter()
  return (
    <View className="flex flex-1 justify-end" style={{height: hp(100)}}>
     <StatusBar style='light' />
     <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />

     <LinearGradient 
      colors={['transparent', '#18181b']}
      style={{width: wp(100), height: hp(30)}}
      start={{x: 0.5, y:0}}
      end={{x: 0.5, y:0.8}}
      className="flex items-end justify-end pb-12 space-y-8"
     >
      <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
        <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
          Best <Text className="text-rose-500">Workouts</Text>
        </Text>
        <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
          For You!
        </Text>
      </Animated.View>

      <Animated.View  entering={FadeInDown.delay(200).springify()}>
        <TouchableOpacity onPress={()=> router.push('home')} style={{width: wp(80), height:hp(7)}} className="flex items-center justify-center mx-auto border-[2px] bg-rose-500 border-neutral-200 rounded-full mt-4">
          <Text className="text-white" style={{fontSize: hp(3)}}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>

     </LinearGradient>
    </View>
  )
}