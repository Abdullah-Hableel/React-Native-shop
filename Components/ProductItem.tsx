import { Product } from "@/data/products";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductProp {
  product: Product;
}
const ProductItem = ({ product }: ProductProp) => {
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
          uri: product.image,
        }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
        {product.title}
      </Text>
      <Text style={{ fontSize: 16 }}>{product.price} $</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
