import { View, Text,} from "react-native";
import { Appbar,} from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import React, { useState, } from "react";
import { Input, InputSecure } from "../../components/InputFields";

const ResetPassword = ({navigation}) => {
    const [otp, setOtp] = useState(null);
    const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);
   
  
    const handelSubmit = () => {
  
  console.log(otp);
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
              letterSpacing: 1,
              alignSelf: "center",
              color: Color.White,
              fontSize: Size.Large + 3,
              fontFamily: Font.bold,
            }}
          >
            Forget Password
          </Text>

          <Text
            style={{
              alignSelf: "center",
              color: Color.White,
              marginVertical: 1,
              fontSize: Size.Midum - 2,
              fontFamily: Font.light,
            }}
          >
            Enter the e-mail joined to your account to reset password
          </Text>

          <View style={{ marginTop: 5, marginBottom: 20 }}>
            <Input
              icon={"form-textbox-password"}
              label={"Enter OTP"}
              val={otp}
              setval={setOtp}
              iserror={false}
            />
             <InputSecure
              icon={"lock"}
              label={"New Password"}
              val={password}
              setval={setPassword}
              iserror={false}
            />

            <InputSecure
              icon={"lock-check"}
              label={"Confirm Password"}
              val={cpassword}
              setval={setCPassword}
              iserror={false}
/>

          </View>
  
          <ButtonD value={"Update"} onPress={handelSubmit} disabled={false} style={{width:150,borderRadius:50,alignSelf:'center'}} />
        </View>
  
        </View>
      </View>
    )
  }
  

export default ResetPassword