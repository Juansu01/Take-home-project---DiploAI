import { Fragment } from "react";

import Navigation from "./components/Layout/Navigation";
import FormContainer from "./components/UI/FormContainer";
import Form from "./components/Form/Form";
import TaskList from "./components/Task/TaskList";

export default function Home() {
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
          <TaskList />
        </FormContainer>
      </section>
    </Fragment>
  );
}
