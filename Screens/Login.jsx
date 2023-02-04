import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Input, InputSecure } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
            paddingTop:30,
            paddingBottom:10,
            marginHorizontal: 5,
            justifyContent:'space-between'
          }}
        >
          <View>
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


          <View
            style={{ width: "40%" ,alignItems:'center',alignSelf:'center'}}
          >
            <TouchableOpacity onPress={() => navigation.navigate("signup")}
              style={{
                flexDirection: "row",
              }}>
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
                {`sign up`}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: Size.Full,
                backgroundColor: Color.White,
                height: 1,
                marginVertical:4
              }}
            ></View>
            <TouchableOpacity onPress={() => navigation.navigate("forgetPassword")}>
              <Text
                style={{
                  color: Color.White,
                  fontSize: 12,
                  opacity: 0.6,
                  fontFamily: Font.semiBold,
                }}
              >
                {`Forget password`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
};

export default Login;
