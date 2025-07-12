import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";

const NameSearchMobileWithDropdown = ({ data, setData }) => {
  const [openNames, setOpenNames] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    sendRequest("/customer/getnamelist", "POST").then((res) => {
      if (res.success) {
        const list = res.data.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setAllItems(list);
        setFilteredItems(list);
      }
    });
  }, []);

  const handleSearchChange = (text) => {
    setSearchText(text);
    const filtered = allItems.filter((item) =>
      item.label.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSearch = () => {
    const search = {
      name: selectedName || "",
      mobile: mobile.trim(),
    };

    if (search.name !== "") {
      sendRequest("/job/getAllJobDataByName", "POST", search).then((res) => {
        if (res.success) {
          const jobData = res.data.reverse();
          setData({
            customerData: res.customerData[0],
            jobData,
          });
        }
      });
    }

    if (search.mobile !== "") {
      sendRequest("/job/getAllJobDataByMobile", "POST", search).then((res) => {
        if (res.success) {
          const jobData = res.data.reverse();
          setData({
            customerData: res.customerData,
            jobData,
          });
        }
      });
    }
  };

  const handleReset = () => {
    setSelectedName(null);
    setMobile("");
    setData({});
  };

  return (
    <View className="my-5 mx-4 rounded-3xl">
      <Card
        className="p-4 border-l-8 border-rose-950"
        style={{ backgroundColor: "#fff1f2" }}
      >
        <Card.Content>
          <Text className="text-lg font-bold mb-4 text-rose-900">
            Search by Name or Mobile
          </Text>

          <DropDownPicker
            open={openNames}
            value={selectedName}
            items={filteredItems}
            setOpen={setOpenNames}
            setValue={setSelectedName}
            setItems={setFilteredItems}
            listMode="MODAL"
            searchable={true}
            searchTextInputProps={{
              onChangeText: handleSearchChange,
              value: searchText,
              placeholder: "Search name...",
            }}
            placeholder="Select Name"
            dropDownContainerStyle={{
              maxHeight: 200,
              zIndex: 1000,
              elevation: 1000,
            }}
          />
        </Card.Content>

        <Card.Actions className="my-2">
          <View className="flex-row w-full px-2 gap-2">
            <Button
              mode="contained"
              buttonColor="#8b0836"
              textColor="white"
              onPress={handleSearch}
              labelStyle={{ fontSize: 16 }}
              className="w-1/2"
            >
              Search
            </Button>
            <Button
              mode="outlined"
              textColor="#8b0836"
              onPress={handleReset}
              labelStyle={{ fontSize: 16 }}
              className="w-1/2"
            >
              Reset
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default NameSearchMobileWithDropdown;

{
  /* <Text className="text-center my-2 text-blue-700">OR</Text>

          <TextInput
            label="Enter Mobile"
            mode="outlined"
            keyboardType="numeric"
            value={mobile}
            onChangeText={setMobile}
            maxLength={10}
            outlineColor="#0d47a1"
            activeOutlineColor="#0d47a1"
          /> */
}
