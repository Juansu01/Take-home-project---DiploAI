export interface ToDoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type ToDoListProps = {
  ToDoItems: ToDoItem[];
};
