import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 15,
  },
  content: {
    marginTop: 30,
  },
});
