import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { Link } from "expo-router";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <Button title="seed" onPress={seed} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card onPress={() => {}} />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="gap-5 px-5"
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image source={{uri: user?.avatar}} className="size-12 rounded-full" />
                <View className="flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubikMedium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5 px-4">
              <View className="flex-row items-start justify-between ">
                <Text className="font-black text-lg font-rubikBold">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubikBold">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
                <FlatList
                  data={[1,2,3]}
                  renderItem={({ item }) => <FeaturedCard onPress={() => {}} />}
                  keyExtractor={(item) => item.toString()}
                  horizontal
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
                ></FlatList>
              </View>
            <View className="my-5 px-4">
              <View className="flex-row items-start justify-between ">
                <Text className="font-black text-lg font-rubikBold">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubikBold">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <Filters />
              
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
