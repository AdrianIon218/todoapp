import { StyleSheet } from "react-native";
import {
  colorBlack,
  colorGray,
  colorGrayLight,
  colorLightGreen,
} from "./Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 84,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 7,
    paddingRight: 36,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerDark: {
    backgroundColor: colorGray,
  },
  txt: {
    fontSize: 18,
    color: "rgb(66, 135, 245)",
    fontWeight: "700",
  },
  txtDark: {
    color: "white",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "green",
  },
  darkCompleted: {
    textDecorationLine: "line-through",
    color: "lightgreen",
  },
  checkMarkCtn: {
    position: "absolute",
    right: 4,
    top: "50%",
    justifyContent: "space-evenly",
    transform: [{ translateY: -8 }],
  },
  editCtn: {
    position: "absolute",
    right: 4,
    paddingHorizontal: 4,
    justifyContent: "center",
    height: "100%",
  },
  checkMark: {
    fontSize: 18,
    color: "green",
  },
  editMark: {
    fontSize: 18,
    color: "rgb(204, 169, 55)",
  },
});
