import { StyleSheet } from "react-native";
import { colorGray } from "./Colors";

export default styles = StyleSheet.create({
  container: {
    height: "7%",
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    borderBottomWidth: 4,
    borderBottomColor: "rgb(66, 135, 245)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 7,
    paddingTop: 7,
  },
  containerDark: {
    backgroundColor: colorGray,
  },
  txt: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "rgb(66, 135, 245)",
  },
  txtSelected: {
    color: "white",
  },
  menuBtn: {
    paddingHorizontal: 5,
    paddingTop: "1%",
    height: "100%",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  menuBtnSelected: {
    backgroundColor: "rgb(66, 135, 245)",
  },
});
