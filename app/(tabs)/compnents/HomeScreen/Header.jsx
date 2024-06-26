import { View, Text, Image } from "react-native";
import React from "react";
import { IMAGES_PATH } from "../../../../constants/Images";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon } from "react-native-heroicons/solid";

const Header = ({ name, email }) => {
  return (
    <View className="flex-row justify-between items-center mx-4">
      <View className="flex-row">
        <Image source={IMAGES_PATH.avatar} />
        <View className="ml-2 mt-1">
          <Text className="text-white font-bold tracking-wide">{name}</Text>
          <Text className="text-white  tracking-wide">{email}</Text>
        </View>
      </View>
      {/* Bell Icon */}
      <View>
        <BellIcon size={hp(5)} color={"white"} />
      </View>
    </View>
  );
};

export default Header;
