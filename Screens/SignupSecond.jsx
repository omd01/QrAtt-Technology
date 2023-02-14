import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Appbar, Avatar } from "react-native-paper";
import { Size, Font, colors } from "../constants/theme";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "../components/Dropdown";
import { Input } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import mime from "mime";
import { signUp } from "../redux/action";
import { clearError } from "../redux/reducer";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";


const secondSignupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  pmobile: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Mobile number is not valid"
    )
    .required("Parents mobile number is required"),
  room: yup.number().required("Room number is required"),
});

const SignupSecond = ({ navigation, route }) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]

  const [cambar, setCambar] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [newBranch, setNewBranch] = useState(null);
  const [localError, setLocalError] = useState([false, false]);
  const [oldValues, setOldValues] = useState(null);
  const dispatch = useDispatch();
  const { error, loading ,isAuthenticated} = useSelector((state) => state.auth);

  const data = [
    { key: "1", value: "Information Technology" },
    { key: "2", value: "Computer Engineering" },
    { key: "3", value: "Mechanical Engineering" },
    { key: "5", value: "Electrical Engineering" },
    { key: "6", value: "Electronic Engineering" },
    { key: "7", value: "Civil Engineering" },
    { key: "8", value: "Ai and Machine Learning" },
  ];

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
        setCambar(false);
      }
      if (route.params.gallary) {
        handelGallary();
      }
      if (route.params.values) {
        setOldValues(route.params.values);
      }
    }
  }, [route]);

  const handelGallary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      setCambar(false);
    }
    if (result.canceled) {
      setCambar(true);
    }
  };
 useEffect(() => {
    isAuthenticated &&  navigation.navigate("home")
  }, [loading])


  return (
    <Formik
      initialValues={{ name: "", pmobile: "", room: ""}}
      validateOnMount={true}
      onSubmit={(values) => {
        newBranch === null
          ? setLocalError([true, false])
          : avatar === null
          ? setLocalError([false, true])
          : setLocalError([false, false]);
        if (newBranch !== null && avatar !== null) {
          const myForm = new FormData();
          myForm.append('email', oldValues.email);
          myForm.append('mobile', oldValues.mobile);
          myForm.append('password', oldValues.password);
          myForm.append('branch', newBranch);
          myForm.append('name', values.name);
          myForm.append('parentsMob', values.pmobile);
          myForm.append('roomNo', values.room);
          myForm.append('avatar', {
            uri: avatar,
            type: mime.getType(avatar),
            name: avatar.split("/").pop(),
          });
          dispatch(clearError());
          dispatch(signUp(myForm))

        }
      }}
      validationSchema={secondSignupSchema}
    
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
        <View
          style={{
            height: Size.Full,
            justifyContent: "center",
            backgroundColor: Color.Primary,
          }}
        >
           <Appbar.Header
            style={{
              height: 45,
              backgroundColor: Color.Primary,
              
            }}
          >
            <Appbar.BackAction
              onPress={() => navigation.goBack()}
              iconColor={Color.White}
            />
          </Appbar.Header>
          <View
            pointerEvents={cambar ? "none" : "auto"}
            style={{
              flex: 1,
              paddingHorizontal: Size.Midum,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setCambar(true)}
              style={{
                marginBottom: Size.Small,
                height: 100,
                width: 100,
                alignSelf: "center",
              }}
            >
              {avatar ? (
                <Avatar.Image source={{ uri: avatar }} size={100} />
              ) : (
                <Avatar.Icon
                  size={130}
                  icon={"camera-iris"}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: Color.Secondary,
                    borderRadius: Size.ExtraLarge,
                    borderWidth: Size.Small,
                    borderColor: "#54417C",
                  }}
                />
              )}
            </TouchableOpacity>

            <Text
              style={{
                alignSelf: "center",
                color: Color.White,
                fontFamily: Font.light,
                fontSize: Size.Midum,
              }}
            >
              {`Add Profile Photo`}
            </Text>
            {localError[1] && (
              <Text
                style={{
                  alignSelf: "center",
                  color: "red",
                  fontFamily: Font.light,
                }}
              >
                {`Plese set profile photo`}
              </Text>
            )}
            <View style={{ marginTop: 5, marginBottom: 20 }}>
              <View style={{ marginVertical: Size.Small }}>
                <Dropdown
                  data={data}
                  setSelected={setNewBranch}
                  label={"Branch"}
                  micon={"application-edit"}
                />
                {localError[0] && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: Font.light,
                      marginLeft: 15,
                    }}
                  >
                    {`Branch is required`}
                  </Text>
                )}
              </View>

              <View style={{}}>
                <Input
                  icon={"account"}
                  label={"Full Name"}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                {errors.name && touched.name && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: Font.light,
                      marginLeft: 15,
                    }}
                  >
                    {errors.name}
                  </Text>
                )}
              </View>
              <View style={{ marginVertical: Size.Small }}>
                <Input
                  icon={"phone"}
                  keyboardType={"phone-pad"}
                  label={"Parents Mobile"}
                  value={values.pmobile}
                  onChangeText={handleChange("pmobile")}
                  onBlur={handleBlur("pmobile")}
                />
                {errors.pmobile && touched.pmobile && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: Font.light,
                      marginLeft: 15,
                    }}
                  >
                    {errors.pmobile}
                  </Text>
                )}
              </View>
              <View style={{}}>
                <Input
                  icon={"door"}
                  keyboardType={"phone-pad"}
                  label={"Room No"}
                  value={values.room}
                  onChangeText={handleChange("room")}
                  onBlur={handleBlur("room")}
                />
                {errors.room && touched.room && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: Font.light,
                      marginLeft: 15,
                    }}
                  >
                    {errors.room}
                  </Text>
                )}
              </View>
            </View>
            {error ? (
                    <Text
                      style={{
                        color: "red",
                        fontSize: Size.Midum - 2,
                        fontFamily: Font.light,
                        // marginVertical
                        marginTop:5,
                      marginHorizontal:15
                      }}
                    >
                      {error}
                    </Text>
                  ) : null}
            <ButtonD
              value={"Submit"}
              onPress={handleSubmit}
              loading={loading}
              disabled={isValid ? false : true}
            />
          </View>
          {cambar ? (
            <View
              style={{
                backgroundColor: Color.Opacity,
                flex: 1,
                height: Size.Full,
                width: Size.Full,
                position: "absolute",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  padding: Size.Small,
                  borderTopEndRadius: 40,
                  borderTopStartRadius: 40,
                  backgroundColor: Color.Primary,
                  borderWidth: 2,
                  borderColor: Color.White,
                  borderBottomWidth: 0,
                }}
              >
                <Text
                  style={{
                    color: Color.White,
                    fontSize: Size.Midum + 2,
                    fontFamily: Font.semiBold,
                    alignSelf: "center",
                    marginVertical: 10,
                  }}
                >
                  Choose Profile From
                </Text>

                <ButtonD
                  value={"Gallary"}
                  onPress={handelGallary}
                  bgColor={Color.Secondary}
                  textColor={Color.White}
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 5,
                    marginTop: 20,
                  }}
                />
                <ButtonD
                  value={"Camera"}
                  onPress={() => navigation.navigate("camera")}
                  bgColor={Color.Secondary}
                  textColor={Color.White}
                  style={{ marginHorizontal: 10, marginVertical: 5 }}
                />

                <ButtonD
                  value={"Cancel"}
                  onPress={() => setCambar(false)}
                  bgColor={Color.Secondary}
                  textColor={"red"}
                  style={{ marginHorizontal: 10, marginVertical: 5 }}
                />
              </View>
            </View>
          ) : null}
        </View>
      )}
    </Formik>
  );
};

export default SignupSecond;
