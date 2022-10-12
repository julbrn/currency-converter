import CurrencyRow from './CurrencyRow'
import './App.css';
import picture from './images/calculator.png'

function App() {
  return (
      <div className="page">
          <a class="credits" href="https://www.freepik.com/free-photo/calculator-money-wallet-investment-saving-finance-concept-pink-background-3d-rendering_25515805.htm#query=3d%20currency&position=34&from_view=search&track=sph">Image by mamewmy on Freepik</a>
          <img className="picture" src={picture} alt="Money and calculator"/>
          <div className="container">
            <h1 className="header">Currency Converter</h1>
            <CurrencyRow/>
              <div class="equation">=</div>
            <CurrencyRow/>
          </div>
      </div>
  );
}

export default App;
