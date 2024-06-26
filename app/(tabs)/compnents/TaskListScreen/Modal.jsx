import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Bars3BottomLeftIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskModal = ({ modalVisible, setModalVisible, handleAddTask }) => {
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  };
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleCreateTask = async () => {
    const newTask = {
      title: task,
      description,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], timeOptions),
      completed: false,
    };

    handleAddTask(newTask);

    setTask("");
    setDescription("");
    setDate(new Date());
    setTime(new Date());
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <BlurView intensity={100} style={StyleSheet.absoluteFillObject}>
        <View
          className="w-full bg-white rounded-t-3xl"
          style={{ height: hp(55), position: "absolute", bottom: 0 }}
        >
          <View className="m-5">
            <View>
              <View
                className="mx-3 flex-row  rounded-md items-center"
                style={{ height: hp(7), backgroundColor: "#05243E" }}
              >
                <ClipboardDocumentCheckIcon
                  color="white"
                  size={hp(3.7)}
                  style={{ marginHorizontal: 6 }}
                />
                <TextInput
                  placeholder="Task"
                  placeholderTextColor={"white"}
                  value={task}
                  onChangeText={setTask}
                  style={{ fontSize: hp(1.7), color: "white" }}
                  className="flex-1 text-base mb-1 pl-3 tracking-wider"
                />
              </View>
            </View>
          </View>
          <View className="mx-5">
            <View>
              <View
                className="mx-3 flex-row rounded-md items-center justify-start"
                style={{ backgroundColor: "#05243E" }}
              >
                <Bars3BottomLeftIcon
                  color="white"
                  size={hp(3.7)}
                  style={{ marginHorizontal: 6, marginVertical: 6 }}
                />
                <TextInput
                  placeholder="Description"
                  multiline
                  numberOfLines={5}
                  placeholderTextColor={"white"}
                  value={description}
                  onChangeText={setDescription}
                  style={{
                    fontSize: hp(1.7),
                    color: "white",
                    flex: 1,
                    marginVertical: 6,
                    paddingHorizontal: 3,
                  }}
                  className="flex-1 text-base mb-1  pl-3 tracking-wider"
                />
              </View>
            </View>
          </View>

          <View className="flex-row m-5">
            <View>
              <View>
                <Pressable
                  onPress={() => setShowDatePicker(true)}
                  style={{
                    height: hp(7),
                    backgroundColor: "#05243E",
                    width: hp(23),
                  }}
                  className="mx-3
                    flex-row
                    rounded-md
                    items-center"
                >
                  <Text
                    style={{ fontSize: hp(1.7), color: "white" }}
                    className="flex-1 text-base mb-1 pl-3 tracking-wider"
                  >
                    {date.toLocaleDateString()}
                  </Text>
                  <CalendarDaysIcon
                    color="white"
                    size={hp(3.7)}
                    style={{ marginHorizontal: 6 }}
                  />
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                  />
                )}
              </View>
            </View>
            <View>
              <View>
                <Pressable
                  onPress={() => setShowTimePicker(true)}
                  style={{
                    height: hp(7),
                    backgroundColor: "#05243E",
                    width: hp(23),
                  }}
                  className="mx-3
                    flex-row
                    rounded-md
                    items-center"
                >
                  <Text
                    style={{ fontSize: hp(1.7), color: "white" }}
                    className="flex-1 text-base mb-1 pl-3 tracking-wider"
                  >
                    {time.toLocaleTimeString([], timeOptions)}
                  </Text>
                  <ClockIcon
                    color="white"
                    size={hp(3.7)}
                    style={{ marginHorizontal: 6 }}
                  />
                </Pressable>
                {showTimePicker && (
                  <DateTimePicker
                    testID="timePicker"
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTime}
                  />
                )}
              </View>
            </View>
          </View>

          {/* Buttons  */}
          <View className="ml-8 flex-row">
            <Pressable
              style={{
                height: hp(7),
                width: hp(23),
              }}
              className=" border-2 border-cyan-600 rounded-md justify-center items-center"
              onPress={() => setModalVisible(false)}
            >
              <Text className="font-bold tracking-wider">cancel</Text>
            </Pressable>

            <Pressable
              style={{
                height: hp(7),
                width: hp(23),
              }}
              className=" ml-6 bg-cyan-600 rounded-md justify-center items-center"
              onPress={handleCreateTask}
            >
              <Text className="text-white font-bold tracking-wider">
                create
              </Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default TaskModal;
