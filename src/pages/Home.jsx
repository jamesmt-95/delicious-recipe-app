import { useState, useEffect } from 'react';
// sample recipes data
import data from '../components/sampleRecipesData'
import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
import './Home.css'

const Home = () => {

    // const [popular, setPopular] = useState([]); - to use with fetch
    // const [veggies, setVeggies] = useState([]); - to use with fetch
    const [popular, setPopular] = useState(data);
    const [veggies, setVeggies] = useState(data);

    useEffect(() => {
        // getPopular()
        // getVeggies()
    }, []);

    const getPopular = async () => {

        // ##### Using localStorage #####
        // Intially, store fetch data into localStorage. If it's available use with state
        const checkLocalStorage = localStorage.getItem("popular")
        if (checkLocalStorage) {
            setPopular(checkLocalStorage)
        }
        else {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/random?&number=${9}&apiKey=${import.meta.env.VITE_API_KEY
                }`
            );
            const data = await res.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes);
            // setPopular(JSON.parse(localStorage.getItem("popular")))
        }

        // ##### Using fetch #####
        // const res = await fetch(
        //   `https://api.spoonacular.com/recipes/random?&number=${9}&apiKey=${import.meta.env.VITE_API_KEY
        //   }`
        // );
        // const data = await res.json();
        // setPopular(data.recipes);
    };

    const getVeggies = async () => {
        //  &tags=vegetarian - for veggies
        const res = await fetch(
            `https://api.spoonacular.com/recipes/random?&number=${9}&tags=vegetarian&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json();

    };

    return (
        <div className="home">
            <Popular popular={popular} />
            <Veggie veggie={veggies} />
        </div>
    )


}


export default Home