context("Search Cep", () => {
      it("Try to get a zip code", () => {
        cy.visit('http://localhost:3000')  
        cy.viewport(1440, 900) 

        cy.intercept("GET", "/29118510", {
            bairro: "Santa Rita",
            cep: "29118510",
            cidade: "Vila Velha",
            cidade_info: {area_km2: "209,965", codigo_ibge: "3205200"},
            estado: "ES",
            estado_info: {area_km2: "46.089,390", codigo_ibge: "32", nome: "Espírito Santo"},
            logradouro: "Rua Leopoldo Temperaneo",
            },
          ).as("new-cep");

          cy.get("input[type=number]").type("29118510");
          cy.get("button[name=buttonSubmit]").click()
   })
});