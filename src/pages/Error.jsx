import PropTypes from 'prop-types'
import { ErrorCard } from '../components/styled-components/styledComps'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Error = ({ msg }) => {
    const navigate = useNavigate()

    const handleErrorClose = () => {
        navigate('/')
    }

    return (
        <>
            <ErrorCard>
                <FaTimes className='error-close' onClick={() => handleErrorClose()} />
                <p>{msg}</p>
            </ErrorCard>
        </>
    )
}

Error.propTypes = {
    msg: PropTypes.string,
}

export default Error