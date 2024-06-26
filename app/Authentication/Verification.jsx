import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "expo-router";

const Verification = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 pt-14 space-y-4"
      style={{ backgroundColor: "#1253AA" }}
    >
      {/* Header */}

      <View className="flex-row justify-center mt-6">
        <Text style={{ fontSize: hp(4) }} className="text-white ">
          Verify Account
        </Text>
      </View>

      {/* Container */}

      <View className="flex-1 flex-row justify-center items-center m-12">
        <View className="bg-white/30 rounded-md items-center space-y-5">
          {/* Header */}

          <View className="pt-10 mb-8">
            <Text style={{ fontSize: hp(4) }} className="text-white font-bold">
              DO IT
            </Text>
          </View>

          {/* Description */}

          <View>
            <Text className="text-white ml-8 mr-12 font-semibold mb-8 text-start tracking-wider  ">
              By verifying your account, you data will be secured and be default
              you are accepting our terms and policies
            </Text>
          </View>

          {/* Text Field */}

          <View style={{ width: hp(35) }}>
            <TextInput
              placeholder="Verification Code"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(1.7), height: hp(7) }}
              className="bg-white text-center mb-1 tracking-widest rounded-md"
              keyboardType="numeric"
            />
          </View>

          {/* Verify Button */}

          <View className="m-10">
            <TouchableOpacity
              style={{
                backgroundColor: "#0EA5E9",
                width: hp(35),
                height: hp(7),
              }}
              className="rounded-md justify-center items-center"
              onPress={() => navigation.navigate("(tabs)")}
            >
              <View>
                <Text className="text-white font-semibold tracking-wider">
                  Verify
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Verification;
