import { ToDoItem } from "@/types/todo";

export function sortToDos(toDos: ToDoItem[]): void {
  toDos.sort((a, b) => {
    if (a.completed !== b.completed) {
      // If "completed" properties are different, prioritize "completed: false" first
      return a.completed ? 1 : -1;
    } else {
      // If "completed" properties are the same, sort lexicographically by "title"
      return a.title.localeCompare(b.title);
    }
  });
}
