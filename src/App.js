import './App.css';
import dummyData from './data';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import { useState } from 'react';
import { uid } from 'react-uid';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

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

  const editProduct = (id, name, img, price, description, onSale, quantity) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].name = name;
        products[i].img = img;
        products[i].price = price;
        products[i].description = description;
        products[i].onSale = onSale;
        products[i].quantity = quantity;
      }
    }

    setProducts(products);
  }

  const removeProduct = (id) => {
    const newProductList = products.filter((product) => {
      return (product.id !== id)
    });
    setProducts(newProductList);
  }

  const [products, setProducts] = useState(dummyData);

  const getProductById = (id) => {
    return products.filter((product) => {
      return (product.id == id)
    });
  }

  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    let productToEdit = getProductById(id);

    return (
      <div>
        <AddProduct product={productToEdit} addProduct={addProduct} editProduct={editProduct} />
      </div>
    );
  }
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>    
          <Route exact path='/products'>
            <Products products={products} removeProduct={removeProduct}/>
          </Route>
          <Route exact path='/add-product'>
            <AddProduct product={[]} addProduct={addProduct} editProduct={editProduct} />
          </Route>
          <Route exact path='/edit-product/:id' children={<Child />}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
