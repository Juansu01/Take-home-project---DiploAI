import { ToDoItem } from "@/types/todo";

export async function fetchToDos(amount: number = 5): Promise<ToDoItem[]> {
  const ToDos: ToDoItem[] = [];
  for (let i = 1; i <= amount; i++) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    if (response.ok) {
      const toDo = await response.json();
      ToDos.push(toDo as ToDoItem);
    }
  }
  return ToDos;
}
