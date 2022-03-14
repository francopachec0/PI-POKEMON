/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  hp: 120,
  attack: 89,
  defense: 96
};

describe('*** ROUTES ***', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
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