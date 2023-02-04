import { View, Text, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import React, { useState } from "react";
import { InputSecure } from "../../components/InputFields";
import * as yup from "yup";
import { Formik } from "formik";

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),

  newPassword: yup
    .string()
    .required("New Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  cpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

const ChangePassword = ({ navigation }) => {

  const handelSubmit = () => {
    console.log();
  };

  return (
    <Formik
      initialValues={{ oldPassword: "",newPassword:"", cpassword: "" }}
      validateOnMount={true}
      onSubmit={(values) =>
        console.log(values)
      }
      validationSchema={changePasswordSchema}
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
              title="Chnage Password"
              titleStyle={{ color: Color.White, fontFamily: Font.semiBold }}
            />
          </Appbar.Header>

          <View
            style={{
              flex: 1,
              backgroundColor: Color.Primary,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                paddingHorizontal: Size.Midum,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: Color.White,
                  marginVertical: 1,
                  marginHorizontal: 4,
                  fontSize: Size.Midum - 2,
                  fontFamily: Font.light,
                }}
              >
                {`Note:- Your Password must be more than eight characters long and include a combination of numbers, letters and special characters (!$@%&).`}
              </Text>
              <View style={{ marginTop: 5, marginBottom: 20 }}>
                <View style={{ marginVertical: Size.Small }}>
                  <InputSecure
                    icon={"lock"}
                    label={"oldPassword"}
                    value={values.oldPassword}
                    onChangeText={handleChange("oldPassword")}
                    onBlur={handleBlur("oldPassword")}
                  />
                  {errors.oldPassword && touched.oldPassword && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.oldPassword}
                    </Text>
                  )}
                </View>


                <View style={{}}>
                  <InputSecure
                    icon={"lock"}
                    label={"New Password"}
                    value={values.newPassword}
                    onChangeText={handleChange("newPassword")}
                    onBlur={handleBlur("newPassword")}
                  />
                  {errors.newPassword && touched.newPassword && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.newPassword}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: Size.Small }}>
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

                <TouchableOpacity
                  onPress={() => navigation.navigate("forgetPassword")}
                >
                  <Text
                    style={{
                      // alignSelf: "center",
                      color: Color.Btn,
                      marginVertical: 1,
                      marginHorizontal: 10,
                      fontSize: Size.Midum - 2,
                      fontFamily: Font.light,
                    }}
                  >
                    {`Forget Password`}
                  </Text>
                </TouchableOpacity>
              </View>

              <ButtonD
                value={"Update"}
                onPress={handleSubmit}
                disabled={isValid?false:true}
                style={{ width: 150, borderRadius: 50, alignSelf: "center" }}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;
