const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllInfo } = require('../controllers/index');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res)=>{
    const name = req.query.name;
    let pokeTotal = await getAllInfo();
    if (name) {
        let pokeName = await pokeTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        pokeName.length ?
        res.status(200).send(pokeName) :
        res.status(404).send('Pokemon not found')
    } else {
        //console.log('all pokemons: ', pokeTotal)
        res.status(200).send(pokeTotal)
    }
})

module.exports = router;
