import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const Shirt = ({ mode, setVisible, data, setData }) => {
  const [page, setPage] = useState(1);

  const handleChange = (value, name) => {
    setData((prev) => {
      const updatedData = { ...prev, [name]: value };

      // const validationErrors = validateSignin(updatedData,name);
      // setErrorsMessages(validationErrors);
      return updatedData;
    });
  };

  return (
    <View>
      {mode === "view" ? (
        <View className="flex flex-row justify-evenly my-4">
          <View>
            <View className="flex-row py-0">
              <Text className="text-xl font-bold">{`Shirt Type\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Length\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Shoulder\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Sleeve\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Cuff\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Chest\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
          </View>
          <View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Waist\t\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Seat\t\t\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Pocket\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Collar\t\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Strip\t\t\t\t\t\t\t\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
            <View className="flex-row py-0">
              <Text className="text-xl font-black">{`Description\t: `}</Text>
              <Text className="text-xl font-semibold text-emerald-500">
                17.5
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {/* <View className={`${page == 1 ? "" : "hidden"} px-2`}> */}
          <View className="flex flex-row justify-center my-4 gap-3 p-2">
            <View className="w-1/2">
              <TextInput
                mode="outlined"
                textColor="#000"
                label="Shirt Type"
                className="w-full"
                value={data.shirt_type}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                label="Length"
                className="w-full"
                value={data.s_length}
                onChangeText={(value) => handleChange(value, "s_length")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                label="Shoulder"
                className="w-full"
                value={data.shoulder}
                onChangeText={(value) => handleChange(value, "shoulder")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Sleeve"
                value={data.sleeve}
                onChangeText={(value) => handleChange(value, "sleeve")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Cuff"
                value={data.cuff}
                onChangeText={(value) => handleChange(value, "cuff")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Chest"
                value={data.chest}
                onChangeText={(value) => handleChange(value, "chest")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
            </View>
            <View className="w-1/2">
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Waist"
                value={data.waist}
                onChangeText={(value) => handleChange(value, "waist")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Seat"
                value={data.seat}
                onChangeText={(value) => handleChange(value, "seat")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Pocket"
                value={data.pocket}
                onChangeText={(value) => handleChange(value, "pocket")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Collar"
                value={data.collar}
                onChangeText={(value) => handleChange(value, "collar")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Strip"
                value={data.strip}
                onChangeText={(value) => handleChange(value, "strip")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
              <TextInput
                mode="outlined"
                textColor="#000"
                className="w-full"
                label="Description"
                value={data.description}
                onChangeText={(value) => handleChange(value, "description")}
                dense
                returnKeyType="next"
                outlineColor="#000"
                activeOutlineColor="#000"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View className="flex flex-row justify-center my-4 gap-2">
            <Button
              textColor="#fff"
              buttonColor="#064f46"
              className="rounded-lg w-32"
              onPress={() => setPage(1)}
            >
              Save
            </Button>
            <Button
              textColor="#fff"
              buttonColor="#064f46"
              className="rounded-lg w-32"
              onPress={() => setPage(2)}
            >
              Submit
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Shirt;
