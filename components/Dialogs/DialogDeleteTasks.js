import { useMemo, useState } from "react";
import Dialog from "react-native-dialog";
import RadioGroup from "react-native-radio-buttons-group";
import styles from "../Styles/DeleteTasks.style";
import {
  colorBlue,
  colorBlueLittleDark,
  colorRedLight,
} from "../Styles/Colors";
import { useToDoCtx } from "../Contexts/ToDoContext";

const radioBtnStyle = { color: colorBlueLittleDark, size: 20 };
const radioButtons = [
  {
    id: "all",
    label: "All",
    value: "all",
    ...radioBtnStyle,
  },
  {
    id: "in progress",
    label: "In progress",
    value: "in progress",
    ...radioBtnStyle,
  },
  {
    id: "done",
    label: "Done",
    value: "done",
    ...radioBtnStyle,
  },
];

function DialogDeleteTasks({ closeDialog, isDialogOpen }) {
  const [tasksToDelete, setTasksToDelete] = useState("all");
  const { getCompletedTasks, getInProgressTasks, deleteTasksByCriteria } =
    useToDoCtx();
  const numOfCompletedTasks = getCompletedTasks().length;
  const numOfInProgressTasks = getInProgressTasks().length;
  const toDeleteALLTasks = useMemo(
    () => numOfCompletedTasks === 0 || numOfInProgressTasks === 0,
    []
  );

  function deleteTasks() {
    deleteTasksByCriteria(tasksToDelete);
    close();
  }

  function close() {
    closeDialog();
    setTimeout(() => {
      setTasksToDelete("all");
    }, 300);
  }

  return (
    <Dialog.Container
      visible={isDialogOpen}
      footerStyle={styles.dialogFooter}
      onBackdropPress={close}
    >
      <Dialog.Title style={styles.dialogTitle}>
        {toDeleteALLTasks
          ? "Do you want to delete all tasks ?"
          : "Which tasks to delete ?"}
      </Dialog.Title>
      {!toDeleteALLTasks && (
        <Dialog.Description>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setTasksToDelete}
            selectedId={tasksToDelete}
            layout={"row"}
            labelStyle={styles.radioLabel}
          />
        </Dialog.Description>
      )}
      <Dialog.Button label="Cancel" onPress={close} color={colorBlue} bold />
      <Dialog.Button
        label="Delete"
        color={colorRedLight}
        bold
        onPress={deleteTasks}
      />
    </Dialog.Container>
  );
}

export default DialogDeleteTasks;
