import images from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const NoResults = () => {
  return (
    <View className="items-center justify-center my-5 w-full">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-center text-2xl font-rubikBold mt-5 text-black-300">
        No Results Found
      </Text>
      <Text className="text-center text-sm font-rubik text-black-300">
        We could not find any results
      </Text>
    </View>
  );
};

export default NoResults;
