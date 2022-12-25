import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";

const CameraComponent = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.Primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Color.White,
            fontSize: Size.Large,
            marginVertical: Size.Small,
            fontFamily: Font.bold,
          }}
        >
          Opps...
        </Text>
        <Text
          style={{
            color: Color.White,
            fontSize: Size.Midum,
            fontFamily: Font.regular,
          }}
        >
          We need your permission to show the camera
        </Text>

        <Button
          mode="contained"
          onPress={requestPermission}
          textColor={Color.Dark}
          buttonColor={Color.Btn}
          contentStyle={{ height: Size.ExtraLarge }}
          labelStyle={{
            fontSize: Size.Midum,
            fontFamily: Font.semiBold,
          }}
          style={{
            opacity: 0.9,
            marginVertical: Size.Small,
          }}
        >
          Grant Permission
        </Button>
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    navigation.navigate("signupSecond", { image: data.uri });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.Primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "60%",
          width: "90%",
          backgroundColor: Color.Secondary,
          borderWidth: 5,
          borderColor: Color.Secondary,
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Camera
          style={{ height: Size.Full, aspectRatio: 1 }}
          type={type}
          
          ratio="1:1"
          ref={(e) => setCamera(e)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: Color.Secondary,
          borderRadius: 20,
          width: "90%",
        }}
      >
        <IconButton
          icon="folder-multiple-image"
          iconColor={Color.White}
          size={25}
          onPress={() => navigation.navigate("signupSecond", { gallary: true })}
        />
        <IconButton
          icon="camera"
          iconColor={Color.White}
          size={45}
          onPress={() => clickPicture()}
        />
        <IconButton
          icon="camera-flip"
          iconColor={Color.White}
          size={25}
          onPress={() => toggleCameraType()}
        />
      </View>
    </View>
  );
};

export default CameraComponent;
