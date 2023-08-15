import { Header, HeaderReduzido, StyledLink } from "./styles";

export const Menu = () => {
    return(
        <Header>
            <HeaderReduzido>
                <StyledLink href="#sobre">Sobre</StyledLink>
                <StyledLink href="#reactrouterdom">React-router-dom</StyledLink>
                <StyledLink href="#hooks">React Hooks</StyledLink>
                <StyledLink href="#redux">Redux</StyledLink>
                <StyledLink href="#nextjs">Next.Js</StyledLink>
            </HeaderReduzido>
        </Header>
    );
}