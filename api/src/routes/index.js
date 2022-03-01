const { default: axios } = require('axios');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllInfo } = require('../controllers/index');
const { Pokemon, Type } = require('../db.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) => {
    const name = req.query.name;
    let pokeTotal = await getAllInfo();
    if (name) {
        let pokeName = await pokeTotal.filter(el => el.name.toLowerCase() === name.toLowerCase());
        pokeName.length ?
        res.status(200).send(pokeName) :
        res.status(404).send('Pokemon not found (try to write the exact name)')
    } else {
        //console.log('all pokemons: ', pokeTotal)
        res.status(200).send(pokeTotal)
    }
});



router.post('/pokemons', async (req, res) => {
    let {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        types,
        createdInDb
    } = req.body

    let newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        createdInDb
    })

    let typesDb = await Type.findAll({
        where: {name: types}
    });

    newPokemon.addType(typesDb);

    res.status(200).send('¡Pokemon Created!');

});

router.get('/pokemons/:id', async (req, res) => {
    const id = req.params.id;
    const pokemonsTotal = await getAllInfo();
    if (id) {
        let pokemonId = await pokemonsTotal.filter(p => p.id == id);
        pokemonId.length ?
        res.status(200).json(pokemonId) :
        res.status(404).send('Pokemon not found')
    }
});

router.get('/types', async (req, res) => {
    let typesApi = await axios.get('https://pokeapi.co/api/v2/type');
    let types = typesApi.data.results.map(p => p.name);
    //console.log('ALL TYPES: ', types);
    types.forEach(t => {
        Type.findOrCreate({
            where: { name: t }
        })
    })
    let allTypes = await Type.findAll();
    res.status(200).send(allTypes)
});


module.exports = router;
