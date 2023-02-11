import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { Size, Font, colors } from "../constants/theme";
import { manipulateAsync, FlipType } from "expo-image-manipulator";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";

const CameraComponent = ({ navigation, route }) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]

  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [fromScan, setFromScan] = useState(false);
  const [fromUpdate, setFromUpdate] = useState(false);

  const [flash, setFlash] = useState(false);
  useEffect(() => {
    if (route.params) {
      if (route.params.fromScan) {
        setFromScan(route.params.fromScan);
      }
      if (route.params) {
        setFromUpdate(route.params.fromUpdate);
      }
    }
  }, [route]);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
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
    const manipResult = await manipulateAsync(data.localUri || data.uri, [
      { flip: FlipType.Horizontal },
    ]);
    if (manipResult) {
      {
        fromUpdate
          ? navigation.navigate("editProfile", { image: manipResult.uri })
          : fromScan
          ? navigation.navigate("home", { image: manipResult.uri })
          : navigation.navigate("signupSecond", { image: manipResult.uri });
      }
    }
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
      <Text
        style={{
          color: Color.White,
          fontSize: Size.Large - 10,
          fontFamily: Font.semiBold,
        }}
      >
        Verify its you !
      </Text>
      <View
        style={{
          height: "60%",
          width: "90%",
          backgroundColor: Color.Secondary,
          borderWidth: 3,
          borderColor: Color.White,
          marginVertical: 40,
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Camera
          style={{ height: Size.Full, aspectRatio: 1 }}
          type={type}
          ratio="1:1"
          flashMode={flash ? "torch" : "off"}
          ref={(e) => setCamera(e)}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: Color.White,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: Color.Secondary,
          borderRadius: 20,
          width: "90%",
        }}
      >
        {fromScan ? (
          <IconButton
            icon="flashlight"
            iconColor={Color.White}
            size={25}
            onPress={() => setFlash((previousState) => !previousState)}
          />
        ) : (
          <IconButton
            icon="folder-multiple-image"
            iconColor={Color.White}
            size={25}
            onPress={() =>
              navigation.navigate("editProfile", { gallary: true })
            }
          />
        )}

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
