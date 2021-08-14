import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-web-swiper";

const windowWidth = Dimensions.get('window').width;

export default function IntroCarousel({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        controlsProps={{
          prevPos: false,
          nextPos: false
        }}
        style={styles.slideContainer}
      >
        <View>
          <Image style={styles.swiperImages} source={require('../assets/Images/introOne.png')}/>
          <Text style={styles.swiperText}>Community Driven</Text>
          <Text style={styles.supportText}>
            Our ecosystem fully depends on the community of our users. Now, the community is you.
          </Text>
        </View>
        <View>
          <Image style={styles.swiperImage} source={require('../assets/Images/introTwo.png')}/>
          <Text style={styles.swiperText}>24/7 Support & Care</Text>
          <Text style={styles.supportText}>
            We're always ready to support in need of users. We love to care Anytime, Anyhow, & Anywhere.
          </Text>
        </View>
        <View>
          <Image style={styles.swiperImage} source={require('../assets/Images/introThree.png')}/>
          <Text style={styles.swiperText}>Decentralized Censorship</Text>
          <Text style={styles.supportText}>
          We're not controlled by a single authority or a person. We and our data are completely safe.
          </Text>
        </View>
      </Swiper>

      <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('language-selector')}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.statusBarHeight : 0,
    width: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Dimensions.get("window").height * 0.04
  },
  slideContainer: {
    flex: 1,
  },
  getStartedBtn: {
    backgroundColor: "#000",
    paddingVertical: 20,
    marginHorizontal: 25
  },
  getStartedText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600"
  },
  swiperImages: {
    marginTop: Dimensions.get('window').height * 0.18,
    alignSelf: "center",
    width: windowWidth * 0.8,
    height: windowWidth * 0.8
  },
  swiperImage: {
    marginTop: Dimensions.get('window').height * 0.20,
    alignSelf: "center",
    width: windowWidth * 0.72,
    height: windowWidth * 0.72,
    marginBottom: 20
  },
  swiperText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700"
  },
  supportText: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 17,
    color: "#5a5a5a",
    marginTop: 10,
  }
});
