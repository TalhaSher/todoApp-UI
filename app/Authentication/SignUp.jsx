import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { useNavigation } from "expo-router";
import SignInOptions from "./components/SignInOptions";
import SignButton from "./components/SignButton";
import TextField from "./components/TextField";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View className="pt-14 flex-1" style={{ backgroundColor: "#1253AA" }}>
      {/* Logo */}
      <View className="flex-row justify-center">
        <Image
          source={require("../../assets/images/Checkmark.png")}
          width={hp(10)}
          height={hp(10)}
        />
      </View>

      {/* Login Text */}

      <View className="space-y-2">
        <Text className="text-white  ml-3 mt-7" style={{ fontSize: hp(3) }}>
          Welcome to <Text className="font-extrabold">DO IT</Text>
        </Text>

        <Text className="text-white ml-3">
          create an account and Join us now!
        </Text>
      </View>

      {/* INPUT FIELDS */}

      <View>
        <TextField placeholder={"Full Name"} />
        <TextField placeholder={"E-mail"} />
        <TextField placeholder={"password"} />
      </View>

      {/* Sign Un Button */}
      <View className="mt-10">
        <SignButton title={"Sign Up"} />
      </View>

      {/* Sign Up link */}

      <View>
        <Text className="text-white text-center mt-3">
          Already have an account ?{" "}
          <Text
            className="text-blue-300"
            onPress={() => navigation.navigate("SignIn")}
          >
            sign in
          </Text>
        </Text>
      </View>

      {/* Other Sign in Options */}

      <SignInOptions />
    </View>
  );
};

export default SignUp;
