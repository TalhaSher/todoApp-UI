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
import React, { useState, useEffect } from "react";
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
import { useNavigation } from "expo-router";
import Task from "./compnents/TaskListScreen/Task";
import TaskModal from "./compnents/TaskListScreen/Modal";
import Search from "./compnents/TaskListScreen/Search";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskList = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

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

  const handleAddTask = async (newTask) => {
    try {
      const existingTask = await AsyncStorage.getItem("tasks");
      const currentTasks = existingTask ? JSON.parse(existingTask) : [];

      currentTasks.push(newTask);

      await AsyncStorage.setItem("tasks", JSON.stringify(currentTasks));

      setTasks(currentTasks);

      setModalVisible(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const onDeleteTask = async (title, day, time, description) => {
    try {
      const updatedTasks = tasks.filter(
        (task) =>
          !(
            task.title === title &&
            task.date === day &&
            task.time === time &&
            task.description === description
          )
      );
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      navigation.navigate("TaskList");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const onCompleteTask = async (title) => {
    try {
      console.log(title);
      const storageTasks = await AsyncStorage.getItem("tasks");
      const tasks = JSON.parse(storageTasks);

      const updatedTasks = tasks.map((task) => {
        return task.title === title ? { ...task, completed: true } : task;
      });

      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));

      console.log(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => console.log("tasks : ", tasks), [tasks]);

  useEffect(() => {
    getTasks();
    console.log("storage:", tasks);
  }, []);

  return (
    <View className="flex-1 pt-14" style={{ backgroundColor: "#1253AA" }}>
      {/* Search */}
      <Search setModalVisible={setModalVisible} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(10) }}
        className="space-y-4"
      >
        {/* Tasks List */}
        {tasks.length > 0 ? (
          tasks.map((task, i) => (
            <Task
              title={task.title}
              day={task.date}
              time={task.time}
              description={task.description}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
              key={i}
            />
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text
              style={{ fontSize: hp(3) }}
              className="mt-12 text-white font-semibold tracking-wider"
            >
              No Tasks
            </Text>
          </View>
        )}
      </ScrollView>

      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleAddTask={handleAddTask}
      />
      {/* Tab Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#1253AA",
        }}
        className="w-full py-3"
      >
        <View className="flex-row justify-evenly">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <HomeIcon size={hp(5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity>
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

export default TaskList;
