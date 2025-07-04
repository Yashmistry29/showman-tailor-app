import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

const TableRow = ({ item, customer, index, isExpanded, onPress }) => {
  const createDate = new Date(item.createdAt).toLocaleDateString();

  return (
    <View>
      <Pressable onPress={onPress} className={`flex-row px-4 py-2 bg-rose-100`}>
        <Text className="flex-1 text-center text-lg text-gray-800">
          {`${item.job_id} - ${item.shirt_quantity} Shirt - ${item.pant_quantity} Pant`}
        </Text>
      </Pressable>

      {isExpanded && (
        <View className="px-4 py-3 bg-gray-50">
          <Pressable onPress={() => console.log("View details pressed")}>
            <Text className="bg-rose-900 w-32 text-center text-white p-1 mt-2 rounded-lg border-2 shadow-xl">
              View details
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const Modal_Details = ({}) => {
  return <View>details</View>;
};

const FlatListTable = ({ data, setData }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const customer =
    data.customerData === undefined
      ? {
          c_id: "C_ID",
          name: "NAME",
          phone: "PHONE",
        }
      : data.customerData;

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle
    }));
  };

  console.log(data);

  return (
    <View className="m-5 bg-white rounded-lg shadow-md overflow-hidden z-1000">
      {/* Header */}
      <View className="flex-row bg-rose-950 px-4 py-2">
        <Text className="flex-1 text-center text-lg font-semibold text-white">
          {customer !== undefined
            ? `${customer.c_id} - ${customer.name} - ${customer.phone}`
            : "C_ID-NAME-PHONE"}
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={data.jobData}
        renderItem={({ item, index }) => (
          <TableRow
            item={item}
            customer={customer}
            index={index}
            isExpanded={!!expandedRows[index]}
            onPress={() => toggleRow(index)}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </View>
  );
};

export default FlatListTable;
