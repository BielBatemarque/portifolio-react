import { Button } from "../Button";
import { Container } from "../Container";
import { AcerterdIMG, FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";
import components from '../../assets/styledComponents.png';

export const StyledComponents = () => {
    return(
        <div className="styledComponents">
             <Title>Styled-Components</Title>
            <Container>
                <Section>
                    <div>
                    <AcerterdIMG src={components}/>
                        <FlexContainer>
                            <Button color={'orange'} text={'Repositório do Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div style={{
                        marginLeft: 30,
                        width: 600,
                        textAlign: "center",
                    }}>
                        <p>Styled Components é uma biblioteca popular para o desenvolvimento de interfaces de usuário em JavaScript, especialmente em aplicações React. Ela permite que os desenvolvedores criem estilos para seus componentes de maneira mais eficiente e modular, utilizando uma abordagem baseada em componentes para estilização.</p>
                    </div>
                </Section>
            </Container>
        </div>
    );
}