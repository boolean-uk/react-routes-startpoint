import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";

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
            <li>Home</li>
            <li>Products</li>
            <li>Apps</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
