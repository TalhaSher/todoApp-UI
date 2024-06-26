import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
} from "react-native-heroicons/solid";
import {
  Bars3BottomLeftIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "react-native-heroicons/outline";

const Search = ({ setModalVisible }) => {
  return (
    <View className="flex-row">
      <View
        className="mx-3 flex-1 flex-row bg-black/20 rounded-md items-center"
        style={{ height: hp(7) }}
      >
        <TextInput
          placeholder="Search By Task Title"
          placeholderTextColor={"white"}
          style={{ fontSize: hp(1.7) }}
          className="flex-1 text-base mb-1 pl-3 tracking-wider"
        />
        <MagnifyingGlassIcon
          color="white"
          size={hp(3.7)}
          style={{ marginRight: 6 }}
        />
      </View>
      <Pressable
        className="pl-2 mr-3 flex-row bg-black/20 rounded-md items-center justify-center"
        style={{ height: hp(7) }}
        onPress={() => setModalVisible(true)}
      >
        <PlusIcon color="white" size={hp(3.7)} style={{ marginRight: 6 }} />
      </Pressable>
    </View>
  );
};

export default Search;
