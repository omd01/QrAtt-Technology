import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Appbar, Button, IconButton } from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";

const Settings = ({ navigation }) => {
  const handelLogOut = () => {
    console.log("log Out");
  };
  return (
    <View style={{ height: Size.Full }}>
      <Appbar.Header style={{ height: 45, backgroundColor: Color.Primary ,marginVertical:5 }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          iconColor={Color.White}
        />
        <Appbar.Content
          title="Settings"
          titleStyle={{ color: Color.White, fontFamily: Font.semiBold }}
        />
      </Appbar.Header>

      <View
        style={{
          flex: 1,
          backgroundColor: Color.Primary,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: Size.Full }}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("account")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingHorizontal: 5,
              borderWidth: 0.5,
              borderColor: Color.Secondary,
              marginVertical: 10,
            }}
          >
            <IconButton
              icon={"account-edit"}
              iconColor={Color.White}
              size={22}
            />
            <Text
              style={{
                fontSize: Size.Midum + 2,
                color: Color.White,
                fontFamily: Font.medium,
              }}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingHorizontal: 5,
              borderWidth: 0.5,
              borderColor: Color.Secondary,
              //   marginVertical:10
            }}
          >
            <IconButton icon={"bell"} iconColor={Color.White} size={22} />
            <Text
              style={{
                fontSize: Size.Midum + 2,
                color: Color.White,
                fontFamily: Font.medium,
              }}
            >
              Notification
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingHorizontal: 5,
              borderWidth: 0.5,
              borderColor: Color.Secondary,
              marginVertical: 10,
            }}
          >
            <IconButton
              icon={"brightness-4"}
              iconColor={Color.White}
              size={22}
            />
            <Text
              style={{
                fontSize: Size.Midum + 2,
                color: Color.White,
                fontFamily: Font.medium,
              }}
            >
              Theme
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "75%" ,marginVertical:10}}>
            
          <ButtonD
            value={"Log Out"}
            textColor={Color.White}
            style={{ backgroundColor: Color.Secondary }}
            onPress={handelLogOut}
          />
          <Text style={{color:Color.White,fontSize:Size.Midum,fontFamily:Font.regular,alignSelf:'center',marginVertical:5}}>Version 1.1.0</Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
