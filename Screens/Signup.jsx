import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React, { useState, useEffect } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Input, InputSecure } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";

import * as yup from "yup";
import { Formik } from "formik";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Mobile number is not valid"
    ).required("Mobile number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  cpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = ({ navigation }) => {

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

  return (
    <Formik
      initialValues={{ email: "", mobile: "", password: "", cpassword: "" }}
      validateOnMount={true}
      onSubmit={(values) => navigation.navigate("signupSecond",{values:values})}
      validationSchema={signupSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
                <View style={{ marginVertical: Size.Small }}>
                  <Input
                    icon={"email"}
                    keyboardType={"email-adress"}
                    label={"Email"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />

                  {errors.email && touched.email && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View style={{}}>
                  <Input
                    icon={"phone"}
                    label={"Mobile"}
                    keyboardType={"phone-pad"}
                    value={values.mobile}
                    onChangeText={handleChange("mobile")}
                    onBlur={handleBlur("mobile")}
                    iserror={false}
                  />
                  {errors.mobile && touched.mobile && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.mobile}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: Size.Small }}>
                  <InputSecure
                    icon={"lock"}
                    label={"Password"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View style={{}}>
                  <InputSecure
                    icon={"lock-check"}
                    label={"Confirm Password"}
                    value={values.cpassword}
                    onChangeText={handleChange("cpassword")}
                    onBlur={handleBlur("cpassword")}
                  />
                  {errors.cpassword && touched.cpassword && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.cpassword}
                    </Text>
                  )}
                </View>
              </View>
              <ButtonD
                value={"Next"}
                onPress={handleSubmit}
                disabled={isValid ? false : true}
              />
            </View>
          </View>

          <View>
            {keyboardStatus === "KeyboardHidden" && (
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
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Signup;
