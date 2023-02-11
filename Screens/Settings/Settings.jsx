import { View, Text, TouchableOpacity } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import {  colors, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/action";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";

const Settings = ({ navigation }) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]

  const dispatch = useDispatch();

  const handelLogOut = async () => {
    await dispatch(logOut())
     navigation.navigate("login")

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
             onPress={()=>navigation.navigate("notification")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              paddingHorizontal: 5,
              borderWidth: 0.5,
              borderColor: Color.Secondary,
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
             onPress={()=>navigation.navigate("theme")}

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
        <View style={{ width: "50%" ,marginVertical:10}}>
            
          <ButtonD
            value={"Log Out"}
            textColor={Color.White}
            style={{ backgroundColor: Color.Secondary ,borderRadius:50 }}
            onPress={handelLogOut}
          />
          <Text style={{color:Color.White,fontSize:Size.Midum,fontFamily:Font.regular,alignSelf:'center',marginVertical:5 }}>App Version 1.1.0</Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
