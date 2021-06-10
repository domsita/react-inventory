import './App.css';
import dummyData from './data';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import { useState } from 'react';
import { uid } from 'react-uid';

function App() {
  const addProduct = (name, img, price, description, onSale, quantity) => {
    const newItem = {
      id: uid(name),
      name,
      img,
      price,
      description,
      onSale,
      quantity
    }
    setProducts([...products, newItem]);
  }

  const removeProduct = (id) => {
    const newProductList = products.filter((product) => {
      return (product.id !== id)
    });
    setProducts(newProductList);
  }

  const [products, setProducts] = useState(dummyData);

  return (
    <>
      <Header />
      <Products products={products} removeProduct={removeProduct}/>
      <AddProduct addProduct={addProduct}/>
    </>
  );
}

export default App;
