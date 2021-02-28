import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';

function App() {
  const products = [
    {name: 'photoshop', 
    price: '$90.99'},
    {name: 'Ilustrator', 
    price: '$60.99'},
    {name: 'PDF Reader', 
    price: '$30.99'}
  ]

  // const productNames = products.map(product => product)
  return (
    <div className="App">
      <header className="App-header">
        {
        products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border: '1px solid gray', 
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'100%',
    width:'300px',
    float:'left',
    margin:'5px',
  }

  const textStyle={
    margin:'0px 100px',
  }

  const{name, price} = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
