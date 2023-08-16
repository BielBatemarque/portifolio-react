import { Button } from "../Button";
import { Container } from "../Container";
import { AcerterdIMG, FlexContainer } from "../RouterDom/styles";
import { Section } from "../Sobre/styles";
import { Title } from "../Title";
import next from '../../assets/next.js.png';

export const NextJs = ()  => {
    return(
        <div className="nextjs" id="nextjs">
            <Title>Next.Js</Title>
            <Container>
                <Section>
                    <div>
                    <AcerterdIMG src={next}/>
                        <FlexContainer>
                            <Button color={'purple'} text={'Repositório do Projeto'} link={'https://github.com/BielBatemarque/curd-next'}/>
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