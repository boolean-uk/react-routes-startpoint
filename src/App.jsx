import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/index.jsx";
import Home from "./pages/Home/index.jsx";
import AppsPage from './pages/Apps/index.jsx'
import { Link } from "react-router-dom";

function App() {
  const [products] = useState(productsData)
  const [apps] = useState(appsData)

  console.log({ products, apps})

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link></li>
            <li>
              <Link to="/products">Products</Link></li>
            <li>
              <Link to="/apps">Apps</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/products" element={<ProductsPage products={products}/>}/>
        <Route path ="/apps" element={<AppsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
