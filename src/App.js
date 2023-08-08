import { Menu } from './components/Menu/index';
import { RouterDom } from './components/RouterDom/indes';
import { Sobre } from './components/Sobre';
import { Title } from './components/Title/index';

function App() {
  return (
    <div className="App">
      <Menu />
      <Title>React Skills</Title>
      <Sobre /> 
      <RouterDom />
    </div>
  );
}

export default App;