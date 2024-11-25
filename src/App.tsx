import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import "../src/styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
