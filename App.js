import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css";
import { Provider } from "react-native-paper";
import { MeasurementProvider } from "./src/components/context/MeasurementContext";
import Homescreen from "./src/screens/Homescreen";
import Loginscreen from "./src/screens/Loginscreen";
import Dashboardscreen from "./src/screens/Dashboardscreen";
import Measurementscreen from "./src/screens/Measurementscreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Homescreen'> */}
      <Stack.Navigator initialRouteName="Dashboardscreen">
        {/* <Stack.Navigator initialRouteName="Measurementscreen"> */}
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loginscreen"
          component={Loginscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboardscreen"
          component={Dashboardscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Measurementscreen"
          component={Measurementscreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <MeasurementProvider>
      <Provider>
        <RootNavigator />
      </Provider>
    </MeasurementProvider>
  );
}
