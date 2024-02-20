import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const Context = createContext();
export const MAX_NUM_OF_TASKS = 20;

const reducer = (state, action) => {
  let idTask;

  switch (action.type) {
    case "initialize":
      return { ...state, tasks: action.payload };

    case "addTask":
      const { id, title } = action.payload;

      return state.tasks.length === MAX_NUM_OF_TASKS
        ? state
        : {
            ...state,
            tasks: [...state.tasks, { id, title, isCompleted: false }],
          };

    case "toggle":
      idTask = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === idTask
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };

    case "deleteTask":
      idTask = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== idTask),
      };

    case "deleteTasksByCriteria":
      const criteria = action.payload;
      return {
        ...state,
        tasks:
          criteria === "all"
            ? []
            : criteria === "in progress"
            ? state.tasks.filter((item) => item.isCompleted)
            : criteria === "done"
            ? state.tasks.filter((item) => !item.isCompleted)
            : state.tasks,
      };

    case "updateFilter":
      const filter = action.payload;
      return ["all", "inProgress", "done"].includes(filter)
        ? { ...state, currentFilter: filter }
        : state;

    case "updateTodo":
      const { toDoId, newTitle } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === toDoId ? { ...item, title: newTitle } : item
        ),
      };
    default:
      return state;
  }
};

function ToDoContextProvider({ children }) {
  const [tasksState, dispatch] = useReducer(reducer, {
    tasks: [],
    currentFilter: "all",
  });
  const scrollViewRef = useRef();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@toDo_list");
        const tasks = jsonValue != null ? JSON.parse(jsonValue) : [];
        dispatch({ type: "initialize", payload: tasks });
      } catch (e) {
        console.error(e);
      }
    };

    getTasks();
  }, []);

  useEffect(() => {
    async function updateStorage() {
      try {
        await AsyncStorage.setItem(
          "@toDo_list",
          JSON.stringify(tasksState.tasks)
        );
      } catch (e) {
        console.error(e);
      }
    }

    updateStorage();
  }, [tasksState.tasks]);

  const toDoCtxValue = {
    ...tasksState,
    addTask: (title) => {
      dispatch({
        type: "addTask",
        payload: {
          id: uuid.v4(),
          title,
        },
      });
    },
    scrollViewRef,
    toggleTask: (id) => {
      dispatch({ type: "toggle", payload: id });
    },
    deleteTask: (id) => {
      dispatch({ type: "deleteTask", payload: id });
    },
    getCompletedTasks: () => {
      return tasksState.tasks.filter((item) => item.isCompleted);
    },
    getInProgressTasks: () => {
      return tasksState.tasks.filter((item) => !item.isCompleted);
    },
    updateFilter: (filter) => {
      dispatch({ type: "updateFilter", payload: filter });
    },
    updateTodo: (toDoId, newTitle) => {
      dispatch({ type: "updateTodo", payload: { toDoId, newTitle } });
    },
    deleteTasksByCriteria: (criteria) => {
      dispatch({ type: "deleteTasksByCriteria", payload: criteria });
    },
  };

  return <Context.Provider value={toDoCtxValue}>{children}</Context.Provider>;
}

export const useToDoCtx = () => {
  return useContext(Context);
};

export default ToDoContextProvider;
