import {Routes, Route} from 'react-router-dom'

import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Home from "./pages/Home";
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className="row">
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/add' element={<AddProduct />} />
            <Route path='products/:productID' element={<ProductDetails />} />
            <Route path='products/edit/:productID' element={<EditProduct />} />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
