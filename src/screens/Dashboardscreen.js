import { View,Text } from 'react-native'
import React from 'react'
import Namesearch from '../components/dashboard/NameSearch'
import { SafeAreaView as SafeView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import TableData from '../components/dashboard/TableData'

const Dashboardscreen = () => {
  const [data, setData] = React.useState({});

  return (
    <SafeView className="flex-1 justify-start bg-neutral-300">
      <View className="mx-4 mt-4">
        <Text className="text-2xl font-bold text-rose-950">
          Name Search
        </Text>  
      </View>
      <Namesearch data={data} setData={setData} />
      <View>
        <TableData data={data} setData={setData} />
      </View>
    </SafeView>
  )
}

export default Dashboardscreen