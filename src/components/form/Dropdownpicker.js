import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";
import { View } from "react-native";
import { useMeasurement } from "../context/MeasurementContext";

const Dropdownpicker = ({ selectedName, onNameSelect, setSelectedName }) => {
  const { nameList } = useMeasurement();

  const [openNames, setOpenNames] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredItems(nameList);
  }, [nameList]);

  const handleSearchChange = (text) => {
    setSearchText(text);
    const filtered = nameList.filter((item) =>
      item.label.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleChangeValue = (value) => {
    const found = nameList.find((item) => item.value === value);
    if (found) {
      onNameSelect(found.value, found.job_ids);
    } else {
      onNameSelect(value, []);
    }
  };

  return (
    <View>
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
        onChangeValue={handleChangeValue}
      />
    </View>
  );
};

export default Dropdownpicker;
