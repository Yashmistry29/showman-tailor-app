import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const CustomTextInput = ({
  value,
  onChangeText,
  ref,
  onSubmitEditing,
  returnKeyType,
  label,
}) => {
  return (
    <View>
      <TextInput
        mode="outlined"
        textColor="#000"
        label={label}
        className="w-full"
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        outlineColor="#000"
        activeOutlineColor="#000"
        autoCapitalize="none"
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        style={{ backgroundColor: "#fff1f2" }}
        submitBehavior="submit"
      />
    </View>
  );
};

export default CustomTextInput;
