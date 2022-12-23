import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Inputs from "../components/Inputs";
import { Avatar } from "react-native-paper";
import Color from "../Theme/Color";
import Size from "../Theme/Size";
import * as ImagePicker from 'expo-image-picker';


const Signup = ({ navigation, route }) => {
  const [secondPage, setSecondPage] = useState(false);
  const [cambar, setCambar] = useState(false);
  const [avatar, setAvatar] = useState(""); 

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
        setCambar(false);
      }
      if(route.params.gallary){
        handelGallary()
      }
    }
  }, [route]);

  const handelGallary = async ()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
        setCambar(false)
      }
      if (result.canceled) {
        setCambar(true)
      }
   
  }

  const FistPage = () => {
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const setActivation = () => {
      setSecondPage(true);
    };
    return (
      <View style={{ height: Size.Full }}>
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
                fontSize: Size.Large,
                fontWeight: "bold",
              }}
            >
              Create Account
            </Text>

            <Text
              style={{
                alignSelf: "center",
                color: Color.White,
                opacity: 0.5,
                fontSize: Size.Midum,
              }}
            >
              Please fill the input below here
            </Text>
            <View style={{ marginVertical: 20 }}>
              <Inputs
                icon={"email"}
                label={"Email"}
                val={email}
                setval={setEmail}
                iserror={false}
              />

              <Inputs
                icon={"phone"}
                label={"Mobile"}
                val={mobile}
                setval={setMobile}
                iserror={false}
              />

              <Inputs
                icon={"lock"}
                label={"Password"}
                val={password}
                setval={setPassword}
                iserror={false}
                secure={true}
              />

              <Inputs
                icon={"lock"}
                label={"Confirm Password"}
                val={cpassword}
                setval={setCPassword}
                iserror={false}
                secure={true}
              />
            </View>

            <TouchableOpacity
              // disabled={!email || !mobile || !password || !cpassword}
              onPress={setActivation}
              style={{
                backgroundColor: Color.Btn,
                borderRadius: 20,
                opacity: 0.9,
                alignItems: "center",
                padding: Size.Midum,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: Color.Dark, fontSize: Size.Midum }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 20,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: Color.White, fontSize: 12, opacity: 0.6 }}>
              Already have a account ‎
            </Text>
            <Text style={{ color: "#34E585", fontSize: 12, opacity: 0.6 }}>
              sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const SecondPage = () => {
    const [name, setName] = useState("");
    const [pmobile, setPmobile] = useState("");
    const [room, setRoom] = useState("");
    const [branch, setBranch] = useState("");


    const handelSubmit = () => {
      setSecondPage(false);
    };

    return (
      <View style={{ height: Size.Full }}>
        <View
          pointerEvents={cambar ? "none" : "auto"}
          style={{
            flex: 1,
            paddingHorizontal: Size.Midum,
            justifyContent: "center",
          }}
        >
          <View style={{ justifyContent: "center", alignContent: "center" }}>
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
                    borderRadius: 50,
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
                opacity: 0.5,
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
                icon={"door"}
                label={"Branch"}
                val={branch}
                setval={setBranch}
                iserror={false}
              />
            </View>

            <TouchableOpacity
              onPress={handelSubmit}
              style={{
                backgroundColor: Color.Btn,
                borderRadius: 20,
                opacity: 0.9,
                alignItems: "center",
                padding: Size.Midum,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: Color.Dark, fontSize: Size.Midum }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 20,
              alignSelf: "center",
            }}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={{ color: Color.White, fontSize: 12, opacity: 0.6 }}>
              Already have a account ‎
            </Text>
            <Text style={{ color: "#34E585", fontSize: 12, opacity: 0.6 }}>
              sign in
            </Text>
          </TouchableOpacity>
        </View>

        {cambar ? (
          <View
            style={{
              backgroundColor: Color.Opacity,
              flex: 1,
              height: Size.Full,
              width: Size.Full,
              position: "absolute",
            }}
          >
            <View
              style={{
                alignSelf: "flex-end",
                width: Size.Full,
                height: 220,
                padding: Size.Small,
                justifyContent: "space-evenly",
                top: 640,
                borderTopEndRadius: 40,
                borderTopStartRadius: 40,
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={handelGallary}
                style={{
                  marginTop: 20,
                  margin: 5,
                  borderRadius: Size.Small,
                  backgroundColor: Color.Secondary,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: Color.White, fontSize: Size.Midum }}>
                  Gallary
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate("camera")}
                style={{
                  margin: 5,
                  borderRadius: Size.Small,
                  backgroundColor: Color.Secondary,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: Color.White, fontSize: Size.Midum }}>
                  Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setCambar(false)}
                activeOpacity={1}
                style={{
                  margin: 5,
                  borderRadius: Size.Small,
                  backgroundColor: Color.Secondary,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "red", fontSize: Size.Midum }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Color.Primary,
      }}
    >
      <SafeAreaView>
        {secondPage === true ? <SecondPage /> : <FistPage />}
      </SafeAreaView>
    </View>
  );
};

export default Signup;
