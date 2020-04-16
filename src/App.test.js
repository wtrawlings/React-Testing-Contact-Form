import React from "react";
import { render } from "@testing-library/react";
//import { getByText } from "@testing-library/dom"
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

 test("verify text Message is in DOM", () => {
   //arrange by feeding the app into the
   const { getByText } = render(<App />);
   //act
   const checkMessage = getByText(/message/i);
   //assert
   expect(checkMessage).toBeInTheDocument();
 });
