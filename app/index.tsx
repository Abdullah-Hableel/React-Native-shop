import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Abdullah store </Text>
      <Text> cocees and breads </Text>
      <Image
        source={{
          uri: "https://img.youm7.com/ArticleImgs/2017/7/13/73264-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D9%83%D9%88%D9%83%D9%8A%D8%B2.jpg",
        }}
        style={{ width: 100, height: 70 }}
      />
    </View>
  );
}
