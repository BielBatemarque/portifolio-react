import { Button } from "../Button";
import { Container } from "../Container";
import { AcerterdIMG, FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";

export const NextJs = ()  => {
    return(
        <div className="nextjs">
            <Title>Next.Js</Title>
            <Container>
                <Section>
                    <div>
                    <AcerterdIMG/>
                        <FlexContainer>
                            <Button color={'orange'} text={'Repositório do Projeto'}/>
                            <Button color={'purple'} text={'Ver Projeto'}/>
                        </FlexContainer>
                    </div>
                    <div style={{
                        marginLeft: 30,
                        width: 600,
                        textAlign: "center",
                    }}>
                        <p>O Next.js é um framework popular para o desenvolvimento de aplicações web modernas e escaláveis utilizando a linguagem JavaScript e a biblioteca React. Ele se destaca por simplificar a criação de aplicativos web que oferecem excelente desempenho, SEO otimizado e uma experiência de desenvolvimento mais fluida.</p>
                    </div>
                </Section>
            </Container>
        </div>
    );
}