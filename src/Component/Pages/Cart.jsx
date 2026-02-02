import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../../App";
import  AxiosInstance1 from "../Api/AxiosInstance1";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    let { cartProducts, setCartProducts } = useContext(myContext);

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    let fetchAddress = async () => {
        try {
            let { data } = await AxiosInstance1('/addresses');
            setAddresses(data);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAddress()
    }, [])






    // normalize cart (fix old items without quantity)
    // const normalizedCart = cartProducts.map((item) => ({
    //   ...item,
    //   quantity: item.quantity ?? 1,
    //   price: Number(item.price),
    // }));

    // delete product
    const handleDelete = (id) => {
        setCartProducts(cartProducts.filter((item) => item.id !== id));
    };

    //increase quantity
    const increaseQty = (id) => {
        setCartProducts(cartProducts.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };
    //decrease quantity
    const decreaseQty = (id) => {
        setCartProducts(cartProducts.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    // total products
    const totalProducts = cartProducts.reduce((sum, item) => sum + item.quantity, 0);


    //total price
    const totalPrice = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div className="flex justify-around bg-blue-500 p-3 text-xl text-white font-bold">
                <Link to="/">LOGO</Link>
                <p>CART</p>
            </div>
            {
                cartProducts.length == 0 ? (
                    <div className="text-center mt-10">
                        <p className="text-xl">Cart is Empty</p>
                        <Link to="/" className="text-blue-600 underline">
                            Browse Products
                        </Link>
                    </div>
                ) : <div>
                    <div className="w-[99vw] m-auto">
                        {cartProducts.length === 0 ? (
                            <p className="text-center text-xl mt-10">Your cart is empty</p>
                        ) : (
                            cartProducts.map(({ id, image, price, title, quantity }) => (
                                <div
                                    key={id}
                                    className="flex justify-around p-3 items-center text-xl m-2 border">
                                    <img src={image} alt="product" className="w-24 h-24" />

                                    <p className="w-[20%]">{title.slice(0, 25)}</p>
                                    <div className="flex justify-around items-center w-[12%]">
                                        <button
                                            onClick={() => decreaseQty(id)} className="px-3 bg-gray-300"> -</button>
                                        <span className="font-bold">{quantity}</span>

                                        <button
                                            onClick={() => increaseQty(id)} className="px-3 bg-gray-300" > +
                                        </button>
                                    </div>
                                    <p className="font-bold w-[10%]"> ${(price * quantity).toFixed(2)} </p>

                                    <button onClick={() => handleDelete(id)} ><MdDelete /></button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="w-[30%] m-auto mt-5 border p-4 text-xl">
                        <p className="font-bold">
                            Total Products : <span>{totalProducts}</span>
                        </p>
                        <p className="font-bold mt-2">
                            Total Price : <span>${totalPrice.toFixed(2)}</span>
                        </p>
                    </div>
                    <div className="text-center mt-5">
                        <NavLink to='/addresses'><button className="bg-yellow-300 p-3 rounded-xl font-bold  hover:bg-black text-white transition:all 2s" > PROCEED</button></NavLink>
                    </div>
                </div>
            }
        </>
    );
};

export default Cart;





                    // <div className="w-[80%] m-auto mt-6 border p-4 rounded-xl ">
                    //     <h2 className="text-xl font-bold mb-3">Select Delivery Address</h2>

                    //     {addresses.map(({ id, name, email, mobile, area, pincode, landmark }) => (
                    //         <div key={id} className="flex gap-4 border p-3 mb-3 ">
                    //             <input type="radio" name="address" onChange={() => setSelectedAddress({ name, email, mobile, area, pincode, landmark })} />
                    //             <div className="flex justify-around">
                    //                 <div className="w-100">
                    //                     <p className="font-bold">{name}</p>
                    //                     <p>{email}</p>
                    //                     <p>{mobile}</p>
                    //                     <p>{area}, {landmark}</p>
                    //                     <p>{pincode}</p>
                    //                 </div>

                    //                 <div className="text-center flex  ml-100  items-center">
                    //                     <button onClick={()=>{handleDeleteAddress(id)}} className="border h-10 w-40 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600" >Delete</button>
                    //                     <button onClick={()=>{handleEditAddress({id,name,email,mobile,area,landmark,pincode})}} className="border h-10 w-40 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600">Edit</button>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     ))}
                    // </div>