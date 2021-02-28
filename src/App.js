import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'photoshop', 
    price: '$90.99'},
    {name: 'Ilustrator', 
    price: '$60.99'},
    {name: 'PDF Reader', 
    price: '$30.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
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
    width:'400px',
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
