/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Poke Prueba',
  hp: 120,
  attack: 89,
  defense: 96,
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png',
  speed: 65,
  weight: 69,
  height: 78,
  types: ['fighting', 'rock']
};

describe('*** ROUTES ***', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: false })
    .then(() => Pokemon.create(pokemon)));
//---------------------------------------------------------------------------    
    describe('GET /pokemons', () => {
      it('should get 200', () => (done) => {
        agent.get('/pokemons').then(() => done(expect(200)))
        } 
      );
    });
//---------------------------------------------------------------------------    
  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
//---------------------------------------------------------------------------      
  describe('POST /pokemons', () => {
    it('should get 200', () => (done) => {
      agent.get('/pokemons').send(pokemon).then(() => done(expect(200)))
      } 
    );
  });
//---------------------------------------------------------------------------    
  describe('GET /pokemons/:id', () => {
    it('should get 200', () => (done) => {
      agent.get('/pokemons/25').then(() => done(expect(200)))
      } 
    );
  });
});
//---------------------------------------------------------------------------    