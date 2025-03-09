//import liraries
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// create a component
const AppLayout = () => {
  const { loading, isLoggedIn } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator
          className="text-primary-300"
          size={"large"}
        ></ActivityIndicator>
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) {
    return <Redirect href="/SignIn" />;
  }
  return <Slot></Slot>;
};

export default AppLayout;
