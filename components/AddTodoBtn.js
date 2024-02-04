import { TouchableOpacity, Text, Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";

import styles from "./AddToDoBtn.style";
import { useToDoCtx } from "./Contexts/ToDoContext.js";
import { MAX_NUM_OF_TASKS } from "./Contexts/ToDoContext.js";
import DialogNewTask from "./Dialogs/DialogNewTask.js";
import DialogMaxTask from "./Dialogs/DialogMaxTasks.js";

export default function AddTodoBtn() {
  const ctx = useToDoCtx();
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [isMaxTasksOpen, setIsMaxTasksOpen] = useState(false);
  const isContainerFull = ctx.tasks.length === MAX_NUM_OF_TASKS;

  function onClick() {
    if (isContainerFull) {
      setIsMaxTasksOpen(true);
    } else {
      setIsNewTaskOpen(true);
    }
  }

  return (
    <>
      <DialogNewTask
        closeDialog={() => setIsNewTaskOpen(false)}
        isDialogOpen={isNewTaskOpen}
      />
      <DialogMaxTask
        closeDialog={() => setIsMaxTasksOpen(false)}
        isDialogOpen={isMaxTasksOpen}
      />

      <TouchableOpacity
        style={[styles.container, isContainerFull && styles.containerFull]}
        onPress={onClick}
      >
        <Text
          style={[styles.text, isContainerFull && styles.textContainerFull]}
        >
          <FontAwesome5 name={"plus"} brand /> new task
        </Text>
      </TouchableOpacity>
    </>
  );
}
