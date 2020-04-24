import { StyleSheet } from "react-native";

export default StyleSheet.create({
  case: {
    padding: 25,
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
    borderColor:'grey',
    borderWidth:2.5,
    paddingHorizontal:35
  },
  caseHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight:5
  },
  caseProperty: {
    fontWeight: "bold",
    fontSize: 15,
    opacity: 0.7,
    paddingBottom: 8,
    paddingTop: 5,
  },
  casePropertValue: {
    fontSize: 15,
    color: "#737380",
    marginBottom: 10,
  },
  divider: {
    paddingHorizontal: 0,
    backgroundColor: "#737380",
    height: 1.3,
    opacity: 0.6,
    marginTop: 30,
    width: "110%",
    marginLeft: -15,
  },
  detailsButton: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "105%",
    marginLeft: -8,
  },
  detailsButtonText: {
    color: "#E04052",
    fontSize: 16,
    fontWeight: "600",
  },
});
