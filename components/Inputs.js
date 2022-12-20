import{ useState } from 'react';
import {StyleSheet} from "react-native"
import { TextInput  } from 'react-native-paper';
import Color from '../Theme/Color';
import Size from '../Theme/Size';

const Inputs = ({ icon, iserror , label, val, setval }) => {

  
const [bg, setBg] = useState(Color.Primary);
const newstyle = StyleSheet.create({
  org: {
      backgroundColor: bg,
      height: 56,
    marginVertical:Size.Small
    },
  });


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
      style={newstyle.org}
      textColor={Color.White}
      onFocus={() => {
        setBg(Color.Secondary);
      }}
      left={
        <TextInput.Icon
        style={{paddingTop:Size.Small}}
          icon={icon}
          color={(isTextInputFocused = true) => '#cccccc'}
        />
      }
    />

  );
};

export default Inputs;
