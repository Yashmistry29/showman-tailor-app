import React from 'react'
import { Text, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView as View } from 'react-native-safe-area-context'
import logo from '../images/SM_Logo.png'
import { useFonts,Anton_400Regular } from '@expo-google-fonts/anton';


const Homescreen = ({navigation}) => {

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Loginscreen')
    }, 6000);
    return () => clearTimeout(timer);
  }, [])
  
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-stone-200">
      <Image source={logo} alt='Showman-Logo' className="w-96 h-64"></Image>
      <Text
        className="text-6xl p-4"
        style={{
          color: "rgb(124, 23, 23)",
          letterSpacing: 2,
          fontFamily: 'Anton_400Regular',
        }}>Showman<Text className="text-black"> Tailors</Text></Text>
      <ActivityIndicator size="large" color="rgb(124,23,23)" />
    </View>
  )
}

export default Homescreen