import React from "react";
import { View, Text } from "react-native";

const CustomerDataDisplay = ({ customer }) => {
  return (
    <View className="my-5 mx-4">
      <View className="bg-emerald-100 border-2 border-cyan-950 border-dashed shadow-md shadow-slate-950 px-4 py-3">
        <View className="mx-0 mb-1">
          <Text className="font-bold text-2xl">Customer Details</Text>
        </View>
        <View className="mx-0">
          <View className="flex flex-row justify-start items-center space-x-16">
            <Text className="font-semibold text-lg">{`Customer Id\t: ${
              customer === undefined ? customer.c_id : ""
            }`}</Text>
          </View>
          <Text className="font-semibold text-lg">{`Name\t\t\t\t\t\t: ${
            customer === undefined ? customer.name : ""
          }`}</Text>
          <Text className="font-semibold text-lg">{`Mobile\t\t\t\t\t\t: ${
            customer === undefined ? customer.phone : ""
          }`}</Text>
          <Text className="font-semibold text-lg">{`Address\t\t\t\t: ${
            customer === undefined ? customer.address : ""
          }`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDataDisplay;
