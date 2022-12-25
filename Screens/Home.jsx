import { View, Text } from "react-native";
import React from "react";
import { Color, Size, Font } from "../constants/theme";
import Footer from "../components/Footer";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        height: Size.Full,
        backgroundColor: Color.Primary,
      }}
    >
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      </View><Footer navigation={navigation}screens={'home'}/>
    </View>
  );
};

export default Home;
