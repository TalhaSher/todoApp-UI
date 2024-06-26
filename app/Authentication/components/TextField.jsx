import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  LockClosedIcon,
  EnvelopeIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const TextField = ({ placeholder }) => {
  let icon;
  if (placeholder == "E-mail") {
    icon = (
      <EnvelopeIcon color="black" size={hp(3.7)} style={{ marginLeft: 6 }} />
    );
  } else if (placeholder == "password") {
    icon = (
      <LockClosedIcon color="black" size={hp(3.7)} style={{ marginLeft: 6 }} />
    );
  } else if (placeholder == "Full Name") {
    icon = <UserIcon color="black" size={hp(3.7)} style={{ marginLeft: 6 }} />;
  }

  return (
    <View
      className="mx-3 mt-10 flex-row bg-white rounded-sm items-center"
      style={{ height: hp(5) }}
    >
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        style={{ fontSize: hp(1.7) }}
        className="flex-1 text-base mb-1 pl-3 tracking-wider "
      />
    </View>
  );
};

export default TextField;
