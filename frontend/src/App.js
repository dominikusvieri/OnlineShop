import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Header ></Header>
      <main>
        <Container>
          <Route exact path='/' component={HomePage}></Route>   
          <Route path='/product/:id' component={ProductPage}></Route>    
        </Container>
      </main>
      <Footer ></Footer>
    </Router>
  );
}

export default App;
