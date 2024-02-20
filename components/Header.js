import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./Styles/Header.style";
import todoIcon from "../assets/toDo_icon.png";
import { useThemeCtx } from "./Contexts/ThemeContext";
import { colorBlue } from "./Styles/Colors";
import DeleteTasksBtn from "./DeleteTasksBtn";
import DialogDeleteTasks from "./Dialogs/DialogDeleteTasks";
import { useState } from "react";

function Header() {
  const themeCtx = useThemeCtx();
  const isNightTheme = themeCtx.isNightTheme();
  const [isDeleteTasksOpen, setIsDeleteTasksOpen] = useState(false);
  const [isDialogAvailable, setIsDialogAvailable] = useState(true);

  function closeDeleteTasksDialog() {
    setIsDeleteTasksOpen(false);
    setTimeout(() => setIsDialogAvailable(false), 300);
  }

  function openDeleteTasksDialog() {
    setIsDeleteTasksOpen(true);
    setIsDialogAvailable(true);
  }

  return (
    <>
      {isDialogAvailable && (
        <DialogDeleteTasks
          isDialogOpen={isDeleteTasksOpen}
          closeDialog={closeDeleteTasksDialog}
        />
      )}
      <View style={[styles.container, isNightTheme && styles.containerDark]}>
        <Image source={todoIcon} style={styles.img} resizeMode="contain" />
        <Text style={styles.title}>To do App</Text>
        <View style={styles.buttonsCtn}>
          <DeleteTasksBtn openDialog={openDeleteTasksDialog} />
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
      </View>
    </>
  );
}

export default Header;
