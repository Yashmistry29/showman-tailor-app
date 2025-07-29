import { Pressable, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import Dropdownpicker from "../form/Dropdownpicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useMeasurement } from "../context/MeasurementContext";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";

const GetCustomerDetails = () => {
  const {
    setCustomerDetails,
    setjobId,
    selectedName,
    selectedJob,
    setSelectedName,
    setSelectedJob,
    setPdata,
    setSdata,
    initialJobData,
    setQuantities,
  } = useMeasurement();

  const [openJob, setOpenJob] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleNameSelect = (nameValue, jobIds) => {
    console.log(nameValue, jobIds);
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
            // console.log(res.data);
            setCustomerDetails(res.data); // update context
          }
        }
      );
    }
  }, [selectedName, setCustomerDetails]);

  const handlePress = () => {
    setjobId(selectedJob); // update context
    console.log("CustomerId:", selectedName);
    console.log("JobId:", selectedJob);
    // call /getjobData and set Sdata and Pdata
    sendRequest("/job/getJob", "POST", { job_id: selectedJob })
      .then((res) => {
        if (res.success) {
          console.log(res.data.shirt_data, res.data.pant_data);
          if (
            res.data.shirt_data === null ||
            res.data.shirt_data === undefined
          ) {
            // setQuantities((prev) => ({ shirt: 1, pant: prev.pant }));
            setSdata(initialJobData.shirt_data);
          } else {
            // setQuantities((prev) => ({
            //   shirt: res.data.shirt_quantity,
            //   pant: prev.pant,
            // }));
            setSdata(res.data.shirt_data);
          }

          if (res.data.pant_data === null || res.data.pant_data === undefined) {
            // setQuantities((prev) => ({ shirt: prev.shirt, pant: 1 }));
            setPdata(initialJobData.pant_data);
          } else {
            // setQuantities((prev) => ({
            //   shirt: prev.shirt,
            //   pant: res.data.pant_quantity,
            // }));
            setPdata(res.data.pant_data);
          }
        }
      })
      .catch((err) => {
        console.log(err, "Error fetching JobData");
      });
  };

  return (
    <View
      className="mx-4 my-2 p-4 rounded-2xl shadow-lg shadow-slate-950"
      style={{ backgroundColor: "#fff2f1" }}
    >
      <View className="my-2 z-20">
        <Dropdownpicker
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          onNameSelect={handleNameSelect}
        />
      </View>

      <View className="flex flex-row items-center justify-evenly gap-2 z-50">
        <View className="w-3/5" style={{ minHeight: 10, zIndex: 2000 }}>
          <DropDownPicker
            placeholder="Select Job"
            open={openJob}
            value={selectedJob}
            items={jobs}
            setOpen={setOpenJob}
            setValue={setSelectedJob}
            setItems={setJobs}
            disabled={jobs.length === 0}
            listMode="SCROLLVIEW"
            style={{
              backgroundColor: jobs.length === 0 ? "#dfdfdf" : "white",
              borderColor: "#000",
            }}
            dropDownContainerStyle={{
              maxHeight: 200,
            }}
            zIndex={2000}
          />
        </View>

        <View className=" w-2/5 pr-2">
          <Pressable onPress={handlePress}>
            <Text className="bg-rose-900 text-white text-center py-4 rounded-lg">
              Search
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GetCustomerDetails;
