import { StyleSheet } from "react-native";

const resultStyle = StyleSheet.create({
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
    color: "#32dd58",
    fontWeight: "bold",
    fontSize: 28,
  },
  inputContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  inputLabel: {
    color: "white",
    fontSize: 16,
    margin:6,
    marginTop:4,
  },
  
  button: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ea4535",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 30,
    maxHeight:'auto',
    width: "60%",
    borderRadius: 4,
    flexDirection: "row",
    marginTop:'6%',
    padding:6,
  },
  buttonText: { color: "#ea4535", fontSize: 16, fontWeight:"bold" },
});

export default resultStyle;
