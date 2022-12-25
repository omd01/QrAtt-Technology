import { View, Text } from "react-native";
import React from "react";
import { Color, Size, Font } from "../constants/theme";
import Footer from "../components/Footer";

const History = ({ navigation }) => {
  return (
    <View
      style={{
        height: Size.Full,
        backgroundColor: Color.Primary,
      }}
    >
    <View style={{ flex: 1 }}>
      <Text>History</Text>
      </View><Footer navigation={navigation}screens={'history'}/>
    </View>
  );
}

export default History