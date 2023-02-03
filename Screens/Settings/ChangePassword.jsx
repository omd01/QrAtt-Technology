import { View, Text,} from "react-native";
import { Appbar, } from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import React, { useState, useEffect } from "react";
import { InputSecure } from "../../components/InputFields";


const ChangePassword = ({navigation}) => {

  const [oldPassword, setOldPassword] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);
  const [isError,setIsError] = useState([false,false,false])

  const handelSubmit = () => {

console.log();
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
          title="Chnage Password"
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
        style={{
          flex: 1,
          paddingHorizontal: Size.Midum,
          justifyContent: "center",
        }}
      >
         <Text
            style={{
              alignSelf: "center",
              color: Color.White,
              marginVertical: 1,
              marginHorizontal:4,
              fontSize: Size.Midum - 2,
              fontFamily: Font.light,
            }}
          >
           {`Note:- Your Password must be more than eight characters long and include a combination of numbers, letters and special characters (!$@%&).`} 
          </Text>
        <View style={{ marginTop: 5, marginBottom: 20 }}>
          <InputSecure
            icon={"lock"}
            label={"Full Name"}
            val={oldPassword}
            setval={setOldPassword}
            iserror={isError[0]}
          />

            <InputSecure
              icon={"lock"}
              label={"Password"}
              val={password}
              setval={setPassword}
              iserror={isError[1]}
            />

            <InputSecure
              icon={"lock-check"}
              label={"Confirm Password"}
              val={cpassword}
              setval={setCPassword}
              iserror={isError[2]}
/>
          
          
        </View>

        <ButtonD value={"Update"} onPress={handelSubmit} disabled={false} style={{width:150,borderRadius:50,alignSelf:'center'}} />
      </View>

      </View>
    </View>
  )
}

export default ChangePassword