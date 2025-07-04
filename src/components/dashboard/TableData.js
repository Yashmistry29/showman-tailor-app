import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

const TableRow = ({ item, customer, index, isExpanded, onPress }) => (
  <View>
    <Pressable
      onPress={onPress}
      className={`flex-row px-4 py-2 bg-rose-100`}
    >
      <Text className="flex-1 text-start text-lg text-gray-800">{item.job_id}</Text>
      <Text className="flex-1 text-start text-lg text-gray-800">{customer.c_id}</Text>
      <Text className="flex-1 text-start text-lg text-gray-800">{customer.name}</Text>
    </Pressable>

    {isExpanded && (
      <View className="px-4 py-3 bg-gray-50">
        <Pressable onPress={() => console.log('View details pressed')}>
          <Text className="bg-rose-900 w-32 text-center text-white p-1 mt-2 rounded-lg border-2 shadow-xl">View details</Text>
        </Pressable>
      </View>
    )}
  </View>
);

const FlatListTable = ({ data, setData }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const customer = data.customerData[0]; // grab single customer

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle
    }));
  };

  return (
    <View className="m-5 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <View className="flex-row bg-rose-950 px-4 py-2">
        <Text className="flex-1 text-start text-lg font-semibold text-white">Job ID</Text>
        <Text className="flex-1 text-start text-lg font-semibold text-white">Customer ID</Text>
        <Text className="flex-1 text-start text-lg font-semibold text-white">Name</Text>
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
