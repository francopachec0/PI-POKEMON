import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../../actions";
import Paginado from "../Paginado";
import Card from "../Card";
import '../Home/index.css';


export default function Home () {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage /*setPokemonsPerPage*/] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const paginado = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return(
        <div>
            <div className="top_nav">
                <h1 className="home_title">Pokemon App</h1>
                <Link className="link_create" to="/pokemons">Create your Pokemon</Link>
                <button className="btn_reload" onClick={(e) => {handleClick(e)}}>Reload all Pokemons</button>
            </div>

            <div className="filters">
                <select>
                    <option disabled>Order by Name</option>
                    <option value="asc">From A to Z</option>
                    <option value="desc">From Z to A</option>
                </select>

                <select>
                    <option disabled>Order by Strength</option>
                    <option value="all">All</option>
                    <option value="lower-strength">Lower Strength</option>
                    <option value="higher-strength">Higher Strength</option>                 
                </select>

                <select>
                    <option disabled>Filter by Source</option>
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="Database">Created</option>
                </select>

                <select>
                    <option disabled>Filter By Type</option>
                    <option value="All">All Types</option>
                    <option value="...">...</option>
                </select>
            </div>

            <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}
            />

            <div className="cards">
                {currentPokemons?.map((p) => {
                    return (
                        <Card
                            image={p.image}
                            name={p.name}
                            types={p.types}
                            key={p.id}
                        />
                    );
                })}
            </div>  
        </div>
    )
};
