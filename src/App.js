import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/signin';
import Signup from './Pages/Signup/signup';
import Header from './Components/header/header';

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
    </div>
  );
}

export default App;
