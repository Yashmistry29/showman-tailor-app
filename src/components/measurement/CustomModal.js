import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Pant from "./Pant";
import Shirt from "./Shirt";
import Toast from "react-native-toast-message";

const CustomModal = ({ visible, setVisible, type }) => {
  return (
    <Portal>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
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
                <Pant />
              </View>
            ) : (
              <View className="items-center justify-center">
                <Text className="text-3xl text-center font-black text-violet-900">
                  Shirt Measurement
                </Text>
                <Text className="text-2xl text-center font-semibold text-violet-900">
                  શર્ટ નુ માપ
                </Text>
                <Shirt />
              </View>
            )}
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </Portal>
  );
};

export default CustomModal;
