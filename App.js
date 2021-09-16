import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/product";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator></ShopNavigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
