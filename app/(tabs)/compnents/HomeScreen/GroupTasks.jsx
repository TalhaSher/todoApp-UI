import { View, Text, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const GroupTasks = ({ title, day, time }) => {
  return (
    <View className="bg-white rounded-md mx-1">
      <View className="py-4 pr-10 pl-4">
        <Text className="text-bold tracking-wider" style={{ fontSize: hp(3) }}>
          {title}
        </Text>
        <Text>
          {day} | {time}
        </Text>
      </View>

      <View className="pl-4 pb-4">
        <Image source={require("../../../../assets/images/Group.png")} />
      </View>
    </View>
  );
};

export default GroupTasks;
