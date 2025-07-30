import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}> Abdullah store </Text>
      <Text style={{ fontSize: 15 }}> cocees and breads </Text>
      <Image
        source={{
          uri: "https://media-cdn.tripadvisor.com/media/photo-s/08/a6/b5/17/great-american-cookies.jpg",
        }}
        style={{ width: 300, height: 170 }}
        //
      />
    </View>
  );
}
