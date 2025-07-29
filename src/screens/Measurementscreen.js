import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView as SafeView } from "react-native-safe-area-context";
import CustomerDataDisplay from "../components/measurement/CustomerDataDisplay";
import GetCustomerDetails from "../components/measurement/GetCustomerDetails";
import JobDetailCard from "../components/measurement/JobDetailCard";

const Measurementscreen = () => {
  return (
    <SafeView className="flex-1 justify-start bg-stone-100">
      <Text className="mx-4 mt-4 text-2xl font-bold text-rose-950">
        Find Customer
      </Text>
      <View className="z-20">
        <GetCustomerDetails />
      </View>
      <View className="z-10">
        <CustomerDataDisplay />
      </View>
      <View>
        <JobDetailCard />
      </View>
    </SafeView>
  );
};

export default Measurementscreen;
