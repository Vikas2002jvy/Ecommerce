import { Link, Links, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosInstance1 from "../Api/AxiosInstance1";

const UpdateAddress = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const address = location.state?.address;

    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        area: "",
        landmark: "",
        pincode: ""
    });


    useEffect(() => {
        if (address) {
            setState({
                name: address.name,
                email: address.email,
                mobile: address.mobile,
                area: address.area,
                landmark: address.landmark,
                pincode: address.pincode
            });
        }
    }, [address]);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await AxiosInstance1.put(`/addresses/${address.id}`, state);

        navigate("/addresses")
    };

    return (
        <div className="flex justify-center mt-10 ">
            <form className="flex flex-col w-96 gap-4 border border-gray-400 p-5 rounded-xl bg-blue-100" onSubmit={handleSubmit}>
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="name" value={state.name} onChange={handleChange} />
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="email" value={state.email} onChange={handleChange} />
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="mobile" value={state.mobile} onChange={handleChange} />
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="area" value={state.area} onChange={handleChange} />
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="landmark" value={state.landmark} onChange={handleChange} />
                <input className=" p-3 rounded-sm bg-gray-100 border border-gray-300" name="pincode" value={state.pincode} onChange={handleChange} />
                <button className="bg-orange-500 text-white py-2 rounded w-40 m-auto hover:bg-red-600" type="submit">
                    Update Address
                </button>
            </form>
        </div>
    );

}

export default UpdateAddress;
