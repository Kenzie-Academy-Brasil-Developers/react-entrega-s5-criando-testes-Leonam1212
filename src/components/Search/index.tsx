import React from "react";
import { Input, Button, Icon, Header } from "semantic-ui-react";
import { useLocateCep } from "../../providers/CepProvider";

const Search = () => {
  const { cepNumber, setCepNumber, handleSearch } = useLocateCep();
  return (
    <>
      <Header as="h2" icon>
        <Icon name="map" />
        Busca de endereço
      </Header>
      <div className="Search">
        <Input
          type="number"
          placeholder="Insira o CEP"
          onChange={(e) => setCepNumber(e.target.value)}
        />
        <Button
          name = "buttonSubmit"
          primary
          disabled={!cepNumber}
          onClick={() => handleSearch(cepNumber)}
        >
          <Icon name="search" />
          Buscar pelo CEP
        </Button>
      </div>
    </>
  );
};

export default Search;
