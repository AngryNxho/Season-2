import "../src/App.css"



import Encabezamiento from './componentes/Encabezamiento';
import Pie from './componentes/Pie';
import Principal from './componentes/Principal';

function App() {
  return (
    <div className="App">
        <Encabezamiento />
        <Pie />
        <Principal />
    </div>
  );
}

export default App;
