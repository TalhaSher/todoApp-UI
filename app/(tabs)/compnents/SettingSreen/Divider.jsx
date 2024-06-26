import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Divider = () => {
  return (
    <View className="w-full bg-cyan-200 mt-2" style={{ height: hp(0.1) }} />
  );
};

export default Divider;
