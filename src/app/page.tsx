import { Fragment } from "react";

import Navigation from "./components/Layout/Navigation";
import FormContainer from "./components/UI/FormContainer";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <main className="d-flex justify-content-center pt-5">
        <FormContainer>
          <Form></Form>
        </FormContainer>
      </main>
    </Fragment>
  );
}
