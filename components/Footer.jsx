import { View } from 'react-native'
import React from 'react'
import { colors } from "../constants/theme";
import { IconButton } from "react-native-paper";
import { useContext } from 'react';
import { ThemeContext } from '../constants/ThemeContext';
const Footer = ({screen,setScreen}) => {  
  const {theme} = useContext(ThemeContext);
const Color = colors[theme.mode]

return(
  <View
  style={{
    backgroundColor: Color.Secondary,
    zIndex:10,
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center'
  }}
>
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
    icon={screen === "home" ? "qrcode-scan" : "qrcode"}
    iconColor={screen === "home" ? Color.Btn : Color.White}
    size={30}
    onPress={() => setScreen("home")}
  />
  
  <IconButton
    icon={screen === "attendance" ? "swap-horizontal-bold" : "swap-horizontal"}
    iconColor={screen === "attendance" ? Color.Btn : Color.White}
    size={30}
    onPress={() => setScreen("attendance")}
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
