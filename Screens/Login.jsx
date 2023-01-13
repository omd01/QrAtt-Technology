import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Button } from "react-native-paper";
import { Input, InputSecure } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = () => {
    navigation.navigate("home");
  };
  return (
    <View style={{ height: Size.Full, backgroundColor: Color.Secondary }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              letterSpacing: 1,
              fontSize: Size.Large + 5,
              fontFamily: Font.bold,
              color: Color.White,
            }}
          >
            Welcome Back !
          </Text>
          <Text
            style={{
              color: Color.White,
              fontSize: Size.Midum - 2,
              fontFamily: Font.light,
            }}
          >
            Login if already have an account
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: Color.Primary,
            borderWidth: 2,
            borderColor: Color.White,
            borderBottomWidth: 0,
            borderRadius: Size.ExtraLarge + 10,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            paddingHorizontal: Size.Midum,
            paddingVertical: Size.Large + 20,
            marginHorizontal: 5,
          }}
        >
          <View style={{ height: Size.Full }}>
            <Input
              icon={"email"}
              label={"Email"}
              val={email}
              setval={setEmail}
              iserror={false}
            />
            <InputSecure
              icon={"lock"}
              label={"Password"}
              val={password}
              setval={setPassword}
              iserror={false}
            />
            <View style={{ marginVertical: 10 }}>
              <ButtonD
                value={"Log In"}
                onPress={handelSubmit}
                disabled={false}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: Color.White,
                fontSize: 12,
                opacity: 0.6,
                fontFamily: Font.semiBold,
              }}
            >
              {`New to QrAtt `}
            </Text>
            <Text
              style={{
                color: Color.Btn,
                fontSize: 12,
                opacity: 0.6,
                fontFamily: Font.semiBold,
              }}
            >
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
