import React, { useState } from 'react'
import { FaSearch, FaTimesCircle } from 'react-icons/fa'
import { FormStyle } from './styled-components/styledComps'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(document.forms.formSearch.input.value)
        navigate(`/search/${search}`)
    }
    const handleSearchClose = () => {
        setSearch('');
        navigate(`/`)
    }

    return (
        <FormStyle name='formSearch' action="" onSubmit={(e) => handleSubmit(e)}>
            <div className='input'>
                <input type="text" name='input' value={search} onChange={(e) => handleSearch(e)} />
                {!search && <FaSearch className='search-icon' />}
                {search && <FaTimesCircle className='close' onClick={() => handleSearchClose()} />}
            </div>
        </FormStyle>
    )
}

export default Search