import { useState, useEffect } from 'react';
// sample recipes data
// import data from '../components/sampleRecipesData'
import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
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
        const checkLocalStorage = localStorage.getItem("popular")
        if (checkLocalStorage) {
            setPopular(JSON.parse(checkLocalStorage))
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
    };

    const getVeggies = async () => {
        //  &tags=vegetarian - for veggies
        const getLocalVeggies = localStorage.getItem('veggies');
        if (getLocalVeggies) {
            setVeggies(JSON.parse(getLocalVeggies))
        }
        else {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/random?&number=${9}&tags=vegetarian&apiKey=${import.meta.env.VITE_API_KEY
                }`
            );
            const data = await res.json();
            localStorage.setItem('veggies', JSON.stringify(data.recipes))
            setPopular(data.recipes);
            // setVeggies(JSON.parse(localStorage.getItem('veggies')))
        }

    };

    return (
        <div className="home">
            <Popular popular={popular} />
            <Veggie veggie={veggies} />
        </div>
    )


}


export default Home