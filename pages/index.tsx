import Head from "next/head";
import { Fragment } from "react";
import { useState } from "react";
import React from "react";

import Navigation from "@/components/Layout/Navigation";
import FormContainer from "@/components/UI/FormContainer";
import Form from "@/components/Form/Form";
import ToDoList from "@/components/ToDo/ToDoList";
import { ListProps } from "@/types/todo";
import { fetchToDos } from "@/util/fetchToDos";
import { sortToDos } from "@/util/sortToDos";
import styles from "@/components/ToDo/ToDoList.module.css";

export default function Home(props: ListProps) {
  const [toDoList, setToDoList] = useState(props.todos);
  const [userInput, setUserInput] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const newToDos = await fetchToDos(+userInput);
    sortToDos(newToDos);
    setIsLoading(false);
    setToDoList(newToDos);
  }

  const toDoListContent = <ToDoList ToDoItems={toDoList} />;
  const isLoadingContent = (
    <div className={styles["task-list"]}>
      <h1>Fetching ToDos...</h1>
    </div>
  );

  return (
    <Fragment>
      <Head>
        <title>Take Home Project</title>
        <meta name="description" content="Built by Juansu01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <section className="d-flex justify-content-center pt-5 flex-row">
        <FormContainer>
          <Form
            userInput={userInput}
            setUserInput={setUserInput}
            onSubmit={submitHandler}
          />
        </FormContainer>
      </section>
      <section className="d-flex justify-content-center pt-5 flex-row">
        <FormContainer>
          {isLoading && isLoadingContent}
          {!isLoading && toDoListContent}
        </FormContainer>
      </section>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const toDoList = await fetchToDos();
  sortToDos(toDoList);
  return {
    props: {
      todos: toDoList,
    },
  };
}
