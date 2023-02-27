import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HeaderComponent = ({ goBack = () => {}, text }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 42,
        paddingHorizontal: 12,
        position: "absolute",
        top: 60,
        zIndex: 1000,
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <AntDesign name="appstore1" size={24} color="black" />
      </TouchableOpacity>
      {/* <Text>{text}</Text> */}
    </View>
  );
};

export default HeaderComponent;
