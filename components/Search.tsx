//import liraries
import icons from "@/constants/icons";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debounceSearch = useDebouncedCallback((text) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debounceSearch(text);
  };
  return (
    <View className="flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-200 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex-row justify-start items-center z-50">
        <Image source={icons.search} className="size-5"></Image>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for a Anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5"></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
