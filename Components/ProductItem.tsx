import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface ProductProps {
  name: string;
  cokeisImage: string;
}

const ProductItem = ({ name, cokeisImage }: ProductProps) => {
  console.log(name);
  console.log(cokeisImage);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Image
        source={{
          uri: cokeisImage,
        }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 16 }}>Price: $4</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
