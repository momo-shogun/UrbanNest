import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image source={images.avatar} className="size-12" />
            <View className="flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubikMedium text-black-300">
                Krishna
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
      <View className="my-5 px-4">
        <View className="flex-row items-start justify-between ">
          <Text>Featured</Text>
          <TouchableOpacity>
            <Text className="text-primary-300 text-base font-rubikBold">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" flex-row gap-5 mt-5">
          <FeaturedCard onPress={() => {}} />
          <FeaturedCard onPress={() => {}} />
          <FeaturedCard onPress={() => {}} />
        </View>
      </View>
      {/* <Card onPress={() => {}} /> */}

    </SafeAreaView>
  );
}
