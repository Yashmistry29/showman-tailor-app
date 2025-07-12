import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-paper";

const CustomerDataDisplay = ({ customer }) => {
  // console.log(customer);
  return (
    // <View className="my-5 mx-4 border-2 rounded-xl border-rose-950 bg-rose-50 shadow-slate-900 shadow-md px-4 py-3">
    <View className="m-3 px-4 py-3">
      <View className="mx-0 mb-3">
        <Text className="font-bold text-2xl">Customer Details</Text>
      </View>
      <View className="flex flex-col justify-start gap-1 ">
        <View className="flex flex-row items-center gap-2">
          <Icon
          source="note"
          size={18}
          />
          <Text className="font-semibold text-lg">{`Customer Id\t\t: ${
            customer?.c_id ?? ""
          }`}</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
        <Icon
          source="account"
          size={18}
          />
        <Text className="font-semibold text-lg">{`Name\t\t\t\t\t\t\t: ${
          customer?.name ?? ""
        }`}</Text>
        </View>
        
        <View className="flex flex-row items-center gap-2">
        <Icon
          source="cellphone"
          size={18}
          />
        <Text className="font-semibold text-lg">{`Mobile\t\t\t\t\t\t\t: ${
          customer?.phone ?? ""
        }`}</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
        <Icon
          source="map-marker"
          size={18}
          />
        <Text className="font-semibold text-lg">{`Address\t\t\t\t\t: ${
          customer?.address ?? ""
        }`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDataDisplay;
