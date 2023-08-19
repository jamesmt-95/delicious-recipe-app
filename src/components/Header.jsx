import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './styled-components/styledComps'

const Header = () => {
    return (
        <HeaderWrapper>
            <nav>
                <Link to={'/'}>
                <GiKnifeFork />
                <span>delicious</span>
                </Link>
            </nav>
        </HeaderWrapper>
    )
}

export default Header