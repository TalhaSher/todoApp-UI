import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
} from "react-native-heroicons/solid";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";
import TaskHeader from "./compnents/TaskDetails/TaskHeader";
import ActionButtons from "./compnents/TaskDetails/ActionButtons";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const TaskDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  const { title, day, time, description, onDeleteTask, onCompleteTask } =
    route.params;

  const getTasks = async () => {
    try {
      const tasksString = await AsyncStorage.getItem("tasks");
      if (tasksString !== null) {
        const tasks = JSON.parse(tasksString);
        setTasks(tasks);
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  const handleDelete = () => {
    onDeleteTask(title, day, time, description);
  };

  const handleComplete = () => {
    onCompleteTask(title);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View
      className="pt-14 flex-1 space-y-4"
      style={{ backgroundColor: "#1253AA" }}
    >
      <View className="mx-5 flex-row items-center">
        {/* Header */}

        <Pressable onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={hp(5)} color={"cyan"} />
        </Pressable>

        <Text
          style={{ fontSize: hp(3) }}
          className="ml-3 text-white tracking-wider"
        >
          Task Details
        </Text>
      </View>

      {/* Main Body */}

      <View className="mx-5 justify-center flex-1 ">
        {/* header */}
        <TaskHeader title={title} day={day} time={time} />

        <View className="bg-white/60 w-full my-3" style={{ height: hp(0.2) }} />

        <View>
          <Text
            style={{ fontSize: hp(2.5) }}
            className="text-white tracking-widest"
          >
            {description}
          </Text>
        </View>

        {/* BUTTONS */}

        <View className="flex-row w-full  mt-5 justify-around">
          <ActionButtons title={"done"} onCompleteTask={handleComplete} />
          <ActionButtons title={"delete"} onDeleteTask={handleDelete} />
          <ActionButtons title={"pin"} />
        </View>
      </View>

      {/* Tab Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#1253AA",
        }}
        className=" w-full py-3"
      >
        <View className="flex-row justify-evenly">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <HomeIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskList")}>
            <View style={{ alignItems: "center" }}>
              <ListBulletIcon size={hp(5)} color={"cyan"} />
              <View
                style={{
                  height: 3,
                  width: "50%",
                  backgroundColor: "white",
                  marginTop: hp(0.5),
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Calender")}>
            <CalendarDaysIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Cog8ToothIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;
