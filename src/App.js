import { useState } from 'react';

import Header from './components/Header';
import Cart from './components/Cart';

import './App.css';
import Hero from './components/Hero';
import FilterForm from './components/FilterForm';
import Companies from './components/Companies';
import JobBoard from './components/JobBoard';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsInCart, setProductsInCart] = useState([
    'First product',
    'Second product',
    'Third product',
  ]);

  const toggleCart = () => (event) => {
    setCartOpen((prev) => !prev);
  };

  return (
    <div className='container px-10'>
      <Header toggleCart={toggleCart} />
      <Hero />
      <div className='absolute -z-10 left-0 top-0 right-0 bottom-auto min-h-[494px] bg-[#f2f5ff]'></div>
      <FilterForm />
      <Companies />
      <JobBoard />
      {cartOpen && <Cart products={productsInCart} />}
    </div>
  );
}

export default App;
