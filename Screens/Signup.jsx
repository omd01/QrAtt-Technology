import { View, Text, TouchableOpacity ,Keyboard} from "react-native";
import React, { useState,useEffect } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Input, InputSecure } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";

const Signup = ({ navigation }) => {
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);
  const data = {
    mobile,
    email,
    password,
    cpassword,
  };
  const [keyboardStatus, setKeyboardStatus] = useState("KeyboardHidden");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("KeyboardShown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("KeyboardHidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


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
          <ButtonD value={"Next"} onPress={setActivation} disabled={false} />
        </View>
      </View>

      <View>
      {keyboardStatus === "KeyboardHidden" &&
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
            {`Already have a account `}
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
}
      </View>
    </View>
  );
};
export default Signup;
