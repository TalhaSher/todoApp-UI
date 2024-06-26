import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { CheckCircleIcon, TrashIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { IMAGES_PATH } from "../../../../constants/Images";

const ActionButtons = ({ title, onDeleteTask, onCompleteTask }) => {
  let icon;
  let func;
  if (title == "done") {
    icon = <CheckCircleIcon size={hp(4)} color={"green"} />;
    func = onCompleteTask;
  } else if (title == "delete") {
    icon = <TrashIcon size={hp(4)} color={"red"} />;
    func = onDeleteTask;
  } else if (title == "pin") {
    icon = (
      <Image source={IMAGES_PATH.pin} style={{ width: hp(4), height: hp(4) }} />
    );
  }

  return (
    <Pressable
      style={{ width: hp(14), height: hp(12) }}
      className="bg-black/40 justify-center items-center rounded-md"
      onPress={func}
    >
      {icon}
      <Text className="text-white mt-2 tracking-wider">{title}</Text>
    </Pressable>
  );
};

export default ActionButtons;
