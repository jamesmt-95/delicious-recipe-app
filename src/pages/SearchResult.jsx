import PropTypes from 'prop-types'
import { Grid, GridCard } from '../components/styled-components/styledComps';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchResult = () => {
    const params = useParams()
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        getSearchResults(params.query)
    }, [])

    const getSearchResults = async (query) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_API_KEY
            }`
        );
        const data = await res.json()
        setSearchResult(data.results)
        // console.log(data.results)
    }

    return (

        <Grid>
            {searchResult.map((item) => (
                <GridCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </GridCard>
            ))}
        </Grid>

    )
}

export default SearchResult