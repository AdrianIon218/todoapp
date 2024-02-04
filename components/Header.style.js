import { StyleSheet } from "react-native";
import { colorBlue, colorGray } from "./Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: colorGray,
  },
  img: {
    height: "70%",
    width: 90,
    padding: 0,
  },
  title: {
    fontSize: 20,
    color: colorBlue,
    fontWeight: "800",
  },
  changeThemeBtn: {
    marginLeft: "auto",
    marginRight: "5%",
    borderRadius: 10,
  },
  changeThemeBtnCtn: {
    width: 45,
    height: 45,
    backgroundColor: colorGray,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colorBlue,
  },
  changeThemeBtnCtnDay: {
    backgroundColor: "white",
  },
});
