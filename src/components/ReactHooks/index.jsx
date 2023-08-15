import { Button } from "../Button";
import { Container } from "../Container";
import { FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";

export const Hooks = () => {
    return(
        <div className="hooks">
            <Title>React Hooks</Title>
            <Container>
                <Section>
                    <div>
                    {/* <AcerterdIMG/> */}
                        <FlexContainer >
                            <Button color={'green'} text={'Repositório do Projeto'}/>
                            <Button color={'blue'} text={'Ver Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div></div>
                </Section>
            </Container>
        </div>
    );
}