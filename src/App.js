import React,{Component} from 'react';
import { Route,Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from './components/Cart/Cart';
import Details from "./components/Details"
import Default from "./components/Default";
import Modal from './components/Modal';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ProductList/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<Default />} />
          </Routes>
        <Modal/>
        
     </React.Fragment>
    )
  }
}
