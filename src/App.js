import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
      <p>Learning React</p>
      <Counter></Counter>
      <Users></Users>
        {
        products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
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
