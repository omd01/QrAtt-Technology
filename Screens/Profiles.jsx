import { View, Text,Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Font, Size } from "../constants/theme";
import { ButtonD } from "../components/Buttons";

const Profiles = ({ route }) => {
  const [teacher, setTeacher] = useState(undefined);
  useEffect(() => {
    if (route.params) {
      if (route.params.data) {
        setTeacher(route.params.data);
      }
    }
  }, [route]);

  console.log(route.params.data);
  const navigation = useNavigation();
  return (
    <View style={{ height: Size.Full, backgroundColor: Color.Primary }}>
      <Appbar.Header style={{ backgroundColor: Color.Primary }}>
        <Appbar.BackAction
          iconColor={Color.White}
          onPress={() => navigation.goBack()}
        />
      </Appbar.Header>

      {teacher ? (
        <View style={{ flex: 1, paddingVertical: 20 }}>
          <View>
            <Avatar.Image
              style={{ alignSelf: "center", zIndex: 5 }}
              size={140}
              source={{ uri: teacher.avatar.url }}
            />
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                height: 600,
                borderRadius: 20,
                marginTop: 65,
             
                width: "90%",
                backgroundColor: Color.Secondary,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <View style={{marginTop:90,}}>
                <Text style={{fontFamily:Font.semiBold,fontSize:Size.Large -5 ,color:Color.White}}>{teacher.name}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                <ButtonD
                  value={"Call"}
                  style={{width:150,marginHorizontal:5}}
                   onPress={()=>{
                   Linking.openURL(`tel:${teacher.mobile}`)}}
                  disabled={false}
                />
                <ButtonD
                  value={"Mail"}
                  style={{width:150,marginHorizontal:5}}
                  onPress={()=>{
                    Linking.openURL(`mailto:${teacher.email}`)}}
                  disabled={false}
                />
              </View>
            </View>
          </View>

          {/* <Text>Profiles</Text> */}
        </View>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default Profiles;
