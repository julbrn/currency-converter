import CurrencyRow from './CurrencyRow'
import './App.css';
import picture from './images/calculator.png';
import React, {useEffect, useState} from 'react';

const myHeaders = new Headers();
myHeaders.append("apikey", "DQK8YuidGiqI6xeE3IhhED9LS5UqJWCZ");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'

function App() {
    const [currency1, setCurrency1] = useState('RUB');
    const [currency2, setCurrency2] = useState('KZT');
    const [exchangeRate, setExchangeRate] = useState([]);
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);

    useEffect(() => {
        if(!!exchangeRate) {
            handleChangeAmount1(amount1)
        }
        if (exchangeRate.length == 0) {
            setAmount2('...')
        }}, [exchangeRate])

    useEffect(() => {
        fetch(`${BASE_URL}`, requestOptions)
            .then(res => res.json())
            .then(res => {
                setExchangeRate(res.rates);
            })
            .catch(error => console.log('error', error));
    }, [])

    function handleChangeAmount1(amount1) {
        setAmount2(Number.parseFloat(amount1 * exchangeRate[currency2] / exchangeRate[currency1]).toFixed(3));
        setAmount1(amount1)
    }

    function handleChangeCurrency1(currency1) {
        setAmount2(Number.parseFloat(amount1 * exchangeRate[currency2] / exchangeRate[currency1]).toFixed(3));
        setCurrency1(currency1)
    }

    function handleChangeAmount2(amount2) {
        setAmount1(Number.parseFloat(amount2 * exchangeRate[currency1] / exchangeRate[currency2]).toFixed(3));
        setAmount2(amount2)
    }

    function handleChangeCurrency2(currency2) {
        setAmount1(Number.parseFloat(amount2 * exchangeRate[currency1] / exchangeRate[currency2]).toFixed(3));
        setCurrency2(currency2)
    }
  return (
      <div className="page">
          <a className="credits" href="https://www.freepik.com/free-photo/calculator-money-wallet-investment-saving-finance-concept-pink-background-3d-rendering_25515805.htm#query=3d%20currency&position=34&from_view=search&track=sph">Image by mamewmy on Freepik</a>
          <img className="picture" src={picture} alt="Money and calculator"/>
          <div className="container">
            <h1 className="header">Currency Converter</h1>
            <CurrencyRow
                currencies={Object.keys(exchangeRate)}
                currency={currency1}
                onChangeAmount={handleChangeAmount1}
                onChangeCurrency={handleChangeCurrency1}
                amount={amount1}
            />
              <div className="equation">=</div>
            <CurrencyRow
                currencies={Object.keys(exchangeRate)}
                currency={currency2}
                onChangeAmount={handleChangeAmount2}
                onChangeCurrency={handleChangeCurrency2}
                amount={amount2}
                amount={amount2}
            />
          </div>
      </div>
  );
}

export default App;
