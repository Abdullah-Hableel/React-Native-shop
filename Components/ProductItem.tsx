import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 10,
      }}
    >
      <Image
        source={{
          uri: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8yOV90b3Bfdmlld19waG90b19vZl9kYXJrX2Nob2NvbGF0ZV9zb2Z0X2Nvb2tpZV8wNDc3OTEwNy1hMWZjLTQ5N2MtOTRhMC0wM2UzMDVmYTUxOTcucG5n.png",
        }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
        dark Cookies
      </Text>
      <Text style={{ fontSize: 16 }}>Price: $4</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
