import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    padding: 22,
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowRadius: 6,
    shadowColor: "#000",
    shadowOffset: { height: 3 },
    shadowOpacity: 0.2,
    elevation: 7,
    marginBottom: 20,
  },
  cardHeader: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  cardProperty: {
    fontWeight: "bold",
    fontSize: 24,
    opacity: 0.7,
  },
  cardPropertValue: {
    fontSize: 16,
    color: "#737380",
    marginTop: 15,
  },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardButton: {
    backgroundColor: "#E04052",
    borderRadius: 10,
    padding: 15,
  },
  cardButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  detailsButtonText: {
    color: "#E04022",
    fontSize: 16,
    fontWeight: "600",
  },
});
