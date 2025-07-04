import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as SafeView } from 'react-native-safe-area-context'
import CustomerDataDisplay from '../components/measurement/CustomerDataDisplay'
import GetCustomerDetails from '../components/measurement/GetCustomerDetails'


const Measurementscreen = () => {
  return (
    <SafeView>
      <View>
        <GetCustomerDetails />
      </View>
      <View>
        <CustomerDataDisplay />
      </View>
    </SafeView>
  )
}

export default Measurementscreen