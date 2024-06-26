import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  ChevronRightIcon,
  CheckCircleIcon,
} from "react-native-heroicons/solid";

const CompleteTask = ({ title, day, time }) => {
  return (
    <View className="bg-white flex-row justify-between mx-4 mb-2 items-center rounded-md">
      {/* Icon and Task Info */}
      <View className="flex-row">
        <View className="px-3 py-5">
          <CheckCircleIcon size={hp(5)} color={"green"} />
        </View>
        <View className="justify-center">
          <Text>{title}</Text>
          <Text>
            {day} {time}
          </Text>
        </View>
      </View>

      {/* Right Arrow Icon */}
      <View>
        <ChevronRightIcon size={hp(5)} color={"#0EA5E9"} strokeWidth={5} />
      </View>
    </View>
  );
};

export default CompleteTask;
