import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Menu.style";
import { useToDoCtx } from "./Contexts/ToDoContext";
import { useThemeCtx } from "./Contexts/ThemeContext";

const MenuBtns = [
  { filter: "all", text: "All" },
  { filter: "inProgress", text: "In progress" },
  { filter: "done", text: "Done" },
];

function Menu() {
  const { tasks, currentFilter, getCompletedTasks, updateFilter } =
    useToDoCtx();
  const numOfCompletedTasks = getCompletedTasks().length;
  const isDarkMode = useThemeCtx().isNightTheme();

  const MenuBtnsComps = MenuBtns.map((item, index) => {
    const isTheCurrentFilter = currentFilter === item.filter;

    return (
      <TouchableOpacity
        disabled={isTheCurrentFilter}
        style={[styles.menuBtn, isTheCurrentFilter && styles.menuBtnSelected]}
        key={`${item.filter}-${index}`}
        onPress={() => updateFilter(item.filter)}
      >
        <Text style={[styles.txt, isTheCurrentFilter && styles.txtSelected]}>
          {item.text}(
          {item.filter === "all"
            ? tasks.length
            : item.filter === "inProgress"
            ? tasks.length - numOfCompletedTasks
            : numOfCompletedTasks}
          )
        </Text>
      </TouchableOpacity>
    );
    0;
  });

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {MenuBtnsComps}
    </View>
  );
}

export default Menu;
