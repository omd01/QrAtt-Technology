import { View, Text, ToastAndroid } from "react-native";
import { colors, Font, Size } from "../constants/theme";
import { ButtonD } from "../components/Buttons";
import { Input } from "../components/InputFields";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Formik } from "formik";
import { useEffect } from "react";
import { verifyUser } from "../redux/action";
import { clearError } from "../redux/reducer";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";

const forgetPasswordSchema = yup.object().shape({
  otp: yup.number().required("Otp is required"),
});

const Verify = () => {
  const { theme } = useContext(ThemeContext);
  const Color = colors[theme.mode];

  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (message) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      dispatch(clearMessage());
    }
  }, [loading, message]);

  return (
    <Formik
      initialValues={{ otp: "" }}
      validateOnMount={true}
      onSubmit={(values) => {
        dispatch(clearError());
        dispatch(verifyUser(values.otp));
      }}
      validationSchema={forgetPasswordSchema}
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
          {/* <Appbar.Header
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
        
        </Appbar.Header> */}

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
                  letterSpacing: 1,
                  alignSelf: "center",
                  color: Color.White,
                  fontSize: Size.Large,
                  fontFamily: Font.bold,
                }}
              >
                Verify Your Account
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
                Enter the OTP sent to your email address also check your spam
                folder
              </Text>

              <View style={{ marginVertical: Size.Small + 5 }}>
                <Input
                  icon={"form-textbox-password"}
                  keyboardType={"numeric"}
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
              {error ? (
                <Text
                  style={{
                    color: "red",
                    fontSize: Size.Midum - 2,
                    fontFamily: Font.light,
                    // marginVertical
                    marginTop: 5,
                    marginHorizontal: 15,
                  }}
                >
                  {error}
                </Text>
              ) : null}

              <ButtonD
                value={"Verify"}
                loading={loading}
                onPress={handleSubmit}
                disabled={isValid ? false : true}
                style={{
                  width: 150,
                  borderRadius: 50,
                  alignSelf: "center",
                  marginVertical: 5,
                }}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Verify;
