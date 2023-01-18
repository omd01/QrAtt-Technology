import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { Color, Font, Size } from '../../constants/theme';


const AfterScan = ({ navigation, setAction }) => {
  return (
    <View
    style={{
      margin: 10,
      borderRadius: Size.Large,
      borderWidth: 2,
      borderColor: Color.White,
      backgroundColor: Color.Secondary,
      padding: 10,
    }}
  >
    <Avatar.Icon
      size={90}
      backgroundColor={null}
      icon="map-marker-alert"
      style={{
        alignSelf: "center",
      }}
    />

    <Text
      style={{
        color: Color.White,
        fontSize: Size.Midum + 2,
        fontFamily: Font.semiBold,
        alignSelf: "center",
        marginBottom: 20,
      }}
    >
      Choose the action do you want to perform
    </Text>

    <Button
      mode="contained"
      onPress={() => {
        navigation.navigate("camera", { fromScan: true });
        setAction("check-in");
      }}
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
      icon="arrow-collapse-left"
    >
      Check-In
    </Button>
    <Button
      mode="contained"
      onPress={() => {
        navigation.navigate("camera", { fromScan: true });
        setAction("check-out");
      }}
      textColor={Color.Dark}
      buttonColor={Color.Btn}
      contentStyle={{
        height: Size.ExtraLarge,
        flexDirection: "row-reverse",
      }}
      labelStyle={{
        fontSize: Size.Midum,
        fontFamily: Font.semiBold,
      }}
      style={{
        opacity: 0.9,
        marginVertical: Size.Small,
      }}
      icon="arrow-collapse-right"
    >
      Check-Out
    </Button>
  </View>
  )
}

export default AfterScan