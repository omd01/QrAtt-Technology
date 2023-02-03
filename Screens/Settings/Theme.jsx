import { View, Text   } from "react-native";
import React, { useState } from "react";
import { Appbar, RadioButton } from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";

const Theme = ({navigation}) => {
    const [theme, setTheme] = useState('dark')
  return (
    <View style={{ height: Size.Full }}>
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
          title="Theme"
          titleStyle={{ color: Color.White, fontFamily: Font.semiBold }}
        />
      </Appbar.Header>
      

      <View
        style={{
          flex: 1,
          backgroundColor: Color.Primary,
        }}
      >
        <RadioButton.Group onValueChange={newValue => setTheme(newValue)} value={theme}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            paddingHorizontal: 5,
            marginVertical: 10,
            justifyContent:'space-between',
            paddingLeft:25
          }}
        >
          <Text
            style={{
              fontSize: Size.Midum + 2,
              color: Color.White,
              fontFamily: Font.medium,
            }}
          >
            Dark theme
          </Text>
          <RadioButton value="dark" />
         
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            paddingHorizontal: 5,
            justifyContent:'space-between',
            paddingLeft:25
          }}
        >
          <Text
            style={{
              fontSize: Size.Midum + 2,
              color: Color.White,
              fontFamily: Font.medium,
            }}
          >
            Light theme
          </Text>
          <RadioButton value="light" />
        </View>
      </RadioButton.Group>

      </View>
    </View>
  )
}

export default Theme