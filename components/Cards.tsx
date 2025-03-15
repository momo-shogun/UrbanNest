//import liraries
import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface Props {
  onPress: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      ></Image>
      <View className="flex-row items-start  bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubikBold text-primary-300 ml-1">
          4.4
        </Text>
      </View>
      <View className="flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubikExtraBold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-white">
          1/34 Krishna Vihar, Lucknow
        </Text>
        <View className="flex-row w-full items-start justify-between">
          <Text
            className="text-xl font-rubikExtraBold text-white"
            numberOfLines={1}
          >
            $2,100
          </Text>
          <Image source={icons.heart} className="size-6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex-row items-start  bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5 z-50">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubikBold text-primary-300 ml-0.5">
          4.4
        </Text>
      </View>
      <Image source={images.japan} className="w-full h-40 rounded-lg" />
      <View className="flex-col items-start mt-4">
        <Text className="text-xl font-bold text-black-300" numberOfLines={1}>
          La Grand Maison
        </Text>
        <Text className="text-base font-rubik text-black-100">
          Mahanagar, Lucknow
        </Text>
        <View className="flex-row w-full items-start justify-between">
          <Text
            className="text-lg font-bold text-primary-300"
            numberOfLines={1}
          >
            $2,1020
          </Text>
          <Image source={icons.heart} className="size-6 stroke-black-300" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
