import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";


import loginScreen from "./screens/loginScreen";


import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}