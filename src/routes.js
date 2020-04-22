import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Cases from "./pages/cases";
import Details from "./pages/details";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Cases" component={Cases}></AppStack.Screen>
        <AppStack.Screen name="Detail" component={Details}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
