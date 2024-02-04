import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./Header.style";
import todoIcon from "../assets/toDo_icon.png";
import { useThemeCtx } from "./Contexts/ThemeContext";
import { colorBlue } from "./Colors";

function Header() {
  const themeCtx = useThemeCtx();
  const isNightTheme = themeCtx.isNightTheme();

  return (
    <View style={[styles.container, isNightTheme && styles.containerDark]}>
      <Image source={todoIcon} style={styles.img} resizeMode="contain" />
      <Text style={styles.title}>To do App</Text>
      <TouchableHighlight
        style={styles.changeThemeBtn}
        onPress={() => themeCtx.toggleDayNight()}
        activeOpacity={0.7}
        underlayColor={colorBlue}
      >
        <View
          style={[
            styles.changeThemeBtnCtn,
            isNightTheme && styles.changeThemeBtnCtnDay,
          ]}
        />
      </TouchableHighlight>
    </View>
  );
}

export default Header;
