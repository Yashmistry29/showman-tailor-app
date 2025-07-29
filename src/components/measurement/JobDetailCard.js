import { View, Text } from "react-native";
import React from "react";
import { Button, Divider, Icon } from "react-native-paper";
import MeasumentView from "./MeasumentView";
import { DatePickerInput } from "react-native-paper-dates";
import { customStyle } from "../../styles/style";
import { useMeasurement } from "../context/MeasurementContext";

const JobDetailCard = () => {
  const {
    id,
    createdAt,
    returnDate,
    setReturnDate,
    checkedData,
    setChecked,
    handleSubmit,
    resetMeasurement,
    totalPrice,
  } = useMeasurement();
  const handleReset = () => resetMeasurement();
  const submit = () => handleSubmit();

  const HandleChange = (e, name) => {
    setChecked({ ...checkedData, [name]: !checkedData[name] });
  };

  return (
    <View className="bg-white m-3 p-4 rounded-xl shadow-lg">
      <View className="mx-0 mb-3 flex flex-row items-center gap-3">
        <Icon source="tag-multiple" size={24} />
        <Text className="font-bold text-2xl">{`Job Details   #${id}`}</Text>
      </View>
      <MeasumentView checked={checkedData} handleChange={HandleChange} />
      <View className="flex-col justify-center gap-2 my-1">
        <Divider />
        <View className="flex-row justify-between items-center">
          <View className="my-2 flex flex-row items-center gap-1">
            <Icon source="calendar" size={18} />
            <Text className="font-bold text-lg">
              Created At: {createdAt.toDateString()}
            </Text>
          </View>
          <Text className="text-lg font-black">Total Price: {totalPrice}</Text>
        </View>
        <Divider />
      </View>
      <View className="flex flex-row items-center gap-2 my-2">
        <DatePickerInput
          locale="en"
          label="Return Date"
          value={returnDate}
          onChange={setReturnDate}
          mode="outlined"
          presentationStyle="modal" // Use modal for better UX
        />
        <Button
          style={customStyle.submitButton}
          textColor="#fff"
          className="w-1/3"
          onPress={submit}
          accessibilityRole="button"
          accessibilityLabel="Submit Measurement"
        >
          Submit
        </Button>
      </View>
      <View className="my-3">
        <Button
          style={customStyle.resetButton}
          textColor="#000"
          buttonColor="#fff"
          className="w-full"
          onPress={handleReset}
          accessibilityRole="button"
          accessibilityLabel="Reset Measurement"
        >
          Reset
        </Button>
      </View>
    </View>
  );
};

export default JobDetailCard;
