import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import {
  CalendarDaysIcon,
  ClockIcon,
  PencilSquareIcon,
} from "react-native-heroicons/outline";

const TaskHeader = ({ title, day, time }) => {
  return (
    <View>
      <View className="flex-row items-center">
        <Text
          style={{ fontSize: hp(3) }}
          className="text-white mr-2 tracking-widest"
        >
          {title}
        </Text>

        <PencilSquareIcon size={hp(4)} color={"white"} />
      </View>
      {/* Task Timing */}

      <View className="flex-row items-center mb-4 mt-1">
        <CalendarDaysIcon size={hp(2)} color={"white"} />
        <Text className="text-white/60 "> {day} | </Text>
        <ClockIcon size={hp(2)} color={"white"} />
        <Text className="text-white/60 "> {time} </Text>
      </View>
    </View>
  );
};

export default TaskHeader;
