import Dialog from "react-native-dialog";
import styles from "./DialogNewTask.style";
import { useToDoCtx } from "../Contexts/ToDoContext";
import { useEffect, useState } from "react";

function DialogEditTask({ isDialogOpen, toDo, closeDialog }) {
  const ctx = useToDoCtx();
  const [taskInput, setTaskInput] = useState("");
  const disableForm =
    taskInput.length === 0 ||
    taskInput === toDo.title ||
    taskInput.trim().length === 0;

  useEffect(() => {
    if (isDialogOpen) setTaskInput(toDo.title);
  }, [isDialogOpen]);

  function onClose() {
    setTimeout(() => setTaskInput(""), 300);
    closeDialog();
  }

  function onUpdate() {
    ctx.updateTodo(toDo.id, taskInput);
    setTimeout(() => onClose(), 300);
  }

  return (
    <Dialog.Container
      visible={isDialogOpen}
      footerStyle={styles.dialogFooter}
      onBackdropPress={onClose}
    >
      <Dialog.Title style={styles.dialogTitle}>
        Edit the task title
      </Dialog.Title>
      <Dialog.Description style={styles.dialogDescription}>
        Characters: {taskInput.length}/60
      </Dialog.Description>
      <Dialog.Input
        defaultValue={toDo.title}
        style={styles.dialogInput}
        onChangeText={(text) => setTaskInput(text)}
        maxLength={60}
      />
      <Dialog.Button label="Cancel" color="red" onPress={onClose} />
      <Dialog.Button
        label="Save"
        color="rgb(29, 140, 37)"
        style={[disableForm && { opacity: 0.5 }]}
        bold
        disabled={disableForm}
        onPress={onUpdate}
      />
    </Dialog.Container>
  );
}

export default DialogEditTask;
