import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native";

const Card = ({ url, title, productName, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.Price}>₹ {price}</Text>
      <TouchableOpacity style={styles.addbtn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 10,
    overflow: "hidden",
    backgroundColor: "white",
    width: 300,
    height: 350,
    borderRadius: 20,
    padding: 20,
  },
  img: {
    width: "100%",
    height: 190,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  },
  productName: {
    fontSize: 19,
    color: "orange",
    fontWeight: "bold",
  },
  Price: {
    fontSize: 35,
    color: "red",
    fontWeight: "bold",
  },
  addbtn: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});

export default Card;
<View style={styles.card}>
      <Image
        source={{uri:
          ("https://th.bing.com/th/id/OIP.tJQjxbLRRaEt9B4OB546kAHaHw?rs=1&pid=ImgDetMain.png")}}
        style={styles.img}
      />

      <Text style={styles.title}>BestSeller</Text>
      <Text style={styles.productName}>Nike Shoe</Text>
      <Text style={styles.Price}>₹1000</Text>
      <TouchableOpacity style={styles.addbtn}><Text style={styles.btnText}>+</Text></TouchableOpacity>
    </View>