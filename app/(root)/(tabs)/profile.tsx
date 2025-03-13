//import liraries
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";
// create a component
const Profile = () => {
  const { user, refetch } = useGlobalContext();
  async function handleLogout() {
    const result = await logout();
    if (result) {
      Alert.alert("Logout Successful");
      refetch()
    }else{
      Alert.alert("Logout Failed");
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex-row justify-between items-center mt-5 ">
          <Text className="text-xl font-rubikBold  font-black">Profile </Text>
          <Image source={icons.bell} className="size-5 " />
        </View>
        <View className="mt-5 flex-row justify-center items-center">
          <View className="flex-col justify-center items-center mt-5 relative">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9"></Image>
            </TouchableOpacity>
            <Text className="text-2xl font-rubikBold  mt-2">{user?.name}</Text>
          </View>
        </View>
        <View className="mt-10 flex-col">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View className="flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            showArrow={false}
            textStyle="text-danger"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface settingItemsProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: settingItemsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" flex-row justify-between items-center py-3 "
    >
      <View className="flex-row gap-3 ">
        <Image className="size-6" source={icon}></Image>
        <Text
          className={`text-lg font-rubikMedium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

//make this component available to the app
export default Profile;
