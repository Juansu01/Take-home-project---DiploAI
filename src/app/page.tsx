import { Fragment } from "react";

import Navigation from "./components/Layout/Navigation";
import FormContainer from "./components/UI/FormContainer";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDo/ToDoList";
import { ToDoItem } from "@/types/todo";

export default function Home() {
  const DUMMY_TODOS: ToDoItem[] = [
    {
      id: 1,
      userId: 1,
      title: "TEST",
      completed: true,
    },
    {
      id: 2,
      userId: 1,
      title: "SECOND_TEST",
      completed: false,
    },
    {
      id: 3,
      userId: 1,
      title: "THIRD_TEST",
      completed: true,
    },
  ];
  return (
    <Fragment>
      <Navigation />
      <section className="d-flex justify-content-center pt-5 flex-row">
        <FormContainer>
          <Form></Form>
        </FormContainer>
      </section>
      <section className="d-flex justify-content-center pt-5 flex-row">
        <FormContainer>
          <ToDoList ToDoItems={DUMMY_TODOS} />
        </FormContainer>
      </section>
    </Fragment>
  );
}
