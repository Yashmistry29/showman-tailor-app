import { View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

const GetCustomerDetails = () => {
  const [openNames, setOpenNames] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [names, setNames] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  const [openJob, setOpenJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([
    { label: 'Tailor', value: 'tailor' },
    { label: 'Designer', value: 'designer' }
  ]);

  return (
    <View className="mx-4 my-2">
      {/* <View className="bg-emerald-100 border-2 border-cyan-950 border-dashed shadow-md shadow-slate-950 py-2 px-4"> */}
        <View className="mx-0 mb-2">
          <Text className="font-black text-xl">Find Customer</Text>
        </View>

        <View className="px-1 my-2 z-20">
          <DropDownPicker
            placeholder="Enter Name"
            searchable
            open={openNames}
            value={selectedName}
            items={names}
            setOpen={setOpenNames}
            setValue={setSelectedName}
            setItems={setNames}
            zIndex={3000}
          />
        </View>

        <View className="flex flex-row items-start mx-0 z-10">
          <View className="px-1 w-52">
            <DropDownPicker
              placeholder="Select Job"
              open={openJob}
              value={selectedJob}
              items={jobs}
              setOpen={setOpenJob}
              setValue={setSelectedJob}
              setItems={setJobs}
              zIndex={2000}
            />
          </View>

          <View className="px-2 pt-2">
            <Button
              icon="magnify"
              textColor="#ffffff"
              buttonColor="#155e75"
              className="rounded-lg w-20"
              onPress={() => {
                console.log('Name:', selectedName);
                console.log('Job:', selectedJob);
              }}
            >
              Search
            </Button>
          </View>
        </View>
      {/* </View> */}
    </View>
  );
};

export default GetCustomerDetails;
