import HomePage from "../pages/Home/home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultPage from "../pages/Result/result";

const AppStack = createNativeStackNavigator();

const Routes: React.FC = () => (
  <AppStack.Navigator initialRouteName="Resultado">
    <AppStack.Screen
      name="Home"
      component={HomePage}
      options={{ title: "Home", headerShown: false }}
    />
    <AppStack.Screen
      name="Resultado"
      component={ResultPage}
      options={{ title: "Resultado", headerShown: false }}
    />
  </AppStack.Navigator>
);

export default Routes;
