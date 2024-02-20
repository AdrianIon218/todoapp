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
    fontFamily: "Roboto",
    fontSize: 20,
    color: colorBlue,
    fontWeight: "800",
  },
  buttonsCtn: {
    marginLeft: "auto",
    marginRight: "5%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 14,
    alignItems: "center",
  },
  changeThemeBtn: {
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
