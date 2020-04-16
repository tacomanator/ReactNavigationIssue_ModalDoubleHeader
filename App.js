import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as ReactNavigationStack from "@react-navigation/stack";

const ModalScreen = ({ navigation }) => (
  <View style={[styles.container, styles.modal]}>
    <Button title="Done" onPress={navigation.goBack} />
  </View>
);

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Open modal" onPress={() => navigation.navigate("Modal")} />
  </View>
);

const HomeStack = ReactNavigationStack.createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        mode="modal"
        screenOptions={{
          cardOverlayEnabled: true,
          gesturesEnabled: true,
          ...ReactNavigationStack.TransitionPresets.ModalPresentationIOS,
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Modal"
          component={ModalScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <Button title="Cancel" onPress={navigation.goBack} />
            ),
          })}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "yellow",
  },
});
