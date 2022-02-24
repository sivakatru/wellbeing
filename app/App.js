import React from "react";
import { Badge, Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen, Complete, Dashboard, Insights, Challenges, Badges } from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Complete" component={Complete} />
          <Stack.Screen name="Insights" component={Insights} />
          <Stack.Screen name="Challenges" component={Challenges} />
          <Stack.Screen name="Badges" component={Badges} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
