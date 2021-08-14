import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function LanguageSelector() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Save The Blood</Text>
      </View>
      <View>
        <Text style={styles.selectLangTitle}>Select Language</Text>
        <View style={style.btnWrapper}>
          <TouchableOpacity style={styles.languageOption}>
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageOption}>
            <Text>नेपाली</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.nextBtn}>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.languageImage}
        source={require("../assets/Images/language-selector.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.statusBarHeight : 0,
    width: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Dimensions.get("window").height * 0.03,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageImage: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.18,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: Dimensions.get("window").height * 0.05,
  },
  selectLangTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  btnWrapper: { borderWidth: 1, borderColor: "#6a6a6a", borderRadius: 15 },
  languageOption: {
    width: Dimensions.get("window").width * 0.8,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
