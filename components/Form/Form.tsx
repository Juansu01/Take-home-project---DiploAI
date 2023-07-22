import styles from "./Form.module.css";
import { FormProps } from "@/types/form";
import React from "react";

export default function Form(props: FormProps) {
  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = +event.target.value;
    props.setUserInput(userInput > 100 ? "100" : event.target.value);
  }
  return (
    <form onSubmit={props.onSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label className="h1">Amount of todos to fetch</label>
          <input
            type="number"
            value={props.userInput}
            min="1"
            max="100"
            onChange={inputChangeHandler}
          ></input>
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Fetch</button>
      </div>
    </form>
  );
}
