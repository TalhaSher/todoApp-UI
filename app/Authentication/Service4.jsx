import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Service4 = () => {
  const navigation = useNavigation();
  return (
    <View
      className="pt-14 flex-1 items-center justify-center"
      style={{ backgroundColor: "#1253AA" }}
    >
      <View className="flex-1 justify-evenly items-center">
        <View>
          <Image
            source={require("../../assets/images/team.png")}
            height={hp(30)}
            width={hp(30)}
          />
        </View>
        <View className="flex mx-10 px-10 mb-12">
          <Text
            className="text-white font-medium tracking-wider text-center"
            style={{ fontSize: hp(2) }}
          >
            create a team task, invite people and manage your work together
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 0, right: 0 }}>
        <Pressable onPress={() => navigation.navigate("Service5")}>
          <Image
            source={require("../../assets/images/next_button.png")}
            height={hp(2)}
            width={hp(2)}
          />
        </Pressable>
      </View>

      {/* Custom Swiper */}
      <View className="flex-row space-x-2 mb-5">
        <View
          style={{ height: hp(1.5), width: hp(1.5) }}
          className="bg-white rounded-full"
        />
        <View
          style={{ height: hp(1.5), width: hp(3) }}
          className="bg-white rounded-full"
        />
        <View
          style={{ height: hp(1.5), width: hp(1.5) }}
          className="bg-white rounded-full"
        />
      </View>
    </View>
  );
};

export default Service4;
