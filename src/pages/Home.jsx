import { useState, useEffect } from 'react';
// sample recipes data
// import data from '../sample-data/sampleRecipesData'
import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
import { motion } from "framer-motion"
import './Home.css'

const Home = () => {

    //to use with dummy data
    // const [popular, setPopular] = useState(data);
    // const [veggies, setVeggies] = useState(data);
    //to use with fetch
    const [popular, setPopular] = useState([]);
    const [veggies, setVeggies] = useState([]);


    useEffect(() => {
        getPopular()
        getVeggies()
    }, []);

    const getPopular = async () => {
        // ##### Using localStorage #####
        // Intially, store fetch data into localStorage. If it's available use with state
        // const checkLocalStorage = localStorage.getItem("popular")
        // if (checkLocalStorage) {
        //     setPopular(JSON.parse(checkLocalStorage))
        // }
        // else {
        //     const res = await fetch(
        //         `https://api.spoonacular.com/recipes/random?&number=${9}&apiKey=${import.meta.env.VITE_API_KEY
        //         }`
        //     );
        //     const data = await res.json();
        //     localStorage.setItem("popular", JSON.stringify(data.recipes))
        //     setPopular(data.recipes);
        //     // setPopular(JSON.parse(localStorage.getItem("popular")))
        // }

        // ##### Using fetch #####
        const res = await fetch(
            `https://api.spoonacular.com/recipes/random?&number=${9}&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes))
        setPopular(data.recipes);
    };

    const getVeggies = async () => {
        //  ##### Using localStorage #####
        //  &tags=vegetarian - for veggies
        // const getLocalVeggies = localStorage.getItem('veggies');
        // if (getLocalVeggies) {
        //     setVeggies(JSON.parse(getLocalVeggies))
        // }
        // else {
        //     const res = await fetch(
        //         `https://api.spoonacular.com/recipes/random?&number=${9}&tags=vegetarian&apiKey=${import.meta.env.VITE_API_KEY
        //         }`
        //     );
        //     const data = await res.json();
        //     localStorage.setItem('veggies', JSON.stringify(data.recipes))
        //     setPopular(data.recipes);
        //     // setVeggies(JSON.parse(localStorage.getItem('veggies')))
        // }

        // ##### Using fetch #####
        const res = await fetch(
            `https://api.spoonacular.com/recipes/random?&number=${9}&tags=vegetarian&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json();
        localStorage.setItem('veggies', JSON.stringify(data.recipes))
        setVeggies(data.recipes);

    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0 }}
        >
            <div className="home">
                <Popular popular={popular} />
                <Veggie veggie={veggies} />
            </div>
        </motion.div>
    )
}


export default Home