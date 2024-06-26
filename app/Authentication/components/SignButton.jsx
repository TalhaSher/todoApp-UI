import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SignButton = ({ title }) => {
  let text;
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        className="flex-row justify-center mx-3 rounded-md items-center"
        style={{ backgroundColor: "#0EA5E9", height: hp(5.7) }}
        onPress={() => navigation.navigate("Verification")}
      >
        <View>
          <Text className="text-white">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignButton;
