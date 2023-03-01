import React,{Component} from 'react';
import { Route,Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details"
import Default from "./components/Default";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ProductList/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route  element={<Default/>} />
        </Routes>
  
        
     </React.Fragment>
    )
  }
}
