import { createContext, useContext, useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const themeCtx = createContext();

const themeAccepted = { day: "day", night: "night" };

function ThemeContext({ children }) {
  const [currentTheme, setCurrenTheme] = useState(themeAccepted.day);
  const firstRender = useRef(true);

  useEffect(() => {
    const getTheme = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@theme");
        const theme = jsonValue !== null ? jsonValue : themeAccepted.day;
        firstRender.current = false;
        setCurrenTheme(theme);
      } catch (e) {
        console.error(e);
      }
    };

    getTheme();
  }, []);

  useEffect(() => {
    async function updateStorage() {
      try {
        await AsyncStorage.setItem("@theme", currentTheme);
      } catch (e) {
        console.error(e);
      }
    }

    if (!firstRender.current) {
      updateStorage();
    }
  }, [currentTheme]);

  function toggleDayNight() {
    setCurrenTheme((oldState) =>
      oldState === themeAccepted.day ? themeAccepted.night : themeAccepted.day
    );
  }

  function isNightTheme() {
    return currentTheme === themeAccepted.night;
  }

  function useDayTheme() {
    setCurrenTheme(themeAccepted.day);
  }

  function useNightTheme() {
    setCurrenTheme(themeAccepted.night);
  }

  return (
    <themeCtx.Provider
      value={{
        currentTheme,
        useDayTheme,
        useNightTheme,
        toggleDayNight,
        isNightTheme,
      }}
    >
      {children}
    </themeCtx.Provider>
  );
}

export function useThemeCtx() {
  return useContext(themeCtx);
}

export default ThemeContext;
