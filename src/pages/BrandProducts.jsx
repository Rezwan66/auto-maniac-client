import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import ProductCard from '../components/ProductCard';

const BrandProducts = () => {
  const products = useLoaderData();
  const { name } = useParams();
  console.log(name, products);
  return (
    <div className="mb-10 min-h-screen">
      <ProductSlider></ProductSlider>
      <div className="max-w-7xl mx-auto">
        <h2 className="my-10 text-center underline text-4xl font-semibold">
          {name} Products
        </h2>
        <h2 className="mb-5 text-sm text-right text-rose-500">
          <i>
            Showing {products.length}{' '}
            {products.length === 1 ? 'Product' : 'Products'}
          </i>
        </h2>

        {products.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {products?.map(product => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl mb-6">No products available</h2>
            <p>
              Add some products right now: 👉{' '}
              <Link to="/add" className="btn btn-accent text-white">
                Add Products
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
