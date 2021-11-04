import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search/index.tsx";

describe("Search, component Input", () => {
  test("should be to able to render an input", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Insira o CEP");
    expect(inputElement).toBeTruthy();
  });
});
