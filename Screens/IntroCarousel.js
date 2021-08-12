import React from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function IntroCarousel() {
  return (
    <View style={styles.container}>
      <SwiperFlatList index={0} showPagination>
        <View style={styles.child}>
          <Image
            source={require("../assets/Images/introOne.jpg")}
            style={styles.carouselImage}
          />
          <Text style={styles.introText}>Community Driven</Text>
        </View>
        <View style={styles.child}>
          <Image
            source={require("../assets/Images/introTwo.jpg")}
            style={styles.carouselImage}
          />
          <Text style={styles.introText}>24 Hour Care & Support</Text>
        </View>
        <View style={styles.child}>
          <Image
            source={require("../assets/Images/introThree.jpg")}
            style={styles.carouselImage}
          />
          <Text style={styles.introText}>Decentralized & Secure</Text>
        </View>
      </SwiperFlatList>

      <TouchableHighlight style={styles.getStartedBtn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableHighlight>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  child: { width, justifyContent: "center" },
  carouselImage: { width: 350, height: 350, alignSelf: "center" },
  introText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    fontFamily: "biryani-bold"
  },
  getStartedBtn: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "black",
    paddingVertical: 18,
    borderRadius: 5
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: "500",
    fontFamily: "biryani-bold"
  },
});
