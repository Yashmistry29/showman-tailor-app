import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView as SafeView } from "react-native-safe-area-context";
import CustomerDataDisplay from "../components/measurement/CustomerDataDisplay";
import GetCustomerDetails from "../components/measurement/GetCustomerDetails";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { checked } from "../utils/data/InitialValue";
import { sendRequest } from "../utils/Helpers/HelpersMethod";
import { customStyle } from "../styles/style";
import { jobData } from "../utils/data/InitialValue";
import MeasumentView from "../components/measurement/MeasumentView";

const Measurementscreen = () => {
  const [jobId, setjobId] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({});
  const [sdata, setSdata] = useState(jobData.shirt_data);
  const [pdata, setPdata] = useState(jobData.pant_data);
  const [checkedData, setChecked] = useState(checked);
  const [returnDate, setReturnDate] = useState();

  // console.log(checkedData);
  const HandleChange = (e, name) => {
    const val = !checkedData[name];
    setChecked({ ...checkedData, [name]: val });
  };

  const handleReset = async () => {
    setCustomerDetails({});
    setChecked(checked); // Reset checkboxes to initial state
    setReturnDate(undefined); // Clear date picker

    const res = await sendRequest("/job/getId", "POST");
    if (res.success) setjobId(res.message);
  };

  useEffect(() => {
    sendRequest("/job/getId", "POST").then((res) => {
      if (res.success) {
        setjobId(res.message);
      }
    });
  }, []);

  return (
    <SafeView className="flex-1 justify-start bg-stone-200">
      <Text className="mx-4 mt-4 text-2xl font-bold text-rose-950">
        Find Customer
      </Text>
      <GetCustomerDetails
        customerDetails={setCustomerDetails}
        setjobid={setjobId}
      />
      <CustomerDataDisplay
        customer={customerDetails}
        setSdata={setSdata}
        setPdata={setPdata}
      />
      <Text className="font-bold mx-4 p-2 my-0 text-2xl">Job Id: {jobId}</Text>
      <MeasumentView
        checked={checkedData}
        handleChange={HandleChange}
        setSdata={setSdata}
        setPdata={setPdata}
        sdata={sdata}
        pdata={pdata}
      />
      <View className="my-5 mx-4 py-3">
        <View className="flex flex-row justify-evenly items-center mx-0 my-0">
          <Text className="text-lg font-black">
            Created At: {jobData.createdAt.toDateString()}
          </Text>
          <Text className="text-lg font-black">Total Price: 900</Text>
        </View>
        <View className="px-3 m-3">
          <View className="flex flex-row justify-evenly items-center gap-2">
            {/* <Text className="text-lg font-black">Return Date</Text> */}
            <DatePickerInput
              locale="en"
              label="Return Date"
              value={returnDate}
              onChange={(date) => setReturnDate(date)}
              mode="outlined"
              presentationStyle="pageSheet"
            />
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-center items-center mx-0 my-0 gap-2 px-3">
        <Button
          style={customStyle.submitButton}
          textColor="#fff"
          buttonColor="#065f46"
          className="w-1/2"
        >
          Submit
        </Button>
        <Button
          style={customStyle.resetButton}
          textColor="#000"
          buttonColor="#fff"
          className="w-1/2"
          onPress={handleReset}
        >
          Reset
        </Button>
      </View>
    </SafeView>
  );
};

export default Measurementscreen;
