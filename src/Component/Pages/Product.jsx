import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { myContext } from "../../App";
import { FaShoppingCart } from "react-icons/fa";
import {AxiosInstance} from "../Api/AxiosInstance1";


const Product = () => {
  let{cartProducts, setCartProducts} = useContext(myContext);
  let[state, setState] = useState({id:'', title:'', price:"", description:'', category:'', image:'65kjh', rating: { rate: 0, count: 0 }});
  const { id } = useParams();
  const fetchApi = async () => {
    try {
      const { data } = await AxiosInstance.get(`products/${id}`);
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  let bool = cartProducts.some((obj)=>obj.id === state.id);

  const addToCart = () => {
  setCartProducts((prev) => [...prev,{...state,quantity: 1}]);
};

  return (
    <>
    <div className="flex justify-around p-4 bg-blue-500 text-white text-xl font-bold">
      <Link to='/'><img src="s" alt="logo" /></Link>
      <Link to='/cart' className="flex"><FaShoppingCart className="text-2xl"/><p>CART <sup>{cartProducts.length}</sup></p></Link>
    </div>
    <div className="flex justify-around  m-3 w-[98vw] items-center">
      <img src={state.image} className="w-[28%]" />
      <div className="w-[40%] flex flex-col gap-8">
        <p className="font-bold italic text-2xl">{state.title.slice(0, 20)}</p>
        <p className="text-sm/7">{state.description}</p>
        <p className="font-bold">$ {state.price}</p>
        <p>Rating - {state.rating.rate}</p>
         {(bool === false) ?
        <button
          onClick={addToCart}
          className="bg-blue-500 p-3 text-white rounded-xl text-xl"
        >
          Add to Cart
        </button>
        :
        <button className="bg-gray-400 p-3 text-white rounded-xl text-xl">Added</button>
         }
      </div>
    </div>
    </>
  );
};

export default Product;