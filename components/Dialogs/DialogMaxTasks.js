import Dialog from "react-native-dialog";
import styles from "./DialogMaxTasks.style";
import { colorRedLight } from "../Styles/Colors";

function DialogMaxTask({ closeDialog, isDialogOpen }) {
  return (
    <Dialog.Container
      visible={isDialogOpen}
      footerStyle={styles.dialogFooter}
      onBackdropPress={closeDialog}
    >
      <Dialog.Title style={styles.dialogTitle}>
        You have reached the maximum number of tasks !
      </Dialog.Title>
      <Dialog.Description style={styles.dialogDescription}>
        Please delete a task in order to add a new one.
      </Dialog.Description>
      <Dialog.Button
        label="OK"
        styel={styles.dialogBtn}
        color={colorRedLight}
        sty
        bold
        onPress={closeDialog}
      />
    </Dialog.Container>
  );
}

export default DialogMaxTask;
