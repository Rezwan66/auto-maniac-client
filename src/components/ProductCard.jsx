import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product || {};
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div className="group h-[576px]">
      <div className="card bg-transparent shadow-xl">
        <figure>
          <img
            src={image}
            alt="cars"
            className="h-80 w-full object-cover group-hover:scale-110 transition"
          />
        </figure>
        <div className="card-body min-h-[129px]">
          <h2 className="card-title justify-center text-2xl text-rose-500">
            {name}
          </h2>
          {pathname === '/' ? (
            <></>
          ) : (
            <div>
              <div className="flex justify-between items-center my-5">
                <div>
                  <p>
                    <strong>Brand: </strong>
                    {brand}
                  </p>
                  <p>
                    <strong>Type: </strong>
                    {type}
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <strong>Price: </strong>
                    <FaDollarSign></FaDollarSign>
                    {price}
                  </p>
                  <p>
                    <strong>Rating: </strong>
                    {rating} stars
                  </p>
                </div>
              </div>
              <div className="card-actions justify-center gap-2">
                <Link to={`/product/${_id}`} className="flex-1">
                  <button className="btn btn-error btn-circle text-white w-full">
                    Details
                  </button>
                </Link>
                <Link to={`/edit/${_id}`} className="flex-1">
                  <button className="btn btn-error btn-circle text-white w-full">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
