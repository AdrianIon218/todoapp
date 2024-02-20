import { StyleSheet } from "react-native";
import { colorBlue, colorBlueLittleDark, colorGray } from "./Colors";

export default styles = StyleSheet.create({
  deleteTasksBtn: {
    fontSize: 30,
    color: colorBlue,
  },
  deleteTasksBtnDisabled: {
    color: "rgba(66, 135, 245, 0.5)",
  },
  dialogFooter: {
    marginTop: 30,
    justifyContent: "flex-end",
  },
  dialogTitle: {
    color: colorBlueLittleDark,
    textAlign: "center",
    fontWeight: "800",
    fontSize: 22,
    marginTop: -10,
    marginBottom: 20,
  },
  radioLabel: {
    color: colorBlue,
    fontWeight: "bold",
    fontSize: 17,
  },
});
