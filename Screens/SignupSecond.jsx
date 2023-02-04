import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "../components/Dropdown";
import { Input } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";
import * as yup from "yup";
import { Formik } from "formik";

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
  const [cambar, setCambar] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [newBranch, setNewBranch] = useState(null);
  const [error, setError] = useState([false, false]);
  const [oldValues, setOldValues] = useState(null);

  const data = [
    { key: "1", value: "Information Technology" },
    { key: "2", value: "Computer" },
    { key: "3", value: "Electronics" },
    { key: "5", value: "Machinical" },
    { key: "6", value: "Civil" },
    { key: "7", value: "Electrical" },
    { key: "8", value: "Ai" },
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
        // console.log(route.params.values);
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

  return (
    <Formik
      initialValues={{ name: "", pmobile: "", room: "" }}
      validateOnMount={true}
      onSubmit={(values) => {
        newBranch === null
          ? setError([true, false])
          : avatar === null
          ? setError([false, true])
          : setError([false, false]);
        if (newBranch !== null && avatar !== null) {
          console.log(oldValues);
          console.log(values);
          console.log(newBranch);
          console.log(avatar);
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
            {error[1] && (
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
                {error[0] && (
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

            <ButtonD
              value={"Submit"}
              onPress={handleSubmit}
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
