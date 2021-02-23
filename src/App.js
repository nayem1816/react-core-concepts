import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name : 'Md Nayem Hossain',
    job : 'Developer'
  }
  const h2color = {
    backgroundColor : 'red',
    color: 'white'
  }
  const friends =[
    {name: 'Nayem', age: "21"},
    {name: 'Rony', age: "22"},
    {name: 'Ayesha', age: "22"},
    {name: 'Sayma', age: "20"},
    {name: 'Jeba', age: "20"}
  ]

  const allProduct = [
    {name: 'Apple 12 pro Max', price: '$1299.99'},
    {name: 'Galaxy S21', price: '$1099.99'},
    {name: 'Mate 40 pro', price: '$999.99'},
    {name: 'Oneplus 8T', price: '$799.99'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={h2color}>Name: {person.name}</h1>
        <h5>Profession: {person.job}</h5> 
        <Count></Count>
        <Users></Users>
        <ul>
          {
            friends.map(friendName => <li>{friendName.name}</li>)
          }
        </ul>
        {
          allProduct.map(product => <Product product={product}></Product>)
        }
        {
          friends.map(friend => <Person name={friend.name} age={friend.age}></Person>)
        }
      </header>
    </div>
  );
}


function Count() {
  const [count,setCount] =useState(10);
  const increaseBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const decreaseBtn = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={decreaseBtn}>Decrease</button>
      <button onClick={increaseBtn}>Increase</button>
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h2>Dynamic User : {users.length}</h2>
      <ul>
        {
          users.map(userName =><li>{userName.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props) {
  const productStyle={
    border: '1px solid red',
    width: '300px',
    borderRadius: '5px',
    margin: '5px',
    padding: '10px'
  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  const personStyle ={
    border: '2px solid red', 
    margin: '5px', 
    padding:'10px',
    width: '400px',
  }
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default App;
