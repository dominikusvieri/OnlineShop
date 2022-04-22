import { Container } from 'react-bootstrap';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Header ></Header>
      <main>
        <Container>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
         </Routes>
        </Container>
      </main>
      <Footer ></Footer>
    </BrowserRouter>
  );
}

export default App;
