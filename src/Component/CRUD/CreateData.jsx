import React, { useState } from 'react'
import AxiosInstance1 from '../Api/AxiosInstance1';
import { useNavigate } from 'react-router-dom';

const CreateData = () => {
    let navigate=useNavigate();
    let [state,setState]=useState({name:"",email:"",mobile:"",area:"",landmark:"",pincode:""});
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance1.post("/addresses", state);
      navigate("/addresses");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <form action="" className='flex flex-col w-90 gap-4 border m-auto mt-10 rounded-xl p-5 ' onSubmit={handleSubmit}>
            <input className=' p-2 rounded-sm  bg-green-100' type="text" name="name" placeholder='name' value={state.name} onChange={handleChange}/>
            <input className=' p-2 rounded-sm  bg-green-100' type="email" name="email" placeholder="email"  value={state.email} onChange={handleChange}/>
            <input className=' p-2 rounded-sm  bg-green-100' type="tel"  name="mobile" placeholder="mobile" value={state.mobile} onChange={handleChange}/>
            <input className=' p-2 rounded-sm  bg-green-100' type="area" name="area" placeholder="area" value={state.area} onChange={handleChange}/>
            <input className=' p-2 rounded-sm  bg-green-100' type="landmark"  name="landmark" placeholder="landmark" value={state.landmark} onChange={handleChange}/>
            <input className=' p-2 rounded-sm  bg-green-100' type="number" name="pincode" placeholder="pincode" value={state.pincode} onChange={handleChange}/>
            <button className='border w-40 m-auto p-3 rounded-xl bg-violet-600 text-white font-bold' type='submit'>Add address</button>
        </form>
      
    </div>
  )
}

export default CreateData
