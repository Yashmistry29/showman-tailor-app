import { View, Text } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import Pant from "./Pant";
import Shirt from "./Shirt";

const CustomModal = ({
  visible,
  setVisible,
  mode,
  type,
  setPdata,
  setSdata,
  sdata,
  pdata,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
      >
        <View className="bg-white m-3 p-2 rounded-md">
          {type === "pant" ? (
            <View>
              <Text className="text-3xl text-center font-black text-violet-900">
                Pant Measurement
              </Text>
              <Text className="text-2xl text-center font-semibold text-violet-900">
                પેન્ટ નુ માપ
              </Text>
              <Pant
                mode={mode}
                setVisible={setVisible}
                data={pdata}
                setData={setPdata}
              />
            </View>
          ) : (
            <View>
              <Text className="text-3xl text-center font-black text-violet-900">
                Shirt Measurement
              </Text>
              <Text className="text-2xl text-center font-semibold text-violet-900">
                શર્ટ નુ માપ
              </Text>
              <Shirt
                mode={mode}
                setVisible={setVisible}
                data={sdata}
                setData={setSdata}
              />
            </View>
          )}
        </View>
      </Modal>
    </Portal>
  );
};

export default CustomModal;
