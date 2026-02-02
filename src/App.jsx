import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Men from "./Component/Collection/Men";
import Women from "./Component/Collection/Women";
import Jewellery from "./Component/Collection/Jewellery";
import Electronics from "./Component/Collection/Electronics";
import Chief from "./Component/Pages/Chief";
import Product from "./Component/Pages/Product";
import Cart from "./Component/Pages/Cart";
import Navbar from "./Component/Pages/Navbar";
import Address from "./Component/CRUD/Address";
import CreateData from "./Component/CRUD/CreateData";
import UpdateAddress from "./Component/CRUD/UpdateAddress";
import Profile from "./Component/Collection/Profile";

export const myContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <myContext.Provider value={{ cartProducts, setCartProducts }} >
      <BrowserRouter >
       <Navbar/>
        <Routes>
          <Route path="/" element={<Chief />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addresses" element={<Address/>}/>
          <Route path="/add_address" element={<CreateData/>}/>
          <Route path="/update_address" element={<UpdateAddress/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </myContext.Provider>
  );
}

export default App;
