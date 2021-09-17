import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/colors";

const ShopNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        title: "Shopply",
      }}
    >
      <Stack.Screen
        name="products"
        component={ProductsOverviewScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ShopNavigator;
