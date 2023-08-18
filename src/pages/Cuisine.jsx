import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom';
import { Grid, GridCard } from '../components/styled-components/styledComps';
const Cuisine = () => {
    const params = useParams()
    const [cuisine, setCuisine] = useState([]);


    useEffect(() => {
        getCuisine(params.type) //in route(Pages.jsx) it's mentioned :type
        // console.log(params.type)  
    }, [params])

    const getCuisine = async (name) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json()
        setCuisine(data.results)
        // console.log(data.results)
    }

    return (
        <Grid>
            {cuisine.map((item) => (
                <GridCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </GridCard>
            ))}
        </Grid>
    )
}

export default Cuisine