import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { Size, Font, colors } from "../constants/theme";
import { Input, InputSecure } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";
import { clearError } from "../redux/reducer";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});

const Login = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);
  const Color = colors[theme.mode];
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    isAuthenticated && navigation.navigate("home");
  }, [loading]);


  const backAction = () => {
   
    if (isAuthenticated === false) {
      BackHandler.exitApp();
    }
    return false;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values, action) => {
        dispatch(clearError());
        dispatch(login(values));
        action.resetForm();
      }}
      validationSchema={loginSchema}
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
                paddingTop: 30,
                paddingBottom: 10,
                marginHorizontal: 5,
                justifyContent: "space-between",
              }}
            >
              <View>
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

                <View style={{ marginVertical: 20 }}>
                  <ButtonD
                    value={"Log In"}
                    onPress={handleSubmit}
                    disabled={isValid ? false : true}
                    loading={loading}
                  />
                </View>
              </View>

              <View
                style={{
                  width: "40%",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("signup")}
                  style={{
                    flexDirection: "row",
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
                    {`sign up`}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: Size.Full,
                    backgroundColor: Color.White,
                    height: 1,
                    marginVertical: 4,
                  }}
                ></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("forgetPassword")}
                >
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
      )}
    </Formik>
  );
};

export default Login;
