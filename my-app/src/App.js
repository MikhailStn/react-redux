import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <div className="btns">
        <button
          onClick={() => addCash(Number(prompt()))}
          className="btn"
        >
          Add Cash
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          className="btn"
        >
          Get Cash
        </button>
      </div>
    </div>
  );
}

export default App;
