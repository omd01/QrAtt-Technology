import { View, Text, TouchableOpacity } from "react-native";

import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import * as ImagePicker from "expo-image-picker";
import Inputs from "../components/Inputs";

const SignupSecond = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [pmobile, setPmobile] = useState("");
  const [room, setRoom] = useState("");
  const [branch, setBranch] = useState("");
  const [cambar, setCambar] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
        setCambar(false);
      }
      if (route.params.gallary) {
        handelGallary();
      }
    }
  }, [route]);

  const handelSubmit = () => {
    navigation.navigate("login");
  };

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
          Update Profile Photo
        </Text>

        <View style={{ marginTop: 5, marginBottom: 20 }}>
          <Inputs
            icon={"account"}
            label={"Full Name"}
            val={name}
            setval={setName}
            iserror={false}
          />
          <Inputs
            icon={"phone"}
            label={"Parents Mobile"}
            val={pmobile}
            setval={setPmobile}
            iserror={false}
          />

          <Inputs
            icon={"door"}
            label={"Room No"}
            val={room}
            setval={setRoom}
            iserror={false}
          />

          <Inputs
            icon={"book-open-blank-variant"}
            label={"Branch"}
            val={branch}
            setval={setBranch}
            iserror={false}
          />
        </View>
        <Button
          mode="contained"
          onPress={handelSubmit}
          textColor={Color.Dark}
          buttonColor={Color.Btn}
          contentStyle={{ height: Size.ExtraLarge }}
          labelStyle={{
            fontSize: Size.Midum,
            fontFamily: Font.semiBold,
          }}
          style={{ opacity: 0.9, marginHorizontal: 10 }}
          // disabled={!email || !mobile || !password || !cpassword}
        >
          Submit
        </Button>
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

            <Button
              mode="contained"
              onPress={handelGallary}
              textColor={Color.White}
              buttonColor={Color.Secondary}
              contentStyle={{ height: Size.ExtraLarge }}
              labelStyle={{
                fontSize: Size.Midum,
                fontFamily: Font.semiBold,
              }}
              style={{ marginHorizontal: 10, marginVertical: 5, marginTop: 20 }}
            >
              Gallary
            </Button>

            <Button
              mode="contained"
              onPress={() => navigation.navigate("camera")}
              textColor={Color.White}
              buttonColor={Color.Secondary}
              contentStyle={{ height: Size.ExtraLarge }}
              labelStyle={{
                fontSize: Size.Midum,
                fontFamily: Font.semiBold,
              }}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            >
              Camera
            </Button>
            <Button
              mode="contained"
              onPress={() => setCambar(false)}
              textColor={"red"}
              buttonColor={Color.Secondary}
              contentStyle={{ height: Size.ExtraLarge }}
              labelStyle={{
                fontSize: Size.Midum,
                fontFamily: Font.semiBold,
              }}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            >
              Cancel
            </Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SignupSecond;
