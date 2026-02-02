import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance1 from '../Api/AxiosInstance1';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    email: "",
    mobile: "",
    area: "",
    landmark: "",
    pincode: ""
  });
  const fetchAddress = async () => {
    try {
      const response = await AxiosInstance1.get('/addresses');
      const data = response.data;

      console.log("API DATA:", data);

      // ALWAYS force array
      if (Array.isArray(data)) {
        setAddresses(data);
      } else if (Array.isArray(data?.addresses)) {
        setAddresses(data.addresses);
      } else {
        setAddresses([]);
      }

    } catch (error) {
      console.error("Fetch error:", error);
      setAddresses([]); // prevent undefined
    }
  };


  useEffect(() => {
    fetchAddress();
    
  }, []);



  const handleDeleteAddress = async (id) => {
    try {
      await AxiosInstance1.delete(`/addresses/${id}`);
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
    catch (err) {
      console.log(err)
    }
  };
  const handleEditAddress = (address) => {
    setNewAddress({
      name: address.name,
      email: address.email,
      mobile: address.mobile,
      area: address.area,
      landmark: address.landmark,
      pincode: address.pincode
    });
    setEditId(address.id);
    setShowForm(true);
  };

  return (
    <>
      <div className="flex justify-around bg-blue-500 p-3 text-xl text-white font-bold">
        <Link to="/">LOGO</Link>
        <p>CART</p>
      </div>

      <div className="w-[80%] m-auto mt-6 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-3">Select Delivery Address</h2>

        {addresses.map(({ id, name, email, mobile, area, pincode, landmark }) => {
          return (
            <div key={id} className="flex gap-4 border p-3 mb-3 items-start">

              <input
                type="radio"
                name="address"
                className="mt-2"
                checked={selectedAddress?.id === id}
                onChange={() =>
                  setSelectedAddress({ id, name, email, mobile, area, pincode, landmark })
                }
              />

              <div className="flex justify-between w-full">
                <div className="max-w-md">
                  <p className="font-bold">{name}</p>
                  <p>{email}</p>
                  <p>{mobile}</p>
                  <p>{area}, {landmark}</p>
                  <p>{pincode}</p>
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handleDeleteAddress(id)}
                    className="h-10 w-32 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() =>
                      navigate("/update_address", {
                        state: { address: { id, name, email, mobile, area, landmark, pincode } }
                      })
                    }
                    className="h-10 w-32 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )
        })}

      </div>

      <Link to="/add_address"><div className="bg-green-500 w-80 p-4 rounded-2xl text-white font-bold text-center text-xl m-auto mt-10 hover:bg-green-600"> + Add new Address</div>
      </Link>

<div
  onClick={() => {
    if (!selectedAddress) {
      alert("Please select an address!");
      return;
    }

    // You can send it to API or just log it
    console.log("Submitted address:", selectedAddress);

    // Show success message
    alert("Address submitted successfully!");
  }}
  className='p-3 bg-yellow-500 w-40 text-center rounded-xl font-bold m-auto mt-10 hover:bg-black hover:text-white cursor-pointer'
>
  Submit
</div>
    </>
  );
};

export default Address;

