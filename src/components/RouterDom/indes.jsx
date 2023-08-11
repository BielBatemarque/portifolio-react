import { Button } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";
import { AcerterdIMG, FlexContainer } from "./styles";
import routerDOm from '../../assets/routerdom.png';
import { Section } from "../Sobre/styles";

export const RouterDom = () => {
    return(
        <Container>
            <Title>React-Router-Dom</Title>
            <Container>
                <Section>
                    <div>
                        <AcerterdIMG src={routerDOm} />
                        <FlexContainer>
                            <Button color={'green'} text={'Repositório do Projeto'}/>
                            <Button color={'blue'} text={'Ver Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div style={{
                        marginLeft: 30,
                        width: 600,
                        textAlign: "center",
                    }}>
                        <p>O React Router DOM é uma biblioteca que permite criar aplicativos de navegação baseados em rotas em seus projetos React. Ele oferece uma maneira de criar uma experiência de navegação fluida em aplicativos de página única (SPA), onde o conteúdo da página é dinamicamente substituído à medida que os usuários navegam sem a necessidade de recarregar a página inteira.</p>
                    </div>
                </Section>
            </Container>
        </Container>
    );
}