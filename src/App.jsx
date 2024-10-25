import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Basket from './BasketPage';
import './App.css';

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (bagel) => {
    setBasket([...basket, bagel]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Menu addToBasket={addToBasket} basket={basket} />} />
            <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket}  />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;