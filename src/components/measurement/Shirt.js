import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useMeasurement } from "../context/MeasurementContext";
import {
  pocket_strip,
  shirt_type_dropdown,
} from "../../utils/data/InitialValue";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../form/CustomTextInput";

const dropDownStyle = {
  backgroundColor: "#fff1f2",
  borderColor: "#000",
  borderRadius: 4,
};

const Shirt = () => {
  const { sdata, setSdata } = useMeasurement();
  const [openShirtType, setOpenShirtType] = useState(false);
  const [shirtTypeItems, setShirtTypeItems] = useState(shirt_type_dropdown);
  const [selectedShirtType, setSelectedShirtType] = useState(sdata.shirt_type || null);
  const [openPocketStrip, setOpenPocketStrip] = useState(false);
  const [selectedPocketStrip, setSelectedPocketStrip] = useState(sdata.strip || null);
  const [pocketStripItems, setPocketStripItems] = useState(pocket_strip);
  const [page, setPage] = useState(1);
  // const [priceChange, setPriceChange] = useState(false);

  const slengthRef = useRef(null);
  const shoulderRef = useRef(null);
  const sleeveRef = useRef(null);
  const cuffRef = useRef(null);
  const chestRef = useRef(null);
  const waistRef = useRef(null);
  const seatRef = useRef(null);
  const pocketRef = useRef(null);
  const collarRef = useRef(null);
  const descRef = useRef(null);

  const handleChange = (value, name) => {
    setSdata((prev) => {
      const updatedData = { ...prev, [name]: value };

      // const validationErrors = validateSignin(updatedData,name);
      // setErrorsMessages(validationErrors);
      return updatedData;
    });
  };

  useEffect(() => {
    if (selectedShirtType) {
      setSdata((prev) => ({ ...prev, shirt_type: selectedShirtType }));
    }
  }, [selectedShirtType]);

  useEffect(() => {
    setSdata((prev) => ({ ...prev, strip: selectedPocketStrip }));
  }, [selectedPocketStrip]);

  // console.log(sdata);

  return (
    <View>
      <View className={`${page == 1 ? "" : "hidden"} px-2`}>
        <View className="flex flex-row justify-center my-4 gap-3 p-2">
          <View className="flex-col gap-2 w-1/2 py-2">
            <DropDownPicker
              placeholder="Shirt Type"
              open={openShirtType}
              value={selectedShirtType}
              items={shirtTypeItems}
              setOpen={setOpenShirtType}
              setValue={setSelectedShirtType}
              setItems={setShirtTypeItems}
              textStyle={{ fontSize: 16 }}
              style={dropDownStyle}
              zIndex={2000}
            />
            <CustomTextInput
              label="Length"
              value={sdata.s_length || ""}
              onChangeText={(value) => handleChange(value, "s_length")}
              returnKeyType="next"
              ref={slengthRef}
              onSubmitEditing={() => shoulderRef.current.focus()}
            />
            <CustomTextInput
              label="Shoulder"
              value={sdata.shoulder || ""}
              onChangeText={(value) => handleChange(value, "shoulder")}
              returnKeyType="next"
              ref={shoulderRef}
              onSubmitEditing={() => sleeveRef.current.focus()}
            />
            <CustomTextInput
              label="Sleeve"
              value={sdata.sleeve || ""}
              onChangeText={(value) => handleChange(value, "sleeve")}
              returnKeyType="next"
              ref={sleeveRef}
              onSubmitEditing={() => cuffRef.current.focus()}
            />
          </View>
          <View className="flex-col gap-2 w-1/2">
            <CustomTextInput
              className="w-full"
              label="Cuff"
              value={sdata.cuff || ""}
              onChangeText={(value) => handleChange(value, "cuff")}
              returnKeyType="next"
              ref={cuffRef}
              onSubmitEditing={() => chestRef.current.focus()}
            />
            <CustomTextInput
              className="w-full"
              label="Chest"
              value={sdata.chest || ""}
              onChangeText={(value) => handleChange(value, "chest")}
              returnKeyType="next"
              ref={chestRef}
              onSubmitEditing={() => waistRef.current.focus()}
            />
            <CustomTextInput
              className="w-full"
              label="Waist"
              value={sdata.waist || ""}
              onChangeText={(value) => handleChange(value, "waist")}
              returnKeyType="next"
              ref={waistRef}
              onSubmitEditing={() => seatRef.current.focus()}
            />
            <CustomTextInput
              className="w-full"
              label="Seat"
              value={sdata.seat || ""}
              onChangeText={(value) => handleChange(value, "seat")}
              returnKeyType="next"
              ref={seatRef}
            />
          </View>
        </View>
        <View className="flex flex-row justify-center my-4 gap-2">
          <Button
            textColor="#fff"
            buttonColor="#064f46"
            className="rounded-lg w-1/2"
            onPress={() => setPage(2)}
          >
            Next
          </Button>
        </View>
      </View>
      <View className={`${page == 2 ? "" : "hidden"} px-2`}>
        <View className="flex-col gap-2 w-full my-4 p-2">
          <DropDownPicker
            placeholder="Strip"
            open={openPocketStrip}
            value={selectedPocketStrip}
            items={pocketStripItems}
            setOpen={setOpenPocketStrip}
            setValue={setSelectedPocketStrip}
            setItems={setPocketStripItems}
            style={dropDownStyle}
            textStyle={{ fontSize: 16 }}
            disabled={pocketStripItems.length === 0}
            zIndex={1500}
          />

          <CustomTextInput
            label="Pocket"
            value={sdata.pocket || ""}
            onChangeText={(value) => handleChange(value, "pocket")}
            returnKeyType="next"
            ref={pocketRef}
            onSubmitEditing={() => collarRef.current.focus()}
          />
          <CustomTextInput
            label="Collar"
            value={sdata.collar || ""}
            onChangeText={(value) => handleChange(value, "collar")}
            returnKeyType="next"
            ref={collarRef}
            onSubmitEditing={() => descRef.current.focus()}
          />

          <CustomTextInput
            label="Description"
            value={sdata.description || ""}
            onChangeText={(value) => handleChange(value, "description")}
            returnKeyType="done"
            ref={descRef}
          />
          {/* {priceChange ?
            <View>
              <CustomTextInput
                label="Price"
                value={sdata.price || ""}
                onChangeText={(value) => handleChange(value, "price")}
                returnKeyType="next"
                // ref={slengthRef}
                // onSubmitEditing={() => shoulderRef.current.focus()}
              />
            </View> : <Text className="text-red-500 text-lg">{sdata.price}₹</Text>
          } */}
        </View>
        <View className="flex flex-row justify-center my-4 gap-2">
          <Button
            textColor="#fff"
            buttonColor="#064f46"
            className="rounded-lg w-1/2"
            onPress={() => setPage(1)}
          >
            Prev
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Shirt;
