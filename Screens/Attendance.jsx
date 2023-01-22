import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from "react";
import { Color, Size, Font } from "../constants/theme";
import AttendData from "../Dumy/Attendance.json"
import { Avatar, IconButton } from 'react-native-paper';

const customShort = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);
  if (dateA > dateB) return 1;
  else if (dateA < dateB) return -1;
  return 0;
};
AttendData.sort(customShort).reverse();


const Attendance = () => {

  const dateTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ap = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let mergeTime = hours + ':' + minutes + ' ' + ap;
   return mergeTime;
   }

  function getTimeAgoFromUTC(utcDate) {
    const date = new Date(utcDate);
    const now = new Date();
    const seconds = (now - date) / 1000;
  
    let interval = Math.floor(seconds / 31536000);
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return dateTime(date);
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minutes ago";
    }
    if(seconds < 3600)
      return Math.floor(seconds) + " seconds ago";
    else
      return date.toLocaleString();
  }

  // console.log(new Date().toTimeString());
  // console.log(new Date().toLocaleTimeString('en-US', {
  //   hour: 'numeric', minute: 'numeric', hour12: true
  //   }));

  //  console.log(dateTime(new Date()));
  
  const Item =({item})=>(

       
 




  // console.log();

    <View
    
    style={{
      backgroundColor: Color.Secondary,
      height: Size.ExtraLarge +5,
      borderRadius: 8,
      overflow: "hidden",
      alignItems: "center",
      flexDirection: "row",
      marginVertical:3,
      // ...border,
    }}
  >
    {/* {show ? ( */}
      <>
        <View
          style={{
            height: "70%",
            width: "16%",
            alignItems: "center",
            justifyContent: "center",
            borderRightWidth: 1,
            borderColor: Color.White,
            
          }}
        >

          <Text
            style={{
              fontSize: Size.Midum + 2,
              fontFamily: Font.semiBold,
              color: Color.Btn,
            }}
          >
            {new Date(item.actionAt).getDate()}
          </Text>
          
          <Text
            style={{
              fontFamily: Font.regular,
              color: Color.White,
              fontSize: Size.Midum - 2,
            }}
          >
            {new Date(item.actionAt).toLocaleString().split(" ")[1]}
          </Text>

        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
       <View style={{flex:1,alignItems:'center'}}>
       <Text
            style={{
              marginLeft: 8,
              color: Color.White,
              fontFamily: Font.semiBold,
              fontSize: Size.Midum + 2,
              
            }}
          >
              {item.action.replace(/^\w/, (c) => c.toUpperCase()) + ` at ` + getTimeAgoFromUTC(item.actionAt)}
          </Text>
       </View>
          

          <IconButton
            icon={item.action === "check-in" ?"account-arrow-left":"account-arrow-right"}
            iconColor={item.action === "check-in" ?Color.Btn:"red"}
            size={28}
            // onPress={onPress}
          />
        </View>
      </>
    {/* ) : (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            color: Color.Btn,
            fontFamily: Font.medium,
            fontSize: Size.Midum + 1,
          }}
        >
          {getTimeAgoFromUTC(data.createdAt)}
        </Text>
        <IconButton
          icon="chevron-double-up"
          iconColor={Color.White}
          size={20}
          onPress={onPress}
        />
      </View>
    )} */}
  </View>
  )

 const renderItem =({item})=>{
  return(
    <Item item={item}/>
  )
 }

  return (
    <View style={{height:Size.Full}}>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.Primary,
          marginVertical: Size.Small,
          // backgroundColor:Color.Secondary //Chnage In Color Remove This
        }}
      >
        <Avatar.Icon size={40} backgroundColor={null} color={Color.White} icon="swap-horizontal-variant" />
        <Text
          style={{
            color: Color.White,
            fontSize: Size.Midum + 4, //change in size { 2 } /4
            fontFamily: Font.semiBold, // change in font { semi Bold} /bold
          }}
        >
          {`Total Attandance`}
        </Text>
      </View>

     <FlatList
     data={AttendData}
     renderItem={renderItem}
     keyExtractor={(item)=>item._id}
     />
    </View>
  )
}

export default Attendance