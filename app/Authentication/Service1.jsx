import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "expo-router";

const Service1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Service2"), 2500);
  }, []);

  return (
    <View
      className="pt-14 flex-1 justify-around items-center"
      style={{ backgroundColor: "#1253AA" }}
    >
      <View className="flex-col items-center">
        <View>
          <Image
            source={require("../../assets/images/Checkmark.png")}
            width={hp(20)}
            height={hp(20)}
          />
        </View>

        <View className="mt-4">
          <Text
            className="text-white font-bold tracking-wider"
            style={{ fontSize: hp(5) }}
          >
            DO IT
          </Text>
        </View>
      </View>

      <View>
        <Text className="text-white">v 1.0.0</Text>
      </View>
    </View>
  );
};

export default Service1;
