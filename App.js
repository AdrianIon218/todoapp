import { ImageBackground, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./App.style";
import paperBackground from "./assets/paper_background.jpg";
import paperBackgroundDark from "./assets/paper_background_dark.jpg";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ToDoList from "./components/ToDoList";
import ToDoContextProvider from "./components/Contexts/ToDoContext";
import AddTodoBtn from "./components/AddTodoBtn";
import ThemeContext, { useThemeCtx } from "./components/Contexts/ThemeContext";
import { useFonts } from "expo-font";
import { colorGray } from "./components/Styles/Colors";

export default function App() {
  const [isFontLoaded] = useFonts({
    Roboto: require("./assets/Roboto.ttf"),
  });
  return (
    <ToDoContextProvider>
      <ThemeContext>{isFontLoaded && <Main />}</ThemeContext>
    </ToDoContextProvider>
  );
}

function Main() {
  const isDarkMode = useThemeCtx().isNightTheme();
  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <StatusBar
        backgroundColor={isDarkMode ? colorGray : "transparent"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />
          <ImageBackground
            style={styles.img_bg}
            source={isDarkMode ? paperBackgroundDark : paperBackground}
          >
            <Menu />
            <ToDoList />
            <AddTodoBtn />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
