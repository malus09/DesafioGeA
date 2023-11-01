import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  statusbar: {},
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#242424",
  },
  elements: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  inputContainer: { height: "50%", width: "90%", justifyContent:'center', marginTop:30 },
  inputLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
    fontSize:18,
  },
  button: {
    backgroundColor: "#ea4535",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 4,
    flexDirection: "row",
  },
});

export default homeStyles;
