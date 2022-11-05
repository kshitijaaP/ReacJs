
import './App.css';
import Hello from './components/Hello'
import Profile  from './components/Profile';

function App() {
  return (
    <div className="App">
     <Hello division="A"></Hello>
    <Profile name="kSHITIJA" surname="pagare">
      <h3>Welcome to our page</h3>
    </Profile>
     
    </div>
  );
}

export default App;
