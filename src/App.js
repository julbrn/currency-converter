import CurrencyRow from './CurrencyRow'
import './App.css';
import picture from './images/calculator.png';
import React, {useEffect, useState} from 'react';

const myHeaders = new Headers();
myHeaders.append("apikey", "YVdcqWCZZb425vAyYsbxlrU8c7N1FKVz");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'

function App() {
    const [currency, setCurrency] = useState([]);
    console.log(currency);
    useEffect(() => {
        fetch(`${BASE_URL}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setCurrency([data.base, ...Object.keys(data.rates)])
            })
            .catch(error => console.log('error', error));
    }, [])
  return (
      <div className="page">
          <a className="credits" href="https://www.freepik.com/free-photo/calculator-money-wallet-investment-saving-finance-concept-pink-background-3d-rendering_25515805.htm#query=3d%20currency&position=34&from_view=search&track=sph">Image by mamewmy on Freepik</a>
          <img className="picture" src={picture} alt="Money and calculator"/>
          <div className="container">
            <h1 className="header">Currency Converter</h1>
            <CurrencyRow
                currency={currency}
            />
              <div className="equation">=</div>
            <CurrencyRow
                currency={currency}/>
          </div>
      </div>
  );
}

export default App;
