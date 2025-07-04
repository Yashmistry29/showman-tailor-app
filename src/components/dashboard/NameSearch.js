import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { sendRequest } from '../../utils/Helpers/HelpersMethod';

const NameSearchMobileWithDropdown = ({ data ,setData }) => {
  const [openNames, setOpenNames] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [names, setNames] = useState([]);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    sendRequest('/customer/getnamelist', 'POST')
    .then(res => {
      if (res.success) {
        const list = res.data.map(item => ({
          label: item.name,
          value: item.id
        }));
        setAllItems(list);
        setFilteredItems(list);
      }
    })
  }, []);

  const handleSearchChange = (text) => {
    setSearchText(text);
    const filtered = allItems.filter(item =>
      item.label.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSearch = () => {
    const search = {
      name: selectedName || '',
      mobile: mobile.trim(),
    };

    if (search.name !== '') {
      sendRequest("/job/getAllJobDataByName", "POST", search).then(res => {
        if (res.success) {
          const jobData = res.data.reverse();
          setData({
            customerData: res.customerData,
            jobData,
          });
        }
      });
    }

    if (search.mobile !== '') {
      sendRequest("/job/getAllJobDataByMobile", "POST", search).then(res => {
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
    setMobile('');
    setData({});
    setPage(0);
  };

  return (
    <View className="m-4">
      <Card className="p-4 border-l-4 border-red-900 bg-blue-50">
        <Card.Content>
          <Text className="text-lg font-bold mb-4 text-blue-900">Search by Name or Mobile</Text>

          <DropDownPicker
            open={openNames}
            value={selectedName}
            items={filteredItems}
            setOpen={setOpenNames}
            setValue={setSelectedName}
            setItems={setFilteredItems}
            searchable={true}
            searchTextInputProps={{
              onChangeText: handleSearchChange,
              value: searchText,
              placeholder: 'Search name...'
            }}
            placeholder="Select Name"
            zIndex={3000}
            zIndexInverse={1000}
          />

          <Text className="text-center my-2 text-blue-700">OR</Text>

          <TextInput
            label="Enter Mobile"
            mode="outlined"
            keyboardType="numeric"
            value={mobile}
            onChangeText={setMobile}
            maxLength={10}
            outlineColor="#0d47a1"
            activeOutlineColor="#0d47a1"
          />
        </Card.Content>

        <Card.Actions className="flex-row justify-around mt-4">
          <Button
            mode="contained"
            buttonColor="#8b0836"
            textColor="white"
            onPress={handleSearch}
            className="w-32"
          >
            Search
          </Button>
          <Button
            mode="outlined"
            textColor="#8b0836"
            onPress={handleReset}
            className="w-32"
          >
            Reset
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default NameSearchMobileWithDropdown;
