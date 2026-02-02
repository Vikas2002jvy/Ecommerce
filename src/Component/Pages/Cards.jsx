import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosInstance } from '../Api/AxiosInstance1';
const Cards = () => {
  const [state, setState] = useState([]);
  const fetchApi = async () => {
    try {
      const { data } = await AxiosInstance.get("/products");
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>

      <div className="flex justify-center flex-wrap gap-6 p-4">
        {
          state.map(({ image, title, id }) => (
            <div key={id} className="w-64 border rounded-xl p-4 flex flex-col items-center gap-3 shadow-md hover:shadow-xl transition">
              <img src={image} alt={title} className="w-40 h-40 object-contain"/>
              <b className="text-center">{title.slice(0, 20)}</b>
              <Link to={`/product/${id}`}>
                <button className="bg-blue-500 px-4 py-2 rounded-xl text-white hover:bg-blue-600"> Read More </button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
