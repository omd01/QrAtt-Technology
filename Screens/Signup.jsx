import { View, Text, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import { Input, InputSecure } from "../components/InputFields";

const Signup = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const data = {
    mobile,
    email,
    password,
    cpassword,
  };

  const setActivation = () => {
    navigation.navigate("signupSecond", { data: data });
  };

  return (
    <View style={{ height: Size.Full, backgroundColor: Color.Primary }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: Size.Midum,
          justifyContent: "center",
        }}
      >
        <View>
          <Text
            style={{
              letterSpacing: 1,
              alignSelf: "center",
              color: Color.White,
              fontSize: Size.Large + 5,
              fontFamily: Font.bold,
            }}
          >
            Create Account
          </Text>

          <Text
            style={{
              alignSelf: "center",
              color: Color.White,
              marginVertical: 1,
              fontSize: Size.Midum - 2,
              fontFamily: Font.light,
            }}
          >
            Please fill the input below here
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Input
              icon={"email"}
              label={"Email"}
              val={email}
              setval={setEmail}
              iserror={false}
            />

            <Input
              icon={"phone"}
              label={"Mobile"}
              val={mobile}
              setval={setMobile}
              iserror={false}
            />

            <InputSecure
              icon={"lock"}
              label={"Password"}
              val={password}
              setval={setPassword}
              iserror={false}
            />

            <InputSecure
              icon={"lock-check"}
              label={"Confirm Password"}
              val={cpassword}
              setval={setCPassword}
              iserror={false}
            />
          </View>

          <Button
            mode="contained"
            onPress={setActivation}
            textColor={Color.Dark}
            buttonColor={Color.Btn}
            contentStyle={{ height: Size.ExtraLarge }}
            labelStyle={{ fontSize: Size.Midum, fontFamily: Font.semiBold }}
            style={{ opacity: 0.9, marginHorizontal: 10 }}
            // disabled={!email || !mobile || !password || !cpassword}
          >
            Next
          </Button>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            flexDirection: "row",
            marginBottom: 20,
            alignSelf: "center",
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
            Already have a account ‎
          </Text>
          <Text
            style={{
              color: Color.Btn,
              fontSize: 12,
              opacity: 0.6,
              fontFamily: Font.semiBold,
            }}
          >
            sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Signup;
