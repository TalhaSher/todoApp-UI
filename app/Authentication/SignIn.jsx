import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LockClosedIcon, EnvelopeIcon } from "react-native-heroicons/solid";
import { useNavigation } from "expo-router";
import SignInOptions from "./components/SignInOptions";
import SignButton from "./components/SignButton";
import TextField from "./components/TextField";

const SignIn = () => {
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
          Welcome Back to <Text className="font-extrabold">DO IT</Text>
        </Text>

        <Text className="text-white ml-3">Have an other productive day !</Text>
      </View>

      {/* Email */}

      <View>
        <TextField placeholder={"E-mail"} />
        <TextField placeholder={"password"} />
      </View>

      {/* Forgot Password */}

      <View className="flex items-end m-5">
        <Text className="text-white underline">forget password?</Text>
      </View>

      {/* Sign In Button */}

      <SignButton title={"Sign In"} />

      {/* Sign Up link */}

      <View>
        <Text className="text-white text-center mt-3">
          Don't have an account ?{" "}
          <Text
            className="text-blue-300"
            onPress={() => navigation.navigate("SignUp")}
            style={{ cursor: "pointer" }}
          >
            sign up
          </Text>
        </Text>
      </View>

      {/* Other Sign in Options */}

      <SignInOptions />
    </View>
  );
};

export default SignIn;
