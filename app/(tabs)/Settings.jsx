import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftIcon,
  LightBulbIcon,
  DocumentMagnifyingGlassIcon,
  ArrowLeftStartOnRectangleIcon,
} from "react-native-heroicons/solid";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";
import Divider from "./compnents/SettingSreen/Divider";
import SettingTabs from "./compnents/SettingSreen/SettingTabs";
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1  pt-14 " style={{ backgroundColor: "#1253AA" }}>
      <View className="flex-row items-center ">
        <Pressable
          className="ml-2 w-9 bg-white rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={hp(5)} color={"cyan"} />
        </Pressable>

        <View className="flex-1 items-center mr-10">
          <Text style={{ fontSize: hp(6) }} className="text-white">
            Settings
          </Text>
        </View>
      </View>

      <SettingTabs title={"Profile"} />
      <Divider />
      <SettingTabs title={"Conversation"} />
      <Divider />
      <SettingTabs title={"Projects"} />
      <Divider />
      <SettingTabs title={"Terms and Policies"} />
      <Divider />

      {/* Logout Button */}

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <View className="w-full items-center mt-10">
          <View className="flex-row items-center bg-white rounded-md">
            <ArrowLeftStartOnRectangleIcon size={hp(5)} color={"red"} />
            <Text
              style={{ fontSize: hp(3), color: "red" }}
              className=" tracking-wider font-bold px-4 py-2"
            >
              Logout
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Tab Bar */}
      <View
        style={{ position: "absolute", bottom: 0, backgroundColor: "#1253AA" }}
        className=" w-full py-3"
      >
        <View className="flex-row justify-evenly">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <HomeIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskList")}>
            <ListBulletIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Calender")}>
            <CalendarDaysIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <View style={{ alignItems: "center" }}>
              <Cog8ToothIcon size={hp(5)} color={"cyan"} />
              <View
                style={{
                  height: 3,
                  width: "50%",
                  backgroundColor: "white",
                  marginTop: hp(0.5),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
