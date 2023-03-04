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
      <h1>Coin Tracker ({loading ? "" : `${coin.length}`})</h1>
      {/* <h1>Coin Tracker ({loading ? "" : coin.length})</h1> 이거도 가능 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coin.map((c) => {
            return (
              <option key={c.id}>
                {c.name} ({c.symbol}): ${c.quotes.USD.price} USD
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default App;
