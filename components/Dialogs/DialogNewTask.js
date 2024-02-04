import Dialog from "react-native-dialog";
import { useToDoCtx } from "../Contexts/ToDoContext";
import styles from "./DialogNewTask.style";
import { useState } from "react";

function DialogNewTask({ closeDialog, isDialogOpen, scrollDown }) {
  const ctx = useToDoCtx();
  const [taskInput, setTaskInput] = useState("");
  const disableSaveBtn =
    taskInput.length === 0 || taskInput.trim().length === 0;

  const addTask = () => {
    ctx.addTask(taskInput);
    ctx.scrollViewRef.current.scrollToEnd({ animated: false });
    close();
  };

  const close = () => {
    setTimeout(() => setTaskInput(""), 500);
    closeDialog();
  };

  return (
    <Dialog.Container
      visible={isDialogOpen}
      footerStyle={styles.dialogFooter}
      onBackdropPress={close}
    >
      <Dialog.Title style={styles.dialogTitle}>Add a task</Dialog.Title>
      <Dialog.Description style={styles.dialogDescription}>
        Characters: {taskInput.length}/60
      </Dialog.Description>
      <Dialog.Input
        placeholder="Enter the title of the task"
        style={styles.dialogInput}
        onChangeText={(text) => setTaskInput(text)}
        maxLength={60}
      />
      <Dialog.Button label="Cancel" color="red" onPress={close} />
      <Dialog.Button
        label="Add task"
        color="rgb(29, 140, 37)"
        style={[disableSaveBtn && { opacity: 0.5 }]}
        bold
        disabled={disableSaveBtn}
        onPress={addTask}
      />
    </Dialog.Container>
  );
}

export default DialogNewTask;
