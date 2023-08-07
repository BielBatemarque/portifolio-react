import { StyledLink } from "./styles";
import { Link } from 'react-router-dom';

export const MenuItem = ({ text, link }) => {
    return(
        <StyledLink>
            <Link to={link}>{text}</Link>
        </StyledLink>
    );
}