import { useContext } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { _id, image, name, brand, type, price, description } = product || {};
  console.log(product, user.email);
  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:min-w-[750px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-6">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              <strong>Brand: </strong>
              {brand}
            </p>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
              <strong>Type of Vehicle: </strong>
              {type}
            </p>
            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
              <i>{description}</i>
            </p>
            <div>
              <button className="btn btn-accent">Add to Cart</button>
            </div>
          </div>
          <div>
            <h5 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center mr-4 mt-6">
              <FaDollarSign></FaDollarSign>
              {price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
