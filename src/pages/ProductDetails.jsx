import { useContext } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import Newsletter from '../components/Newsletter';

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { image, name, brand, type, price, description, rating } =
    product || {};
  //   console.log(product, user.email);
  const { email } = user;
  console.log(email);

  const handleAddToCart = () => {
    const userProduct = {
      email: user.email,
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(userProduct);
    fetch('https://auto-maniac-server.vercel.app/cartProducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Awesome!',
            text: 'Product Added to Cart!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center my-20 mb-60 max-w-7xl mx-auto">
        <div className="flex flex-col items-center bg-transparent border-gray-200 rounded-lg shadow md:flex-row lg:min-w-[750px]  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
          />
          <div className="flex justify-between w-full flex-col md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-rose-500 dark:text-white">
                {name}
              </h5>
              <p className="mb-2 font-normal  dark:text-gray-400">
                <strong>Brand: </strong>
                {brand}
              </p>
              <p className="mb-4 font-normal  dark:text-gray-400">
                <strong>Type of Vehicle: </strong>
                {type}
              </p>
              <p className="mb-10 font-normal text-gray-500 dark:text-gray-400 text-justify">
                <i>{description}</i>
              </p>
              <div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-error w-1/4 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-6xl font-bold tracking-tight  dark:text-white flex items-center mr-4 mt-6 mb-6">
                <FaDollarSign></FaDollarSign>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default ProductDetails;
