import { TouchableOpacity, Text, Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./Task.style";
import { useToDoCtx } from "./Contexts/ToDoContext";
import { useThemeCtx } from "./Contexts/ThemeContext";

function Task({ id, title, isCompleted, onEdit }) {
  const ctx = useToDoCtx();
  const isDarkMode = useThemeCtx().isNightTheme();

  function toggleTask() {
    ctx.toggleTask(id);
  }

  function deleteTask() {
    Alert.alert("Do you want to delete this task ?", `"${title.trim()}"`, [
      {
        text: "Cancel",
        style: "cancel ",
      },
      {
        text: "Yes",
        onPress: () => ctx.deleteTask(id),
        style: "destructive",
      },
    ]);
  }

  return (
    <TouchableOpacity
      style={[styles.container, isDarkMode && styles.containerDark]}
      activeOpacity={0.8}
      onPress={toggleTask}
      onLongPress={deleteTask}
    >
      <Text
        style={[
          styles.txt,
          isCompleted && (isDarkMode ? styles.darkCompleted : styles.completed),
          !isCompleted && isDarkMode && styles.txtDark,
        ]}
      >
        {title}
      </Text>

      {isCompleted ? (
        <Text style={styles.checkMarkCtn}>
          <FontAwesome5
            name={"check"}
            brand
            style={[styles.checkMark, isDarkMode && { color: "lightgreen" }]}
          />
        </Text>
      ) : (
        <TouchableOpacity style={styles.editCtn} onPress={onEdit}>
          <Text>
            <FontAwesome5 name={"edit"} brand style={styles.editMark} />
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

export default Task;
