import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import GiveClasses from "../pages/GiveClasses";
import StudyTabs from "./StudyTabs";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
