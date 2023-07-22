import { ToDoItem } from "@/types/todo";

function generateUniqueNumbersArray(N: number): number[] {
  // Create an array with numbers from 1 to N
  const numbersArray: number[] = Array.from(
    { length: N },
    (_, index) => index + 1
  );

  // Fisher-Yates (Knuth) Shuffle algorithm
  for (let i = numbersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
  }

  return numbersArray;
}

export async function fetchToDos(amount: number = 5): Promise<ToDoItem[]> {
  const ToDos: ToDoItem[] = [];
  const uniqueNumbersArray = generateUniqueNumbersArray(amount);
  for (const item of uniqueNumbersArray) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${item}`
    );
    if (response.ok) {
      const toDo = await response.json();
      ToDos.push(toDo as ToDoItem);
    }
  }
  return ToDos;
}
