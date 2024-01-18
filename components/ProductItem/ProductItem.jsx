import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceDistanceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.distanceMain}>
            <Ionicons name="timer-outline" size="15px" color="#999" />
            <Text style={styles.distance}>20km</Text>
          </View>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "pink",
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderColor: 'blue',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 17, marginRight: 10,color:'#8B70FE',fontWeight:600 }}>Select</Text>
          <Ionicons name="add" size="25px" color="#8B70FE" />
        </TouchableOpacity>
        {/* Add buttons or controls to adjust quantity here */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  imageContainer: {
    width: 90,
    height: 90,
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 5,

    // backgroundColor:'pink',
    elevation: "0px 2px 4px rgba(0, 0, 0, 2)",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,

    // borderRadius:15
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceDistanceContainer: {
    flexDirection: "column",
    // justifyContent: 'space-between',
    marginTop: 5,
  },
  price: {
    color: "#999",
    fontSize: 17,
  },
  distanceMain: {
    color: "#999",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  distance: {
    color: "#999",
    marginLeft: 5,
  },
  quantityContainer: {
    alignItems: "center",
  },
});
export default ProductItem;
