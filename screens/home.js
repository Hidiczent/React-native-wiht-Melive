import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
// import

const Home = ({ navigation }) => {
  // ฟังก์ชันที่เรียกเมื่อผู้ใช้กดที่รายการสถานที่ท่องเที่ยว
  const onPressItem = (id, name) => {
    // ใช้ navigation.navigate() เพื่อนำทางไปยังหน้า "Detail" พร้อมส่งพารามิเตอร์ id และ name
    navigation.navigate("Detail", { id: id, name: name });
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <View style>
        <Text style={{ fontSize: 30 }}>Attactions</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Pressable onPress={() => onPressItem(1, "Phi Phi Islands")}>
          <Image
            source={require("../img/Attractions/1.jpg")}
            style={{ width: "100%", height: 333 }} // กำหนดความสูงให้รูปภาพด้วย
            resizeMode="contain"
          ></Image>
          <Text style={{ fontSize: 20, marginTop: 0 }}>Phi Phi Islands</Text>
          <Text>
            Phi Phi Islands are a group of islands in Thailand between the large
            island of Phuket and the Malacca Coastal Strait of Thailand.
          </Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Pressable onPress={() => onPressItem(2, "Eiffel Tower")}>
          <Image
            source={require("../img/Attractions/2.jpg")}
            style={{ width: "100%", height: 333 }} // กำหนดความสูงให้รูปภาพด้วย
            resizeMode="contain"
          ></Image>
          <Text style={{ fontSize: 20, marginTop: 0 }}>Eiffel Tower</Text>
          <Text>
            Eiffel Tower is one of the most famous structures in the world.
            Eiffel Tower is named after a leading French architect and engineer.
            It was built as a symbol of the World Fair in 1889
          </Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Pressable onPress={() => onPressItem(3, "Times Square")}>
          <Image
            source={require("../img/Attractions/3.jpg")}
            style={{ width: "100%", height: 333 }} // กำหนดความสูงให้รูปภาพด้วย
            resizeMode="contain"
          ></Image>
          <Text style={{ fontSize: 20, marginTop: 0 }}>Times Square</Text>
          <Text>
            Times Square has become a global landmark and has become a symbol of
            New York City. This is a result of Times Square being a modern,
            futuristic venue, with huge advertising screens dotting its
            surroundings
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
