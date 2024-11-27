import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
