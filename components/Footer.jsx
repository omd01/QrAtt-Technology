import { View } from 'react-native'
import React from 'react'
import { Color, Size, Font } from "../constants/theme";
import { IconButton } from "react-native-paper";
const Footer = ({screen,setScreen}) => {
return(
  <View
  style={{
    backgroundColor: Color.Secondary,
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-around",
  }}
>
  <IconButton
    icon={screen === "home" ? "home" : "home-outline"}
    iconColor={screen === "home" ? Color.Btn : Color.White}
    size={30}
    onPress={() => setScreen("home")}
  />
  <IconButton
    icon={screen === "leave" ? "send" : "send-outline"}
    iconColor={screen === "leave" ? Color.Btn : Color.White}
    size={30}
    onPress={() => setScreen("leave")}
  />
  <IconButton
    icon={screen === "history" ? "history" : "history"}
    iconColor={screen === "history" ? Color.Btn : Color.White}
    size={30}
    onPress={() =>setScreen("history")}
  />
  <IconButton
    icon={screen === "profile" ? "account-eye" : "account-eye-outline"}
    iconColor={screen === "profile" ? Color.Btn : Color.White}
    size={30}
    onPress={() =>setScreen("profile")}
  />
</View>
)
}

export default Footer