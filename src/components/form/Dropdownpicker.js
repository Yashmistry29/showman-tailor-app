import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";

const Dropdownpicker = ({ selectedName, onNameSelect, setSelectedName }) => {
  const [openNames, setOpenNames] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    sendRequest("/customer/getnamelist", "POST").then((res) => {
      if (res.success) {
        const list = res.data.map((item) => ({
          label: item.name,
          value: item.id,
          job_ids: item.job_ids,
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

  const handleChangeValue = (value) => {
    const found = allItems.find((item) => item.value === value);
    if (found) {
      onNameSelect(found.value, found.job_ids.reverse());
    } else {
      onNameSelect(value, []);
    }
  };

  return (
    <DropDownPicker
      open={openNames}
      value={selectedName}
      items={filteredItems}
      setOpen={setOpenNames}
      setValue={setSelectedName} // Don't update here, use onChangeValue!
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
  );
};

export default Dropdownpicker;
