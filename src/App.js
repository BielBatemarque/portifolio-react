import { Menu } from './components/Menu/index';
import { Hooks } from './components/ReactHooks';
import { Redux } from './components/Redux';
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
      <Hooks />
      <Redux />
    </div>
  );
}

export default App;