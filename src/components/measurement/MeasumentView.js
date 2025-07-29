import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Checkbox, Icon } from "react-native-paper";
import CustomModal from "./CustomModal";
import { useMeasurement } from "../context/MeasurementContext";

const items = [
  {
    key: "pant",
    label: "Pant",
  },
  {
    key: "shirt",
    label: "Shirt",
  },
];

const ActionButton = ({ icon, label, onPress, disabled }) => (
  <Pressable onPress={onPress} disabled={disabled}>
    <View
      className={`${
        disabled ? "bg-neutral-300" : "bg-rose-950"
      } flex flex-row items-center gap-2 px-4 py-2 rounded-xl`}
    >
      <Icon source={icon} size={18} color="#fff" />
      <Text className="font-semibold text-lg text-white">{label}</Text>
    </View>
  </Pressable>
);

const QuantityButton = ({ icon, onPress, disabled }) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    className="rounded-md px-1 mx-1"
    style={{
      backgroundColor: disabled ? "#dfdfdf" : "#4c0519",
    }}
  >
    <Icon source={icon} size={20} color="#fff" />
  </Pressable>
);

const MeasumentView = ({ checked, handleChange }) => {
  const { quantities, setQuantities } = useMeasurement();
  const [visible, setVisible] = useState(false);
  // const [mode, setMode] = useState("");
  const [type, setType] = useState("");

  const handlePress = (mode, type) => {
    // setMode(mode);
    setType(type);
    setVisible(true);
  };

  const handleQuantityChange = (key, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(1, prev[key] + delta),
    }));
  };

  return (
    <View className="p-0 m-0">
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        // mode={mode}
        type={type}
      />
      {items.map((item) => (
        <View
          key={item.key}
          className="flex flex-row justify-between items-center"
        >
          <Checkbox.Item
            label={item.label}
            position="leading"
            labelStyle={{
              fontSize: 18,
              fontWeight: checked[item.key] ? "800" : "100",
              color: checked[item.key] ? "#4c0519" : "#a3a3a3",
            }}
            labelVariant="titleMedium"
            color="#4c0519"
            status={checked[item.key] ? "checked" : "unchecked"}
            onPress={(e) => handleChange(e, item.key)}
          />
          <View className="flex flex-row items-center gap-2">
            <QuantityButton
              icon="minus"
              onPress={() => handleQuantityChange(item.key, -1)}
              disabled={quantities[item.key] <= 1 || !checked[item.key]}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                width: 28,
                textAlign: "center",
                color: "#4c0519",
              }}
            >
              {quantities[item.key]}
            </Text>
            <QuantityButton
              icon="plus"
              onPress={() => handleQuantityChange(item.key, 1)}
              disabled={!checked[item.key]}
            />
            <ActionButton
              icon="pencil"
              label="Edit"
              onPress={() => handlePress("edit", item.key)}
              disabled={!checked[item.key]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default MeasumentView;
