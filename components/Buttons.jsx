import { Button } from "react-native-paper";
import { Color, Font, Size } from "../constants/theme";

export const ButtonD = ({ value, onPress, disabled ,style,bgColor ,textColor,contentStyle ,labelStyle ,border ,loading,icon}) => {
  
  return (
    <Button
      mode="contained"
      onPress={onPress}
      textColor={textColor || Color.Dark}
      buttonColor={bgColor || Color.Btn }
      contentStyle={{ height: Size.ExtraLarge ,...contentStyle,}}
      labelStyle={{ fontSize: Size.Midum, fontFamily: Font.semiBold ,...labelStyle}}
      style={{ opacity: 0.9 ,...style, ...border}}
      disabled={disabled}
      loading={loading}
      icon={icon}
    >
      {value}
    </Button>
  );
};
