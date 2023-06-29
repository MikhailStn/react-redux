import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction } from './store/customerReducer';
import { removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>Баланс: {cash}</div>
      <div className="btns">
        <button onClick={() => addCash(Number(prompt()))} className="btn">
          Add Cash
        </button>
        <button onClick={() => getCash(Number(prompt()))} className="btn">
          Get Cash
        </button>
        <button onClick={() => addCustomer(prompt())} className="btn">
          Add Customer
        </button>
        <button onClick={() => getCash(Number(prompt()))} className="btn">
          Delete Customer
        </button>
      </div>
      {customers.length ? (
        <div className="customers">
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсутствуют</div>
      )}
    </div>
  );
}

export default App;
