import { useState } from "react";
import {  TouchableOpacity,  } from "react-native";
import {  TextInput } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";

export const Input = ({ icon, iserror, label, val, setval, cstyle }) => {
  const [backColor, setBackColor] = useState(Color.Primary);
  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,
    marginVertical: Size.Small,
    ...cstyle,
  };
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      error={iserror}
      onChangeText={(text) => setval(text)}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={style}
      textColor={Color.White}
      onFocus={() => setBackColor(Color.Secondary)}
      left={
        <TextInput.Icon
          style={{ paddingTop: Size.Small }}
          icon={icon}
          iconColor={Color.White}
        />
      }
    />
  );
};

export const InputSecure = ({ icon, iserror, label, val, setval }) => {
  const [backColor, setBackColor] = useState(Color.Primary);
  const [secured, setSecured] = useState(true);

  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,

    marginVertical: Size.Small,
  };
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      error={iserror}
      secureTextEntry={secured}
      onChangeText={(text) => setval(text)}
      style={style}
      textColor={Color.White}
      onFocus={() => setBackColor(Color.Secondary)}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      left={
        <TextInput.Icon
          style={{ paddingTop: Size.Small }}
          icon={icon}
          iconColor={Color.White}
        />
      }
      right={
        <TextInput.Icon
          onPress={() => setSecured((previousState) => !previousState)}
          style={{ paddingTop: Size.Small }}
          icon={"eye"}
          size={20}
          iconColor="#cccccc"
        />
      }
    />
  );
};

export const InputNonEdit = ({ icon, label, val }) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      editable={false}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={{
        backgroundColor: Color.Secondary,
        height: Size.ExtraLarge + 5,
        // marginVertical: Size.Small,
      }}
      textColor={Color.White}
      // left={
      //   <TextInput.Icon
      //     style={{ marginTop: Size.Small + 1 }}
      //     icon={icon}
      //     iconColor={Color.White}
      //   />
      // }
    />
  );
};

export const InputArea = ({ label, val, setVal ,style,Lines}) => {
  const [backColor,setBackColor]=useState(Color.Primary)
  return (
    <TextInput
      multiline
      numberOfLines={Lines}
      onChangeText={(text) => setVal(text)}
      placeholder={val}
      label={label}
      mode="outlined"
      // value={val}
      placeholderTextColor={Color.White}
      onFocus={() => setBackColor(Color.Secondary)}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={{
        backgroundColor: backColor,
        ...style
      }}
      textColor={Color.White}
    />
  );
};


export const InputButton = ({label,onPress,value,iserror,Licon,Ricon,onbtnPress})=>{
  const [backColor, setBackColor] = useState(Color.Opacity);

  const onPres = () => {
    setBackColor(Color.Secondary)
    onPress
  };
  

 return (
  <TouchableOpacity onPress={onPres} activeOpacity={1}>

  <TextInput
    label={label}
    mode="outlined"
    value={value}
   error={iserror}
    style={{backgroundColor: backColor,
      height: Size.ExtraLarge + 5,}}
    editable={false}
    textColor={Color.White}
    onFocus={() => setBackColor(Color.Secondary)}
    outlineStyle={{
      borderColor: Color.Secondary,
      borderRadius: 13,
      borderWidth: 1,
    }}
    left={
      <TextInput.Icon
        style={{ paddingTop: Size.Small }}
        icon={Licon}
        iconColor={Color.White}
      />
    }
    right={
      <TextInput.Icon
        onPress={onbtnPress}
        style={{ paddingTop: Size.Small }}
        icon={Ricon}
        size={20}
        iconColor="#cccccc"
      />
    }
  />
</TouchableOpacity>
 )
}
