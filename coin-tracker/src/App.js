import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin Tracker</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coin.map((c) => {
          return (
            <li key={c.id}>
              {c.name} ({c.symbol}): ${c.quotes.USD.price} USD
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
