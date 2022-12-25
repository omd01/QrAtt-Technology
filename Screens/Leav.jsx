import { View, Text } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import { Color, Size, Font } from "../constants/theme";
const Leav = ({navigation}) => {

  return (
    <View
      style={{
        height: Size.Full,
        backgroundColor: Color.Primary,
      }}
    >
    <View style={{ flex: 1 }}>
    <Text>Leav</Text>

       </View><Footer navigation={navigation}screens={'leav'}/>
    </View>
  );
};

export default Leav