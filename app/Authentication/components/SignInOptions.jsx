import { View, Text, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SignInOptions = () => {
  return (
    <View className="flex-row items-center">
      <View className="ml-3 mt-12 ">
        <Text className="text-white">Sign In with : </Text>
      </View>

      <Image
        source={require("../../../assets/images/appleLogo.png")}
        width={hp(3.7)}
        height={hp(3.7)}
        className="mt-12"
      />
      <Image
        source={require("../../../assets/images/GoogleLogo.png")}
        width={hp(3.7)}
        height={hp(3.7)}
        className="mt-12"
      />
    </View>
  );
};

export default SignInOptions;
