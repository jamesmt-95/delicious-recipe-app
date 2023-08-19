import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom';
import { Grid, GridCard } from '../components/styled-components/styledComps';
import Error from './Error';

//Link from react-router-dom, to view description

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
    }

    return (
        <>
            {cuisine ?
                <Grid>
                    {cuisine.map((item) => (
                        <GridCard key={item.id}>
                            <Link to={`/recipe-details/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                            <h4>{item.title}</h4>
                        </GridCard>
                    ))}
                </Grid >
                :
                <Error msg={'No Data Found'} />
            }
        </>
    )
}

export default Cuisine