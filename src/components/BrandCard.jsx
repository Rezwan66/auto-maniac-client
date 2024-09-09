import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { brand: name, image } = brand;
  return (
    <div className="group">
      <Link to={`/brand/${name}`}>
        <div className="card bg-transparent">
          <figure>
            <img
              className="h-24 w-24 rounded-full object-cover group-hover:scale-110 transition"
              src={image}
              alt="brands"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center text-white">
              {name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
