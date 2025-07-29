import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-paper";
import { useMeasurement } from "../context/MeasurementContext";

const CustomerDataDisplay = () => {
  const { customerDetails } = useMeasurement();
  // console.log(customer);
  return (
    <View className="m-3 p-5 rounded-2xl shadow-bg-slate-950 shadow-md bg-white">
      <View className="mx-0 mb-3 flex flex-row items-center gap-3">
        <Icon source="card-account-details" size={24} />
        <Text className="font-bold text-2xl">Customer Details</Text>
      </View>
      <View className="flex flex-col justify-start gap-1 ">
        <View className="flex flex-row items-center gap-2">
          <Icon source="note" size={18} />
          <Text className="font-semibold text-lg">{`Customer Id\t\t: ${
            customerDetails?.c_id || ""
          }`}</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <Icon source="account" size={18} />
          <Text className="font-semibold text-lg">{`Name\t\t\t\t\t\t\t: ${
            customerDetails?.name || ""
          }`}</Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <Icon source="cellphone" size={18} />
          <Text className="font-semibold text-lg">{`Mobile\t\t\t\t\t\t\t: ${
            customerDetails?.phone || ""
          }`}</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <Icon source="map-marker" size={18} />
          <Text className="font-semibold text-lg">{`Address\t\t\t\t\t: ${
            customerDetails?.address || ""
          }`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDataDisplay;
