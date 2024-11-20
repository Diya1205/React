import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddProduct from './Pages/addProduct/AddProduct'
import UpdateProduct from './Pages/updateproduct/UpdateProduct'
import MyState from './context/data/MyState'
function App() {
  return (
    <div className="App">
      <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </MyState>
    </div>
  );
}

export default App;
