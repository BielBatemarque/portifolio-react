import { Button } from "../Button";
import { Container } from "../Container";
import { AcerterdIMG, FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";
import hooks from '../../assets/hooks.png';

export const Hooks = () => {
    return(
        <div className="hooks" id="hooks">
            <Title>React Hooks</Title>
            <Container>
                <Section>
                    <div>
                    <AcerterdIMG src={hooks}/>
                        <FlexContainer >
                            <Button color={'red'} text={'Repositório do Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div style={{
                        marginLeft: 30,
                        width: 600,
                        textAlign: "center",
                    }}>
                        <p>React Hooks são uma adição à biblioteca React que permitem que você utilize o estado e outros recursos do React em componentes funcionais, em vez de componentes de classe. Eles permitem que você "enganche" funcionalidades de gerenciamento de estado, ciclo de vida e outros comportamentos do React em componentes sem a necessidade de criar classes.</p>
                    </div>
                </Section>
            </Container>
        </div>
    );
}