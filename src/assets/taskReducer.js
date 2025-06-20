function taskReducer(state, action) {
  switch (action.type) {
    case "inputChanged":
      return {
        ...state,
        input: action.payload,
      };
    case "added":
      if (!state.input.trim()) return state;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: state.input, completed: false },
        ],
        input: "",
      };
    case "toggled":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, completed: !t.completed } : t
        ),
      };
    case "deleted":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
      };
    case "edited":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, text: action.payload.text } : t
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  tasks: [],
  input: "",
};

export { initialState };
export default taskReducer;
