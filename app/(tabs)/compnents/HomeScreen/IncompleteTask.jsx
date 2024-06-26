import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const IncompleteTask = ({ title, day, time }) => {
  return (
    <View>
      <View className="bg-white flex-row justify-between mx-4 my-1 items-center rounded-md">
        {/* Icon and Task Info */}
        <View className="flex-row pl-3 py-5 ">
          <View className="justify-center">
            <Text style={{ fontSize: hp(3) }} className="tracking-wider ">
              {title}
            </Text>
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
    </View>
  );
};

export default IncompleteTask;
