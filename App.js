import React from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";

// @dev library to navigate between screens
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// @dev components
import IntroCarousel from "./Screens/IntroCarousel";

const UnRegisteredUserStack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    Font.loadAsync({
      "biryani-bold": require("./assets/Fonts/Biryani/Biryani-Bold.ttf"),
    });
  }, []);

  return (
    <NavigationContainer>
      <UnRegisteredUserStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <UnRegisteredUserStack.Screen
          name="intro"
          component={IntroCarousel}
          options={{ title: "Welcome" }}
        />
      </UnRegisteredUserStack.Navigator>
    </NavigationContainer>
  );
}
