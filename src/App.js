import { Menu } from './components/Menu/index';
import { Sobre } from './components/Sobre';
import { Title } from './components/Title/index';

function App() {
  return (
    <div className="App">
      <Menu />
      <Title>React Skills</Title>
      <Sobre /> 
    </div>
  );
}

export default App;