import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    marginTop:10,
    padding: 22,
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 2.5,
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
    justifyContent: "space-between",
  },
  cardButton: {
    backgroundColor: "#fcf4f4",
    borderRadius: 10,
    padding: 15,
    width: "46%",
    alignItems: "center",
    shadowRadius: 6,
    shadowColor: "#000",
    shadowOffset: { height: 3 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderColor:'#ef5350',
    borderWidth:3
  },
  cardButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ef5350",
  },
  detailsButtonText: {
    color: "#ef5350",
    fontSize: 16,
    fontWeight: "600",
  },
});
