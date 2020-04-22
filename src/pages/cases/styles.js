import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F0F0F5",
    paddingTop: Constants.statusBarHeight + 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#131300",
    opacity: 0.8,
    marginTop: 40,
    marginBottom: 16,
  },
  titleDescription: {
    color: "#737380",
    fontSize: 18,
    lineHeight: 26,
    paddingRight: 20,
  },
});
