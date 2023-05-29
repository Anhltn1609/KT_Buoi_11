import { Router } from 'react-router';
import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <>
    {/* <Home></Home> */}
      <Router path="/" exact element={<Home></Home>}></Router>
      {/* <Router component={<div>Loi</div>}></Router> */}
      {/* <Router path="/create" component={Create}></Router> */}
    </>
  );
}

export default App;
