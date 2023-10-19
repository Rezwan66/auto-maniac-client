import { FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartProductCard = ({ product, cartProducts, setCartProducts }) => {
  const { _id, image, name, brand, type, price, rating, description } =
    product || {};

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        fetch(`https://auto-maniac-server.vercel.app/cartProducts/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remaining = cartProducts.filter(p => p._id !== _id);
              setCartProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={image}
          alt="product-image"
          className="w-full h-56 rounded-lg sm:w-40 object-cover"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{name}</h2>
            <p className="mt-1 text-xs text-gray-700">{brand}</p>
            <p className="mt-1 text-xs text-gray-700">{type}</p>
            <p className="mt-1 text-xs text-gray-500">Rating: {rating}</p>
            <p className="mt-3 text-xs text-gray-500 lg:max-w-[200px] italic">
              {description.length > 150 ? (
                <span>{description.slice(0, 150)}...</span>
              ) : (
                description
              )}
            </p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center space-x-4">
              <p className="text-xl flex items-center text-gray-900">
                <FaDollarSign></FaDollarSign>
                {price}
              </p>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  product: PropTypes.object,
  cartProducts: PropTypes.array,
  setCartProducts: PropTypes.func,
};

export default CartProductCard;
