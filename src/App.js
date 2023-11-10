
import './App.css';
import { CartProvider } from './Project/Cart/CartContext';
import RouteComp from './Project/RouteComp';
// import SearchComponent from './searc';


function App() {
  return (
    <div >
      <CartProvider>
      <RouteComp/>
      {/* <SearchComponent/> */}
      </CartProvider>
    </div>
  );
}

export default App;
