import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Avatar } from "react-native-paper";
import {  InputArea } from "../components/InputFields";
import {DropdownImg} from "../components/Dropdown";
import { ButtonD } from "../components/Buttons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Teachers from "../Dumy/Teachers.json"

const Leave = () => {
  const [teacher, setTeacher] = useState(undefined);
  const [reason, setReason] = useState(null);
  
  const [nowdate, setNowDate] = useState(new Date());

  const [showFromDate, setshowFromDate] = useState(false);
  const [showToDate, setshowToDate] = useState(false);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const [formatedFromDate, setFormatedFromDate] = useState(undefined);
  const [formatedToDate, setFormatedToDate] = useState(undefined);


  const onChangeFrom = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setshowFromDate(false);
    } else {
      if (selectedDate) {
        setFrom(selectedDate);
        setshowFromDate(false);
      }
    }
  };

  const onChangeTo = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setshowToDate(false);
    } else {
      if (selectedDate) {
        setTo(selectedDate);
        setshowToDate(false);
      }
    }
  };


  useEffect(() => {
    if (from) {
      var tempDate = new Date(from).toLocaleDateString();
      setFormatedFromDate(tempDate);
    }
  }, [from]);

  useEffect(() => {
    if (to) {
      var tempDate = new Date(to).toLocaleDateString();
      setFormatedToDate(tempDate);
    }
  }, [to]);


  const handelSubmit = () => {
    console.log(teacher);
    console.log(reason);
    console.log(from);
    console.log(to);
  };
  

  return (
    <View style={{ height: Size.Full, paddingHorizontal: Size.Small }}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.Primary,
          marginVertical: Size.Small,
        }}
      >
        <Avatar.Icon size={40} backgroundColor={null} color={Color.White} icon="email-send" />
        <Text
          style={{
            color: Color.White,
            // fontSize: Size.Midum + 2,
            fontSize: Size.Midum + 4, //change in size { 2 } /4

            fontFamily: Font.semiBold,
          }}
        >
          {`Send Leave Request`}
        </Text>
      </View>
      <ScrollView>
      <View style={{ marginVertical: 5 }}>
        <Text
          style={{
            marginHorizontal: 2,
            color: Color.White,
            fontFamily: Font.medium,
          }}
        >
          {`To Teacher`}
        </Text>
        <DropdownImg
          data={Teachers}
          micon={"human-male-board"}
          label={"Teacher's List"}
          value={"Teacher's"}
          onIconPress={{}}
          setSelected={setTeacher}
          cstyle={{ marginVertical: Size.Small - 8 }}
        />
      </View>

      <View style={{ marginVertical: 5 }}>
        <Text
          style={{
            color: Color.White,
            marginHorizontal: 2,
            fontFamily: Font.medium,
          }}
        >
          {`From`}
        </Text>
        <ButtonD
          value={formatedFromDate ? formatedFromDate : "Start Date"}
          onPress={() => setshowFromDate(true)}
          bgColor={from === null ?Color.Primary : Color.Secondary}
          contentStyle={{ alignSelf: "flex-start" }}
          textColor={Color.White}
          labelStyle={{ fontSize: 15 }}
          style={{
            marginVertical: 5,
            borderRadius: 13,
            height: Size.ExtraLarge + 5,
            justifyContent: "center",
            borderWidth:1,
            borderColor:Color.Secondary,
            
          }}
        />

        {showFromDate && (
          <DateTimePicker
            value={nowdate}
            mode={"date"}
            minimumDate={new Date()}
            onChange={onChangeFrom}
          />
        )}
      </View>

      <View style={{ marginVertical: 5 }}>
        <Text
          style={{
            color: Color.White,
            marginHorizontal: 2,
            fontFamily: Font.medium,
          }}
        >
          {`To`}
        </Text>
        <ButtonD
          value={formatedToDate ? formatedToDate : "End Date"}
          onPress={() => setshowToDate(true)}
          bgColor={to === null ? Color.Primary : Color.Secondary}
          contentStyle={{ alignSelf: "flex-start" }}
          textColor={Color.White}
          labelStyle={{ fontSize: 15 }}
          style={{
            marginVertical: 5,
            borderRadius: 13,
            height: Size.ExtraLarge + 5,
            justifyContent: "center",
            borderWidth:1,
            borderColor:Color.Secondary,
          }}
        />

        {showToDate && (
          <DateTimePicker
            value={nowdate}
            mode={"date"}
            minimumDate={new Date()}
            onChange={onChangeTo}
          />
        )}
      </View>

      <View style={{ marginVertical: 5 }}>
        <Text
          style={{
            color: Color.White,
            marginHorizontal: 2,
            fontFamily: Font.medium,
          }}
        >
          {`Valid Reason`}
        </Text>
        <InputArea
          val={reason}
          setVal={setReason}
          Lines={10}
         placeholder={"Write a valid reason for leave request"}
        />
      </View>

      <View style={{ marginVertical: 15 }}>
        <ButtonD
          value={"Send Request"}
          onPress={handelSubmit}
          disabled={false}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Leave;
