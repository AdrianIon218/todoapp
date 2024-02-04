import { View, ScrollView, Text } from "react-native";
import styles from "./ToDoList.style";
import { useToDoCtx } from "./Contexts/ToDoContext";
import Task from "./Task";
import DialogEditTask from "./Dialogs/DialogEditTask";
import { useState } from "react";
import { useThemeCtx } from "./Contexts/ThemeContext";

const initialEditFormState = {
  isVisible: false,
  toDo: {
    id: "",
    title: "",
    isCompleted: false,
  },
};

function ToDoList() {
  const {
    currentFilter,
    tasks,
    getCompletedTasks,
    getInProgressTasks,
    scrollViewRef,
  } = useToDoCtx();
  const [editingForm, setEditingForm] = useState(initialEditFormState);
  const isDarkMode = useThemeCtx().isNightTheme();

  const filteredTasks =
    currentFilter === "all"
      ? tasks
      : currentFilter === "inProgress"
      ? getInProgressTasks()
      : getCompletedTasks();

  const taskComps = filteredTasks.map((item) => (
    <Task
      title={item.title}
      isCompleted={item.isCompleted}
      id={item.id}
      key={item.id}
      onEdit={() => openEditingDialog(item)}
    />
  ));

  function closeEditingDialog() {
    setEditingForm((oldState) => ({ ...oldState, isVisible: false }));
  }

  function openEditingDialog(toDoParam) {
    setEditingForm({
      isVisible: true,
      toDo: toDoParam,
    });
  }

  return (
    <>
      <DialogEditTask
        isDialogOpen={editingForm.isVisible}
        toDo={editingForm.toDo}
        closeDialog={closeEditingDialog}
      />
      <ScrollView ref={scrollViewRef}>
        <View style={styles.container}>
          {taskComps.length === 0 ? (
            <Text
              style={[
                styles.titleMessage,
                isDarkMode && styles.titleMessageDark,
              ]}
            >
              {tasks.length === 0
                ? "There are no tasks, please create new tasks !"
                : "There are no tasks of this category !"}
            </Text>
          ) : (
            taskComps
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default ToDoList;
