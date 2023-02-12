import { View, Text, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import {  colors, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import { Input, InputSecure } from "../../components/InputFields";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logOut, resetPassword } from "../../redux/action";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";


const resetPasswordSchema = yup.object().shape({
  otp: yup.number().required("OTP is required"),

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

const ResetPassword = ({ navigation }) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ otp: "",newPassword:"", cpassword: "" }}
      validateOnMount={true}
      onSubmit={async(values) =>
        {
       await dispatch(resetPassword(values.otp,values.newPassword))
       await dispatch(logOut())
        navigation.navigate("login")
      }}
      validationSchema={resetPasswordSchema}
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
              title="Reset Password"
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
                  fontSize: Size.Midum ,
                  fontFamily: Font.light,
                }}
              >
                {`Email has been sent to your registered email address. Also check your spam folder.`}
              </Text>
              
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
                  <Input
                  keyboardType={"numeric"}
                    icon={"form-textbox-password"}
                    label={"OTP"}
                    value={values.otp}
                    onChangeText={handleChange("otp")}
                    onBlur={handleBlur("otp")}
                  />
                  {errors.otp && touched.otp && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.otp}
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

               
              </View>

              <ButtonD
                value={"Update"}
                onPress={handleSubmit}
                disabled={isValid?false:true}
                loading={loading}
                style={{ width: 150, borderRadius: 50, alignSelf: "center" }}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ResetPassword;
