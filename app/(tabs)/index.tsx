import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView>
      <View style={{ height: 250 }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10, // Add some padding to the left and right for spacing,
            marginTop:10
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Image
              key={i} // Add a unique key for each element
              style={[styles.imgContainer, {width:350, height:'100%', borderRadius:10}]}
              source={{
                uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/generate/cover/67a9be0d_f786a0_1.983.jpg",
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
      </View>

      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >


        
         <ScrollView
        horizontal={true} style={{flexDirection:"row"}}
        contentContainerStyle={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/6799b658_555658_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Уулсын домог</Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/658b93de_a49b8d_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огава</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо</Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/67876452_394f5e_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг</Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/6791e2ca_2c1425_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Эргээд ир</Text>
        </View>
      </ScrollView>
      </ScrollView>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}> Хайрыг өгүүлэх нь</Text>
        {/* <br /> */}
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
       <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/66bd70c0_697675_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Б. Наминчимэд</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Галт шувуу</Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/66d53ad0_707c72_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Диана Уинн Жонс</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Хаулын нүүдэг цайз</Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/62abfb64_879fa6_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Мар Ташимович </Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Сэтгэлд харвасан туяа </Text>
        </View>
        <View>
          <ImageBackground
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/66fbac21_7b6a64_1.jpg",
            }}
            style={styles.imgContainer}
          >
            <MaterialCommunityIcons
              name="headphones"
              size={18}
              color="white"
              style={styles.headphonesIcon}
            />
          </ImageBackground>
          <Text style={{ color: "gray", marginLeft: 10 }}>Х. Дуламсүрэн</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Санахын хязгаар</Text>
        </View>
      </ScrollView>


      



      <View  style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Credit books</Text>
        <AntDesign name="star" size={18} color="gold" />
        {/* <br /> */}
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Subscription үйлчилгээг идэвхжүүлээд доорх номуудаас 1-г сонгон сонсоорой</Text>
      </View>





      <View style={{ backgroundColor: "#007BFF", paddingVertical: 15, paddingHorizontal: 10 }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {[
          {
            uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/675012ad_72d0cb_1.jpg",
            author: "Кен Бланчард",
            title: "Нэг минутын мене...",
          },
          {
            uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/654c2c4b_c0ac54_1.jpg",
            author: "Даниел Х.Пинк",
            title: "Хэзээ",
          },
          {
            uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/6715f4e5_bba798_1.jpg",
            author: "Хэктор Гарсиа",
            title: "Намасте",
          },
          {
            uri: "https://ub1.cdn.mplus.mn/r_md_h/images/publisher/square/6621e8b3_6e312e_1.jpg",
            author: "Томас Кулопулос",
            title: "Z үеийн нөлөө",
          },
        ].map((item, index) => (
          <View key={index} style={{ marginRight: 15 }}>
            <ImageBackground
              source={{ uri: item.uri }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: "hidden", // Ensures the borderRadius works properly
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: 5,
              }}
            >
              <MaterialCommunityIcons
                name="headphones"
                size={18}
                color="white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 5, padding: 2 }}
              />
            </ImageBackground>
            <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>{item.author}</Text>
            <Text style={{ fontSize: 10, marginLeft: 10, color: "lightgray" }}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

    
      <View  style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Зөвхөн Mbook-ээс</Text>
        <AntDesign name="star" size={18} color="gold" />
        {/* <br /> */}
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио номууд</Text>
      </View>





      <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
      <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/67ac4264_6a75a0_1.jpg",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>М. Улсболд</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Ирээдүйн Spike</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/67a46119_c2a170_1.jpg",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Нгүен Зү</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Дорнын уянгат эрдэнэ</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/67a065a7_a46266_1.jpg",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жэймс</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Сэтгэлээ хайрлах ном </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/67876456_394f5e_1.jpg",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          </View>
      </ScrollView>


      <View  style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Зохиолчид</Text>
        <AntDesign name="star" size={18} color="gold" />
        {/* <br /> */}
      </View>
          

    <ScrollView horizontal={true} style={{ flexDirection: "row", padding: 10 }}>
      {[
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/610b96de_322420_1.jpg",
          author: "А. Идэрбат",
          
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66dfedd9_838383_1.jpg",
          author: "Д.Оюунчимэг",
          
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66f11513_3b2c26_1.jpg",
          author: "Э.Дөлгөөн",
         
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66dfee67_857e89_1.jpg",
          author: "Д.Цэнджав",
         
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66dfea51_ad8d74_1.jpg",
          author: "Б.Дэлгэрцэцэг",
          
        },
      ].map((item, index) => (
        <View key={index} style={{ marginRight: 15, alignItems: "center" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50, // Adds rounded corners
            }}
            source={{ uri: item.uri }}
          />
          <Text style={{ color: "gray", marginTop: 5 }}>{item.author}</Text>
          
        </View>
      ))}

      {/* See More Button */}
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#007BFF",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 40, // Rounded button
        }}
        onPress={() => alert("See More clicked!")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>See More</Text>
      </TouchableOpacity>
    </ScrollView>




    <View  style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Эрхлэн гаргагч, хэвлэлийн газрууд 📚</Text>
      </View>

    <ScrollView horizontal={true} style={{ flexDirection: "row", padding: 10 }}>
      {[
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df99a1_79c89b_1.jpg",
          author: "Pub Publishing",
          
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df9999_edebe4_1.jpg",
          author: "Оюуны Соронз",
          
        },
        {
          uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/photos/55356/5f23de53_acb1b8_1.jpg",
          author: "Zerolex LLC",
         
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df9959_858382_1.jpg",
          author: "Гэрлийн Өргөө",
         
        },
        {
          uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df9960_ddafa6_1.jpg",
          author: "Done publishing",
          
        },
      ].map((item, index) => (
        <View key={index} style={{ marginRight: 15, alignItems: "center" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50, // Adds rounded corners
            }}
            source={{ uri: item.uri }}
          />
          <Text style={{ color: "gray", marginTop: 5 }}>{item.author}</Text>
          
        </View>
      ))}

      {/* See More Button */}
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#007BFF",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 40, // Rounded button
        }}
        onPress={() => alert("See More clicked!")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>See More</Text>
      </TouchableOpacity>
    </ScrollView>





    </ScrollView>
  </View>





);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});
const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "blue" }}
          />
        )}
      />
      <Text>HELLO WORLD</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
    headphonesIcon: {
    position: "absolute",
    top: 2,
    right: 2,  // Fix to top-right corner
    backgroundColor: "rgba(0, 0, 0, 0.6)",  // Optional, for visibility
    borderRadius: 50,
    padding: 3,
  },
});
