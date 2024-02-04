import { ImageBackground, View } from "react-native";
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

export default function App() {
  return (
    <ToDoContextProvider>
      <ThemeContext>
        <Main />
      </ThemeContext>
    </ToDoContextProvider>
  );
}

function Main() {
  const isDarkMode = useThemeCtx().isNightTheme();
  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
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
