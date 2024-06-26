import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Task = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="mt-4"
      onPress={() => navigation.navigate("TaskDetails", { ...props })}
    >
      <View className="bg-white flex-row justify-between mx-4 items-center rounded-md">
        {/* Icon and Task Info */}
        <View className="flex-row pl-3 py-5 ">
          <View className="justify-center">
            <Text style={{ fontSize: hp(3) }} className="tracking-wider ">
              {props.title}
            </Text>
            <Text>
              {props.day} {props.time}
            </Text>
          </View>
        </View>

        {/* Right Arrow Icon */}
        <View>
          <ChevronRightIcon size={hp(5)} color={"#0EA5E9"} strokeWidth={5} />
        </View>
      </View>
    </Pressable>
  );
};

export default Task;
