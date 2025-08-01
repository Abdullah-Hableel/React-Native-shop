import { Image, Text, View } from "react-native";

export default function Cookie_proudctItems() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        margin: 10,
      }}
    >
      <Text style={{ margin: 10, fontSize: 30, fontWeight: "bold" }}>
        {" "}
        abdullah store{" "}
      </Text>
      <Text style={{ margin: 5, fontSize: 20 }}> cocees and breads </Text>
      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/06/76/66/39/360_F_676663959_jcE1oIYNF9qgx7FTSSMy6DHxsRkFHTyO.jpg",
        }}
        style={{ margin: 10, width: 200, height: 200 }}
        //
      />
    </View>
  );
}
