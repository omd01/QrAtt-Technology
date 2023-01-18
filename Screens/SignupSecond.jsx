import { View, Text, TouchableOpacity } from "react-native";

import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import * as ImagePicker from "expo-image-picker";
import {Dropdown} from "../components/Dropdown"
import { Input } from "../components/InputFields";
import { ButtonD } from "../components/Buttons";

const SignupSecond = ({ navigation, route }) => {
  const [name, setName] = useState(null);
  const [pmobile, setPmobile] = useState(null);
  const [room, setRoom] = useState(null);
  const [cambar, setCambar] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [branch, setBranch] = useState(null);
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
          <Input
            icon={"account"}
            label={"Full Name"}
            val={name}
            setval={setName}
            iserror={false}
          />
          <Input
            icon={"phone"}
            label={"Parents Mobile"}
            val={pmobile}
            setval={setPmobile}
            iserror={false}
          />

          <Input
            icon={"door"}
            label={"Room No"}
            val={room}
            setval={setRoom}
            iserror={false}
          />

          
          <Dropdown data={data} setSelected={setBranch}  label={"Branch"} micon={"application-edit"}/>
        </View>

        <ButtonD value={"Submit"} onPress={handelSubmit} disabled={false} />
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
              style={{ marginHorizontal: 10, marginVertical: 5, marginTop: 20 }}
            />
            <ButtonD
              value={"Camera"}
              onPress={() => navigation.navigate("camera")}
              bgColor={Color.Secondary}
              textColor={Color.White}
              style={{ marginHorizontal: 10, marginVertical: 5,}}
            />

            <ButtonD
              value={"Cancel"}
              onPress={() => setCambar(false)}
              bgColor={Color.Secondary}
              textColor={"red"}
              style={{ marginHorizontal: 10, marginVertical: 5, }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SignupSecond;
