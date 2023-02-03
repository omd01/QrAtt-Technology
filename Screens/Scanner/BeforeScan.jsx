import { View, Text, Image ,Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from "expo-barcode-scanner";
import assets from "../../constants/assets";

import { Color, Font, Size } from '../../constants/theme';

const BeforeScan = ({screen,setScreen,setQrData}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const handleBarCodeScanned = ({ data }) => {
      Vibration.vibrate(200);
        setScreen("AfterScan");
       console.log(data);
        setQrData(data)
      };

      useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === "granted");
        };
    
        getBarCodeScannerPermissions();
      }, []);

      if (hasPermission === false) {
        return (
          <View>
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
          </View>
        );
      }

  return (
    <View style={{ alignItems: "center" }}>
            <BarCodeScanner
              onBarCodeScanned={screen === "AfterScan" ? undefined : handleBarCodeScanned}
              style={{ height: Size.Full, width: 600 }}
            />
            <View
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={assets.Scan}
                style={{ height: "100%", width: 500 }}
              />
            </View>
            <View
              style={{
                width: "70%",
                height: 100,
                borderRadius: Size.Large - 5,
                backgroundColor: Color.Secondary,
                position: "absolute",
                bottom: 0,
                marginBottom: 150,
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Text
                style={{
                  fontSize: Size.Midum + 3,
                  fontFamily: Font.bold,
                  color: Color.White,
                  marginVertical: 5,
                }}
              >
                Scan QR Code
              </Text>
              <Text
                style={{
                  fontSize: Size.Midum - 3,
                  fontFamily: Font.semiBold,
                  color: Color.White,
                }}
              >
               {` Scan the qr code present on the gate and
                make your attendence.`}
              </Text>
            </View>
          </View>
  )
}

export default BeforeScan