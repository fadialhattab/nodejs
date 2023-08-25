import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/navbar';

import Footer from './components/Footer';

import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return <Router>
    <Navbar/>
<Route exact path="/">
<Home/>
</Route>
<Route path="/about">
<About/>
</Route>

<Footer/>
  </Router>
   
}

export default App;
