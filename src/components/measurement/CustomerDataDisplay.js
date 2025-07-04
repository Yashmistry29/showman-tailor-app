import React from 'react'
import { View } from 'react-native'
import { Button, Card, TextInput, Text, Checkbox } from 'react-native-paper'

const CustomerDataDisplay = () => {
  return (
    <View className="my-5 mx-4">
      {/* <View className="bg-emerald-100 border-2 border-cyan-950 border-dashed shadow-md shadow-slate-950 px-4 py-3"> */}
        <View className="mx-0 mb-1">
          <Text className="font-black text-xl">Customer Details</Text>
        </View>
        <View className="mx-0">
          <View className="flex flex-row justify-start items-center space-x-16">
            <Text className="font-black text-base">c_id         :{` 2045`}</Text>
            <Text className="font-black text-base">Family: {`Yes`}</Text>
          </View>
          <Text className="font-black text-base">Name      :{` Yash Mistry`}</Text>
          <Text className="font-black text-base">Mobile    :{` 9624647090`}</Text>
          <Text className="font-black text-base">Address :{` Fort-Songadh`}</Text>
        </View>
      {/* </View> */}
    </View >
  )
}

export default CustomerDataDisplay