import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OrderDrinks from "./pages/OrderDrinks";
import Queue from "./pages/ViewQueue";
//import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="order" element={<OrderDrinks />} />
          <Route path="queue" element={<Queue />} />
          <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

