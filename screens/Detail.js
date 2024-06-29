import { View, Text , Image} from "react-native";
import React from "react";

const images ={
  1:require('../img/Attractions/1.jpg'),
  2:require('../img/Attractions/2.jpg'),
  3:require('../img/Attractions/3.jpg'),
  // 4:require('../img/Attractions/1.jpg'),
}

const Detail = ({ navigation, route }) => {
  return (
    <View>
      <Image
        source={images[route.params.id]}
        style={{ width: "100%", height: 333 }} // กำหนดความสูงให้รูปภาพด้วย
        resizeMode="contain">
        </Image>
      <Text style={{ fontSize: 20, marginTop: 0 }}>{route.params.name}</Text>
    </View>
  );
};

export default Detail;
