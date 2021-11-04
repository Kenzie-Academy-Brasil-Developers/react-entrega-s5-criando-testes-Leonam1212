import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Search from "../../components/Search/index.tsx";
import api from "../../services/index.tsx";
import Providers from "../../providers";
import MockAdapter from "axios-mock-adapter";
const apiMock = new MockAdapter(api);

describe("Search component flow", () => {
  it("must be able to enter type and click", async () => {
    apiMock.onGet("29118510").replyOnce(200, {
        bairro: "Santa Rita",
        cidade: "Vila Velha",
        estado: "ES",
        logradouro: "Rua Leopoldo Temperaneo",
    });
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(inputField, { target: { value: 29118510 } });
    fireEvent.click(buttonElement);


    await waitFor(() => {
      expect(inputField).toHaveValue(29118510);
    });
  });
});
