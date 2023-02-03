import { View, Text, TouchableOpacity } from "react-native";
import { Appbar, Button, IconButton,Avatar } from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Input } from "../../components/InputFields";
import ProfileData from "../../Dumy/Profile.json"

const EditProfile = ({route,navigation}) => {
  const [name, setName] = useState(ProfileData.name);
  const [room, setRoom] = useState(ProfileData.roomNo.toString());
  const [cambar, setCambar] = useState(false);
  const [avatar, setAvatar] = useState(ProfileData.avatar.url);

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
    
    <View style={{height:Size.Full}}>
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
          title="Edit Profile"
          titleStyle={{ color: Color.White, fontFamily: Font.semiBold }}
        />
      </Appbar.Header>

      <View
        style={{
          flex:1,
          backgroundColor: Color.Primary,
          justifyContent: "space-between",
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
            justifyContent:'center',
            alignItems:'center',
            position:'relative',
            // alignSelf: "center",
          }}
        >
          
            <Avatar.Image source={{ uri: avatar }} size={120} />
            <IconButton
            style={{position:'absolute', height:120,width:120,borderRadius:100, backgroundColor:Color.Opacity}}
              icon={"pencil"}
              iconColor={Color.White}
              size={22}
            />
          
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
            icon={"door"}
            label={"Room No"}
            val={room}
            setval={setRoom}
            iserror={false}
          />

          
          
        </View>

        <ButtonD value={"Update"} onPress={handelSubmit} disabled={false} style={{width:150,borderRadius:50,alignSelf:'center'}} />
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
              onPress={() => navigation.navigate("camera",{ fromUpdate: true })}
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
    </View>
  );
}

export default EditProfile