import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useMeasurement } from "../context/MeasurementContext";
import { belt_type, pocket_type } from "../../utils/data/InitialValue";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../form/CustomTextInput";
import { Button } from "react-native-paper";

const dropDownStyle = {
  backgroundColor: "#fff1f2",
  borderColor: "#000",
  borderRadius: 4,
};

const Pant = () => {
  const { pdata, setPdata } = useMeasurement();
  const [openBeltType, setOpenBeltType] = useState(false);
  const [beltTypeItems, setBeltTypeItems] = useState(belt_type);
  const [selectedBeltType, setSelectedBeltType] = useState(pdata.belt_type || null);
  const [openPocketType, setOpenPocketType] = useState(false);
  const [pocketTypeItems, setPocketTypeItems] = useState(pocket_type);
  const [selectedPocketType, setSelectedPocketType] = useState(pdata.pocket_type || null);
  const [page, setPage] = useState(1);

  const plengthRef = useRef(null);
  const waistRef = useRef(null);
  const jholoRef = useRef(null);
  const seatRef = useRef(null);
  const thighsRef = useRef(null);
  const kneeRef = useRef(null);
  const bottomRef = useRef(null);
  const chiptiRef = useRef(null);
  const backPocketRef = useRef(null);
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
    if (selectedBeltType) {
      setPdata((prev) => ({ ...prev, belt_type: selectedBeltType }));
    }
  }, [selectedBeltType]);

  useEffect(() => {
    setPdata((prev) => ({ ...prev, pocket_type: selectedPocketType }));
  }, [selectedPocketType]);

  // console.log(pdata);

  return (
    <View>
      <View className={`${page == 1 ? "" : "hidden"} px-2`}>
        <View className="flex flex-row justify-center my-4 gap-3 p-2">
          <View className="flex-col gap-2 w-1/2 py-2">
            <DropDownPicker
              placeholder="Belt Type"
              open={openBeltType}
              value={selectedBeltType}
              items={beltTypeItems}
              setOpen={setOpenBeltType}
              setValue={setSelectedBeltType}
              setItems={setBeltTypeItems}
              textStyle={{ fontSize: 16 }}
              style={dropDownStyle}
              zIndex={2000}
            />
            <CustomTextInput
              label="Length"
              value={pdata.p_length || ""}
              onChangeText={(value) => handleChange(value, "p_length")}
              returnKeyType="next"
              ref={plengthRef}
              onSubmitEditing={() => waistRef.current.focus()}
            />
            <CustomTextInput
              label="Waist"
              value={pdata.waist || ""}
              onChangeText={(value) => handleChange(value, "waist")}
              returnKeyType="next"
              ref={waistRef}
              onSubmitEditing={() => jholoRef.current.focus()}
            />
            <CustomTextInput
              label="Jholo"
              value={pdata.jholo || ""}
              onChangeText={(value) => handleChange(value, "jholo")}
              returnKeyType="next"
              ref={seatRef}
              onSubmitEditing={() => seatRef.current.focus()}
            />
          </View>
          <View className="flex-col gap-2 w-1/2">
            <CustomTextInput
              label="Seat"
              value={pdata.seat || ""}
              onChangeText={(value) => handleChange(value, "seat")}
              returnKeyType="next"
              ref={seatRef}
              onSubmitEditing={() => thighsRef.current.focus()}
            />
            <CustomTextInput
              label="Thighs"
              value={pdata.thighs || ""}
              onChangeText={(value) => handleChange(value, "thighs")}
              returnKeyType="next"
              ref={thighsRef}
              onSubmitEditing={() => kneeRef.current.focus()}
            />
            <CustomTextInput
              label="Knee"
              value={pdata.knee || ""}
              onChangeText={(value) => handleChange(value, "knee")}
              returnKeyType="next"
              ref={kneeRef}
              onSubmitEditing={() => bottomRef.current.focus()}
            />
            <CustomTextInput
              label="Bottom"
              value={pdata.bottom || ""}
              onChangeText={(value) => handleChange(value, "bottom")}
              returnKeyType="next"
              ref={bottomRef}
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
            placeholder="Pocket Type"
            open={openPocketType}
            value={selectedPocketType}
            items={pocketTypeItems}
            setOpen={setOpenPocketType}
            setValue={setSelectedPocketType}
            setItems={setPocketTypeItems}
            textStyle={{ fontSize: 16 }}
            style={dropDownStyle}
            zIndex={2000}
          />
          <CustomTextInput
            label="Chipti"
            value={pdata.chipti || ""}
            onChangeText={(value) => handleChange(value, "chipti")}
            returnKeyType="next"
            ref={chiptiRef}
            onSubmitEditing={() => backPocketRef.current.focus()}
          />
          <CustomTextInput
            label="Back Pocket"
            value={pdata.back_pocket || ""}
            onChangeText={(value) => handleChange(value, "back_pocket")}
            returnKeyType="next"
            ref={backPocketRef}
            onSubmitEditing={() => descRef.current.focus()}
          />
          <CustomTextInput
            label="Description"
            value={pdata.description || ""}
            onChangeText={(value) => handleChange(value, "description")}
            returnKeyType="done"
            ref={descRef}
          />
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

export default Pant;
