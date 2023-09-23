
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [price,setPrice]=useState('');
  const [discount,setDiscount]=useState('');
  const [origPrice,setOrgianalPrice]=useState('')
  const [dicountAmount,setDiscountAmount]=useState('');
  const [dprice,setDprice]=useState('');
  console.log(price);
  console.log(discount);
  const calculate=(e)=>{
    let disamt=Math.abs(price*discount/100).toFixed(2);
    console.log(disamt);
    let disprice=(price-disamt).toFixed(2);
    console.log(disprice);
    setDiscountAmount(`Discount Amonut: ${disamt}` );
    setDprice(`Price After Discount :  ${disprice}`);
    setOrgianalPrice(`Orginal Price :  ${price}`)
  }
  const reset=(e)=>{
    setDiscountAmount('');
    setDprice('')
    setOrgianalPrice('')
    setPrice('')
    setDiscount('')
  }
  
  return (
    <div className="App">
      <div className="container">
      <h1>Discount Calculator</h1>
      <h3>{origPrice}</h3>
      <h3>{dicountAmount}</h3>
      <h3>{dprice}</h3>

      <div className="input">
      <TextField value={price} onChange={e=>setPrice(e.target.value)} className='input_box' label="Total Pricde" color="secondary" focused />
      <TextField value={discount} onChange={e=>setDiscount(e.target.value)} className='input_box' label="Discount in %" color="secondary" focused />
      </div>
      <div className="button-group">
      <Button onClick={calculate} variant="contained">Calculate</Button>
      <Button onClick={reset} variant="contained">Reset</Button>
      </div>
      </div>
    </div>
  );
}

export default App;
