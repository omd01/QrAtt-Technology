import { View, Text } from "react-native";
import React, { useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import Leav from "./Leav";
import Profile from "./Profile";
import History from "./History";
import Footer from "../components/Footer";
import Scanner from "./Scanner";

const Home = ({ navigation }) => {
  const [screen, setScreen] = useState("home");

  return (
    <View
      style={{
        height: Size.Full,
        backgroundColor: Color.Primary,
      }}
    >
      <View style={{ flex: 1,justifyContent:'center'}}>
        {screen === "leav" ? (
          <Leav />
        ) : screen === "history" ? (
          <History />
        ) : screen === "profile" ? (
          <Profile />
        ) : <Scanner/>}
      </View>
      <Footer screen={screen} setScreen={setScreen} />
    </View>
  );
};

export default Home;
