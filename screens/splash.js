import React from "react";
import { View, Text, Image } from "react-native";
// ເອິ້ນໃຊ້ Pressable
import { Pressable } from "react-native";
// ເອິ້ນໃຊ້ Navigation ເພື່ອສະປ່ຽນໜ້າ
const Splash = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Home',{name:'jane'})
  };
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#131414",
        }}
      >
        {/* เพิ่ม View สำหรับเว้นวรรคข้างบน */}
        <View style={{ flex: 0.1 }}></View>
        {/* ใช้ flex: 0.8 เพื่อให้รูปภาพแสดงกลางจอ */}
        <View
          style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../img/profile.jpeg")}
            style={{ width: 150, height: 150 }} // กำหนดความสูงให้รูปภาพด้วย
            resizeMode="contain" // การปรับขนาดรูปภาพให้พอดีกับพื้นที่ที่กำหนด
          />
        </View>
        {/* เพิ่ม View สำหรับเว้นวรรคข้างล่าง */}
        <View style={{ flex: 0.1 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 30 }}>Hidiczent</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Splash;
