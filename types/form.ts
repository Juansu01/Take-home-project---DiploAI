import { ChangeEvent } from "react";
import { FormEventHandler } from "react";
import React from "react";

export interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {};
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  userInput: string;
}
