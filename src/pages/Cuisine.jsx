import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, GridCard } from '../components/styled-components/styledComps';
import Error from './Error';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.59 }}
            exit={{ opacity: 0 }}>
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
        </motion.div>
    )
}

export default Cuisine