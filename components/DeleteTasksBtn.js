import { Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./Styles/DeleteTasks.style";
import { useToDoCtx } from "./Contexts/ToDoContext";

function DeleteTasksBtn({ openDialog }) {
  const areAnyTasks = useToDoCtx().tasks.length === 0;
  return (
    <TouchableOpacity onPress={openDialog} disabled={areAnyTasks}>
      <Text>
        <FontAwesome5
          name={"trash-alt"}
          brand
          style={[
            styles.deleteTasksBtn,
            areAnyTasks && styles.deleteTasksBtnDisabled,
          ]}
        />
      </Text>
    </TouchableOpacity>
  );
}

export default DeleteTasksBtn;
