// import { Image, Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* First section */}
//       <View
//         style={{
//           flex: 1,
//           alignItems: "center",
//           margin: 10,
//         }}
//       >
//         <Text style={{ margin: 10, fontSize: 30, fontWeight: "bold" }}>
//           abdullah store
//         </Text>
//         <Text style={{ margin: 5, fontSize: 20 }}>cocees and breads</Text>
//         <Image
//           source={{
//             uri: "https://media-cdn.tripadvisor.com/media/photo-s/08/a6/b5/17/great-american-cookies.jpg",
//           }}
//           style={{ margin: 10, width: 200, height: 200 }}
//         />
//       </View>

//       <View> </View>

//       {/* Second section */}
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column-reverse",
//           justifyContent: "flex-end",
//           alignItems: "flex-start",
//           margin: 10,
//         }}
//       >
//         <Text style={{ margin: 10, fontSize: 30 }}>price : $2</Text>
//         <Text style={{ margin: 20, fontSize: 20, fontWeight: "bold" }}>
//           normal cookies{" "}
//         </Text>
//         <Image
//           source={{
//             uri: "https://t4.ftcdn.net/jpg/06/76/66/39/360_F_676663959_jcE1oIYNF9qgx7FTSSMy6DHxsRkFHTyO.jpg",
//           }}
//           style={{ margin: 10, width: 200, height: 200 }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column-reverse",
//           justifyContent: "flex-end",
//           alignItems: "flex-start",
//           margin: 10,
//         }}
//       >
//         <Text style={{ margin: 10, fontSize: 30 }}>price : $2</Text>
//         <Text style={{ margin: 20, fontSize: 20, fontWeight: "bold" }}>
//           normal cookies{" "}
//         </Text>
//         <Image
//           source={{
//             uri: "https://t4.ftcdn.net/jpg/06/76/66/39/360_F_676663959_jcE1oIYNF9qgx7FTSSMy6DHxsRkFHTyO.jpg",
//           }}
//           style={{ margin: 10, width: 200, height: 200 }}
//         />
//       </View>
//     </View>
//   );
// }
import ProductItem from "@/Components/ProductItem";
import { Image, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* First section */}
      <View
        style={{
          alignItems: "center",
          margin: 10,
        }}
      >
        <Text style={{ margin: 10, fontSize: 30, fontWeight: "bold" }}>
          abdullah store
        </Text>
        <Text style={{ margin: 5, fontSize: 20 }}>cocees and breads</Text>
        <Image
          source={{
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/08/a6/b5/17/great-american-cookies.jpg",
          }}
          style={{ margin: 10, width: 200, height: 200 }}
        />
      </View>
      {/* Item 1 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <View
          style={{
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
        </View> */}

        {/* Item 2 */}
        <View
          style={{
            alignItems: "center",
            margin: 10,
          }}
        ></View>
      </View>
      <ProductItem />
    </View>
  );
}
