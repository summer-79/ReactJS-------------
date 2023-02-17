import Button from "./Button";
import styles from "./App.module.css";
function App() {
  return (
    <div className="App">
      <h1>Welcome back!!!</h1>
      <Button className={styles.title} text={"Continue"} />
    </div>
  );
}

export default App;
