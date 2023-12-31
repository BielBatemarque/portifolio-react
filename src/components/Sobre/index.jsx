import { RotatingImage, Section } from "./styles";
import { Container } from '../Container/index';
import img from '../../assets/logo512.png';
import { ScrollDown } from "./ScrollDown";

export const Sobre = () => {
    return(
        <div className="sobre" id="sobre">
        <Container>
            <Section>
                <div style={{ 
                    width: 400,
                    textAlign: 'center',
                    }}>
                    <h3>Sobre o Projeto</h3>
                    <p style={{
                        marginTop: 50,
                        textAlign: 'center', 
                        fontSize: 36
                        }}>Este Projeto contém a proposta de Armazenar e apresentar Pequenos Projetos com ferramentas e funcionalidades que compoem o Universo React. </p>
                    <ScrollDown />
                </div>
                <div><RotatingImage src={img} alt="React-logo" /></div>
            </Section>
        </Container>              
        </div>
    );
}