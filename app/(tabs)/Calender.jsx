import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
} from "react-native-heroicons/solid";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";

const Calender = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1  pt-14 " style={{ backgroundColor: "#1253AA" }}>
      <Text
        style={{ fontSize: hp(5) }}
        className="text-white font-bold tracking-widest"
      >
        Calender
      </Text>

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
            <View style={{ alignItems: "center" }}>
              <CalendarDaysIcon size={hp(5)} color={"cyan"} />
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

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Cog8ToothIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calender;
