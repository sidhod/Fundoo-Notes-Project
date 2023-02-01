import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/signin';
import Signup from './Pages/Signup/signup';
import Header from './Components/header/header';
import TakeNote1 from './Components/TakeNote1/takenote1';
import TakeNote2 from './Components/TakeNote2/takenote2';
import TakeNote3 from './Components/TakeNote3/takenote3';
import Dashboard from './Pages/Dashboard/dashboard';
import { Provider } from 'react-redux';
import store from './Components/Redux/store'
import RouterProject from './Components/Routers/Router';



function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Header />
      <TakeNote1 />
      <TakeNote2 />
      <TakeNote3 /> */}
      {/* <Test /> */}
      <Provider store={store}>
        {/* <Dashboard /> */}
        {/* <Signup /> */}
        <RouterProject />
      </Provider>

    </div>
  );
}

export default App;
