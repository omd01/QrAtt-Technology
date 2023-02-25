import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Appbar,  IconButton } from "react-native-paper";
import { colors, Font, Size } from "../../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../../constants/ThemeContext";
const Account = ({ navigation }) => {
  const {theme} = useContext(ThemeContext);
const Color = colors[theme.mode]

  return (
    <View style={{ height: Size.Full }}>
      <Appbar.Header
        style={{
          height: 45,
          backgroundColor: Color.Primary,
          marginVertical: 5,
        }}
      >
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          iconColor={Color.White}
        />
        <Appbar.Content
          title="Account"
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
            onPress={() => navigation.navigate("editProfile")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingLeft: 25,
              backgroundColor: Color.Primary,
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: Size.Midum + 2,
                color: Color.White,
                fontFamily: Font.medium,
              }}
            >
              Edit profile
            </Text>
            <IconButton
              icon={"chevron-right"}
              iconColor={Color.White}
              size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("changePassword")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingLeft: 25,
              backgroundColor: Color.Primary,
              justifyContent: "space-between",
           
            }}
          >
            <Text
              style={{
                fontSize: Size.Midum + 2,
                color: Color.White,
                fontFamily: Font.medium,
              }}
            >
              Change password
            </Text>
            <IconButton
              icon={"chevron-right"}
              iconColor={Color.White}
              size={22}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
