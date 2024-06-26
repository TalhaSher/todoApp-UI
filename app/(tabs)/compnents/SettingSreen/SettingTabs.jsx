import { View, Text } from "react-native";
import React from "react";
import {
  UserCircleIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftIcon,
  LightBulbIcon,
  DocumentMagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SettingTabs = ({ title }) => {
  let icon;

  if (title == "Conversation") {
    icon = <ChatBubbleOvalLeftIcon size={hp(5)} color={"white"} />;
  } else if (title == "Profile") {
    icon = <UserCircleIcon size={hp(5)} color={"white"} />;
  } else if (title == "Projects") {
    icon = <LightBulbIcon size={hp(5)} color={"white"} />;
  } else if (title == "Terms and Policies") {
    icon = <DocumentMagnifyingGlassIcon size={hp(5)} color={"white"} />;
  }
  return (
    <View>
      <View className="flex-row justify-between">
        <View className="flew-1 flex-row items-center mt-12">
          {icon}
          <Text
            style={{ fontSize: hp(3) }}
            className="text-white tracking-wider ml-2"
          >
            {title}
          </Text>
        </View>

        <View className="flew-1 flex-row items-center mt-12">
          <ChevronRightIcon size={hp(4)} color={"cyan"} />
        </View>

        {/* Divider */}
      </View>
    </View>
  );
};

export default SettingTabs;
