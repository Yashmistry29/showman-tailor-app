import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-paper";
import Dropdownpicker from "../form/Dropdownpicker";
import DropDownPicker from "react-native-dropdown-picker";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";

const GetCustomerDetails = ({ customerDetails,setjobid }) => {
  const [selectedName, setSelectedName] = useState(null);

  const [openJob, setOpenJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  // console.log(selectedName);

  const handleNameSelect = (nameValue, jobIds) => {
    setSelectedName(nameValue);
    const newJobItems = (jobIds || []).map((jid) => ({
      label: `Job ${jid}`,
      value: jid,
    }));
    if (JSON.stringify(jobs) !== JSON.stringify(newJobItems)) {
      setJobs(newJobItems);
      setSelectedJob(null);
    }
  };

  useEffect(() => {
    if (selectedName) {
      sendRequest("/customer/getcustomer", "POST", { c_id: selectedName }).then(
        (res) => {
          if (res.success) {
            customerDetails(res.data);
          }
        }
      );
    }
  }, [selectedName]);

  const handlePress=()=>{
    setjobid(selectedJob);
    console.log("CustomerId:", selectedName);
    console.log("JobId:", selectedJob);
  }

  // console.log(jobs);

  return (
    <View
      className="mx-4 my-2 p-4 border-l-8 border-rose-950 rounded-3xl "
      style={{ backgroundColor: "#fff1f2" }}
    >
      {/* <View className="bg-emerald-100 border-2 border-cyan-950 border-dashed shadow-md shadow-slate-950 py-2 px-4"> */}
      <View className="px-1 my-2 z-20">
        <Dropdownpicker
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          onNameSelect={handleNameSelect}
        />
      </View>

      <View className="flex flex-row items-start mx-0 z-10">
        <View className="px-1 w-3/5">
          <DropDownPicker
            placeholder="Select Job"
            open={openJob}
            value={selectedJob}
            items={jobs}
            setOpen={setOpenJob}
            setValue={setSelectedJob}
            setItems={setJobs}
            disabled={jobs.length === 0}
            style={{
              backgroundColor: jobs.length === 0 ? "#e5e7eb" : "white",
              borderColor: jobs.length === 0 ? "#d1d5db" : "#ccc",
              opacity: jobs.length === 0 ? 0.6 : 1,
            }}
            zIndex={2000}
          />
        </View>

        <View className="px-2 pt-2 w-2/5">
          <Button
            // icon="magnify"
            textColor="#ffffff"
            buttonColor="#8b0836"
            className="rounded-lg"
            labelStyle={{ fontSize: 16 }}
            onPress={handlePress}
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
