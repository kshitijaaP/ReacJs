import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DestructuringClassCompo from './components/DestructuringClassCompo';
import DestructuringFuncCompo from './components/DestructuringFuncCompo';
import EveHandFunc from './components/EveHandFunc';
import EveHandClass from './components/EveHandClass';
import EventBinding from './components/EventBindingClass';
import StateFunctional from './components/State-Functional';
import ConditionalRendering from './components/ConditionalRendering';
import RenderingObject from './components/RenderingObject';
import RenderingArray from './components/RenderingArray';
import FormIn from './components/form';
import Login from './components/formValidation';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <DestructuringFuncCompo name="Kshitija" lastName="Pagare"></DestructuringFuncCompo>
      <DestructuringClassCompo name="Abhidnya" lastName="Godkar"></DestructuringClassCompo> */}
      {/* <EveHandFunc/> */}
      {/* <EveHandClass/> */}
      {/* <EventBinding/> */}
      {/* <StateFunctional></StateFunctional> */}
      {/* <ConditionalRendering/> */}
      {/* <RenderingObject/> */}
      {/* <RenderingArray/> */}
    {/* <FormIn/> */}
    <Login/>
    </div>
  );
}

export default App;
