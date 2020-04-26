import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "grey",
    borderWidth: 2.5,
    borderBottomWidth: 0,
    elevation: 10,
    maxHeight: "35%",
    backgroundColor: "white",
  },
  draggableIcon: {
    backgroundColor: "grey",
  },
  wrapper: {
    backgroundColor: "rgba(30, 30, 30, 0.3)",
    backfaceVisibility: "visible",
  },
  input_field: {
    marginTop: 10,
    marginBottom: 2,
    marginRight: 20,

    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
    borderRadius: 5,
    borderColor: "#ef5350",
    borderWidth: 2.5,
    padding: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  button_text: { color: "#ef5350", fontSize: 18 },
  sheet_title: { color: "#ef5350", fontSize: 20, paddingTop: 10 },
  input_field_error_text: {
    color: "#ef5350",
    fontSize: 12,
    paddingBottom: 20,
    marginTop: -3,
  },
});
