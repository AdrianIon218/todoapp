import { StyleSheet } from "react-native";
import { colorLightGreen } from "./Colors";

export default styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    right: 7,
    backgroundColor: colorLightGreen,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "green",
  },
  containerFull: {
    backgroundColor: "rgba(196, 65, 78, 0.8)",
    borderColor: "red",
  },
  text: {
    fontSize: 15,
    color: "green",
    fontWeight: "800",
  },
  textContainerFull: {
    color: "white",
  },
});
