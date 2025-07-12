import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Checkbox, Icon } from "react-native-paper";
import CustomModal from "./CustomModal";

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
        disabled ? "bg-neutral-400" : "bg-rose-950"
      } flex flex-row items-center gap-2 px-4 py-2 rounded-full`}
    >
      <Icon source={icon} size={18} color="#fff" />
      <Text className="font-semibold text-lg text-white">{label}</Text>
    </View>
  </Pressable>
);

const MeasumentView = ({
  checked,
  handleChange,
  setPdata,
  setSdata,
  sdata,
  pdata,
}) => {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("");
  const [type, setType] = useState("");

  const handlePress = (mode, type) => {
    setMode(mode);
    setType(type);
    setVisible(true);
  };

  return (
    <View className="my-0 mx-3">
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        mode={mode}
        type={type}
        setSdata={setSdata}
        setPdata={setPdata}
        sdata={sdata}
        pdata={pdata}
      />
      {items.map((item) => (
        <View
          key={item.key}
          className="flex flex-row justify-between items-center gap-2 px-3"
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
          <View className="flex flex-row gap-2">
            <ActionButton
              icon="eye"
              label="View"
              type={item.key}
              onPress={() => handlePress("view", item.key)}
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
