import { View, Text, } from "react-native";
import { Appbar} from "react-native-paper";
import { Color, Font, Size } from "../../constants/theme";
import { ButtonD } from "../../components/Buttons";
import React, { useState, } from "react";
import { Input,} from "../../components/InputFields";

import * as yup from "yup";
import { Formik } from "formik";

const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required")
});


const ForgetPassword = ({navigation}) => {
    
    return (
      <Formik
      initialValues={{ email: "" }}
      validateOnMount={true}
      onSubmit={(values) => console.log(values)}
      validationSchema={forgetPasswordSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
              fontSize: Size.Large ,
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

          <View style={{  marginVertical: Size.Small +5 }}>
          
          <Input
                    icon={"email"}
                    keyboardType={"email-adress"}
                    label={"Email"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />

                  {errors.email && touched.email && (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: Font.light,
                        marginLeft: 15,
                      }}
                    >
                      {errors.email}
                    </Text>
                  )}

          </View>
  
          <ButtonD value={"Send Mail"} onPress={handleSubmit} disabled={isValid?false:true} style={{width:150,borderRadius:50,alignSelf:'center',marginVertical:5}} />
        </View>
  
        </View>
      </View>
       )}
       </Formik>
    )
  }
  

export default ForgetPassword