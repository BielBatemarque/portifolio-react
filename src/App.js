import { Footer } from './components/Footer';
import { Menu } from './components/Menu/index';
import { NextJs } from './components/NextJs';
import { Hooks } from './components/ReactHooks';
import { Redux } from './components/Redux';
import { RouterDom } from './components/RouterDom/indes';
import { Sobre } from './components/Sobre';
import { StyledComponents } from './components/Styled-Components';
import { Title } from './components/Title/index';

function App() {
  return (
    <div className="App">
      <Menu />
      <Title>React Skills</Title>
      <Sobre /> 
      <RouterDom />
      <Hooks />
      <Redux />
      <NextJs />
      <StyledComponents />
      <Footer />
    </div>
  );
}

export default App;