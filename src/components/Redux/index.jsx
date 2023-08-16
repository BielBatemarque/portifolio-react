import { Button } from "../Button";
import { Container } from "../Container";
import { AcerterdIMG, FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";
import redux from '../../assets/redux.png';

export const Redux = () => {
    return(
        <div className="redux" id="redux">
             <Title>Redux</Title>
            <Container>
                <Section>
                    <div>
                    <AcerterdIMG src={redux}/>
                        <FlexContainer >
                            <Button color={'orange'} text={'Repositório do Projeto'}/>
                            <Button color={'purple'} text={'Ver Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div style={{
                        marginLeft: 30,
                        width: 600,
                        textAlign: "center",
                    }}>
                        <p>O Redux é uma biblioteca de gerenciamento de estado amplamente utilizada no desenvolvimento de aplicativos front-end, especialmente em contextos de interfaces de usuário complexas e interativas, como aplicações web e móveis. Ele se destaca por sua abordagem de fluxo unidirecional de dados e seu foco na previsibilidade do estado da aplicação..</p>
                    </div>
                </Section>
            </Container>
        </div>
    );
}