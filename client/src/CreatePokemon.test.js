import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import isReact from "is-react";

import * as data from "../../api/src/db";
import CreatePokemon from "./components/CreatePokemon/index.jsx";


configure({ adapter: new Adapter() });

describe("<CreatePokemon />", () => {
  const state = { pokemons: data.pokemons };
  const mockStore = configureStore([thunk]);
  

  beforeAll(() => expect(isReact.classComponent(CreatePokemon)).toBeFalsy());

  
  describe("Estructura", () => {
    let CreatePokemon;
    let store = mockStore(state);
    beforeEach(() => {
        CreatePokemon = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/pokemons"]}>
            <CreatePokemon/>
          </MemoryRouter>
        </Provider>
      );
    });

    it("Debería renderizar un form", () => {
      expect(CreatePokemon.find("form")).toHaveLength(1);
    });

    xit('Debería renderizar un label con el texto "Name: "', () => {
      expect(ActivityCreate.find("label").at(0).text()).toEqual("Name: ");
    });

    xit('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
      expect(ActivityCreate.find('input[name="name"]')).toHaveLength(1);
    });

    xit('Debería renderizar un label con el texto "Difficulty: "', () => {
      expect(ActivityCreate.find("label").at(1).text()).toEqual("Difficulty: ");
    });

    xit('Debería renderizar un select con la propiedad "name" igual a "difficulty"', () => {
      expect(ActivityCreate.find('select[name="difficulty"]')).toHaveLength(1);
    });

    xit('Debería renderizar un label con el texto "Duration: "', () => {
      expect(ActivityCreate.find("label").at(2).text()).toEqual("Duration: ");
    });

    xit('Debería renderizar un input con la propiedad "name" igual a "duration"', () => {
      expect(ActivityCreate.find('input[name="duration"]')).toHaveLength(1);
    });//---------------------------------

    xit('Debería renderizar un label con el texto "Season: "', () => {
        expect(ActivityCreate.find("label").at(3).text()).toEqual("Season: ");
    });

    xit('Debería renderizar un select con la propiedad "name" igual a "season"', () => {
        expect(ActivityCreate.find('select[name="season"]')).toHaveLength(1);
    });

    xit('Debería renderizar un label con el texto "Country: "', () => {
        expect(ActivityCreate.find("label").at(4).text()).toEqual("Country: ");
    });

    xit('Debería renderizar un select con la propiedad "name" igual a "countries"', () => {
        expect(ActivityCreate.find('select[name="countries"]')).toHaveLength(1);
    });

    xit('Debería renderizar un button con "type" igual a "submit" y con texto "To Create"', () => {
      expect(ActivityCreate.find('button[type="submit"]')).toHaveLength(1);
      expect(ActivityCreate.find("button").at(0).text()).toEqual("To Create");
    });
  });  
});