import { Button } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";
import { FlexContainer } from "./styles";

export const RouterDom = () => {
    return(
        <Container>
            <Title>React-Router-Dom</Title>
            <FlexContainer>
                <div>
                    <img src="" alt="img react routerDom" />
                   <FlexContainer>
                        <Button text={'opa'} color={'green'}/> 
                        <Button />
                   </FlexContainer>
                </div>
                <div>
                    <h3>Sobre o Router-DOM</h3>
                </div>
            </FlexContainer>
        </Container>
    );
}