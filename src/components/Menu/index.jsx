import { Header, HeaderReduzido, StyledLink } from "./styles";

export const Menu = () => {
    return(
        <Header>
            <HeaderReduzido>
                <StyledLink>Sobre</StyledLink>
                <StyledLink>React-router-dom</StyledLink>
                <StyledLink>React Hooks</StyledLink>
                <StyledLink>Redux</StyledLink>
                <StyledLink>Next.Js</StyledLink>
            </HeaderReduzido>
        </Header>
    );
}