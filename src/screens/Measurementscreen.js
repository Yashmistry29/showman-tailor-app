import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView as SafeView } from "react-native-safe-area-context";
import CustomerDataDisplay from "../components/measurement/CustomerDataDisplay";
import GetCustomerDetails from "../components/measurement/GetCustomerDetails";

const Measurementscreen = () => {
  const [customerDetails, setCustomerDetails] = useState({});

  console.log(customerDetails);
  return (
    <SafeView className="flex-1 justify-start bg-stone-200">
      <View className="mx-4 mt-4">
        <Text className="text-2xl font-bold text-rose-950">Find Customer</Text>
      </View>
      <View>
        <GetCustomerDetails customerDetails={setCustomerDetails} />
      </View>
      <View>
        <CustomerDataDisplay customer={customerDetails} />
      </View>
    </SafeView>
  );
};

export default Measurementscreen;
