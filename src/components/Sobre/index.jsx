import { RotatingImage, Section } from "./styles";
import { Container } from '../Container/index';
import img from '../../assets/logo512.png';
import svg from '../../assets/scroll.svg';

export const Sobre = () => {
    return(
        <Container>
            <Section>
                <div style={{ width: 400, textAlign: 'center'}}>
                    <h3>Sobre o Projeto</h3>
                    <p style={{marginTop: 50, textAlign: 'center', fontSize: 36}}>Este Projeto contém a proposta de Armazenar e apresentar Pequenos Projetos com ferramentas e funcionalidades que compoem o Universo React. </p>
                    <img src={svg} alt="" />
                </div>
                <div><RotatingImage src={img} alt="React-logo" /></div>
            </Section>
        </Container>
    );
}