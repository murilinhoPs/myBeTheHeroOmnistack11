import { StyleSheet } from "react-native";

export default StyleSheet.create({
  case: {
    padding: 26,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderColor:'grey',
    borderWidth:2.5,
    borderStyle:'solid'
  },
  caseHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 5,
  },
  caseHeaderItem: {
    paddingBottom: 20,
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
  },
  divider: {
    paddingHorizontal: 0,
    backgroundColor: "#737380",
    height: 1.8,
    opacity: 0.6,
    marginTop: 30,
    width: "110%",
    marginLeft: -15,
  },
  detailsButton: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "105%",
    marginLeft: -8,
    height: 30,
  },
  detailsButtonText: {
    color: "#ef5350",
    fontSize: 16,
    fontWeight: "600",
  },
});
