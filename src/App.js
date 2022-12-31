import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/signin';
import Signup from './Pages/Signup/signup';
import Header from './Components/header/header';
import TakeNote1 from './Components/TakeNote1/takenote1';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
      <Header />
      <TakeNote1 />
    </div>
  );
}

export default App;
