import Error from './Error';
import { Grid, GridCard } from '../components/styled-components/styledComps';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


const SearchResult = () => {
    const params = useParams()
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        getSearchResults(params.query)
    }, [params])

    const getSearchResults = async (query) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json()
        setSearchResult(data.results)
        console.log(data.results)
        console.log(searchResult)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.59 }}
            exit={{ opacity: 0 }}>
            {searchResult.length > 0 ?
            
                <Grid>
                    {searchResult.map((item) => (
                        <GridCard key={item.id}>
                            <Link to={`/recipe-details/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                            <h4>{item.title}</h4>
                        </GridCard>
                    ))}
                </Grid>
                :
                <Error msg={'No Data Found'} />
            }
        </motion.div>
    )
}

export default SearchResult