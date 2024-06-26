import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  CalendarDaysIcon,
  Cog8ToothIcon,
  HomeIcon,
  ListBulletIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

// COMPONENT IMPORTS
import GroupTasks from "./compnents/HomeScreen/GroupTasks";
import Header from "./compnents/HomeScreen/Header";
import IncompleteTask from "./compnents/HomeScreen/IncompleteTask";
import CompleteTask from "./compnents/HomeScreen/CompleteTask";
import { List } from "../../constants/List";
import { useIsFocused } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const [completedTask, setCompletedTask] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const isFocused = useIsFocused();

  const getTasks = async () => {
    const storageTasks = await AsyncStorage.getItem("tasks");
    const tasks = JSON.parse(storageTasks);
    const compTasks = tasks.filter((task) => task.completed === true);
    const incompTasks = tasks.filter((task) => task.completed === false);

    setCompletedTask(compTasks);
    setIncompleteTasks(incompTasks);
  };

  useEffect(() => {
    isFocused && getTasks();
  }, [isFocused]);
  return (
    <View className="flex-1  pt-14 " style={{ backgroundColor: "#1253AA" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(10) }}
        className="space-y-4"
      >
        {/* Navbar */}
        <Header name="Talha Sher" email="talhasher123@gmail.com" />

        {/* Group Tasks */}

        <View>
          <View className="mx-4">
            <Text
              className="text-white tracking-wider"
              style={{ fontSize: hp(2.5) }}
            >
              Group Tasks
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4 my-4"
            contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            {/* Group Tasks */}
            {List.map((item, i) => (
              <GroupTasks
                title={item.title}
                day={item.dea}
                time={item.time}
                key={i}
              />
            ))}
          </ScrollView>

          {/* Incomplete Tasks */}

          <View className="space-y-3">
            {/* Header */}
            <View className="mt-4 pr-10 pl-4 mb-3">
              <Text
                className="text-white tracking-wider"
                style={{ fontSize: hp(2.5) }}
              >
                Incomplete Tasks
              </Text>
            </View>

            {/* Tasks */}
            {incompleteTasks.map((item, i) => (
              <IncompleteTask
                title={item.title}
                day={item.date}
                time={item.time}
                key={i}
              />
            ))}
          </View>

          {/* Completed Tasks */}

          <View className="space-y-3">
            {/* Header */}
            <View className="mt-4 pr-10 pl-4 ">
              <Text
                className="text-white tracking-wider"
                style={{ fontSize: hp(2.5) }}
              >
                Completed Tasks
              </Text>
            </View>
            <View>
              {completedTask.map((item, i) => (
                <CompleteTask
                  title={item.title}
                  day={item.date}
                  time={item.time}
                  key={i}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Tab Bar */}

      <View
        style={{ position: "absolute", bottom: 0, backgroundColor: "#1253AA" }}
        className=" w-full py-3"
      >
        <View className="flex-row justify-evenly">
          <TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <HomeIcon size={hp(5)} color={"cyan"} />
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

          <TouchableOpacity onPress={() => navigation.navigate("TaskList")}>
            <ListBulletIcon size={hp(5)} color={"white"} />
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

export default Home;
