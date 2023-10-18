import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import ProductCard from '../components/ProductCard';

const BrandProducts = () => {
  const products = useLoaderData();
  const { name } = useParams();
  console.log(name, products);
  return (
    <div className="my-10">
      <ProductSlider></ProductSlider>
      <h2 className="my-10 text-sm text-right">
        <i>
          Showing {products.length}{' '}
          {products.length === 1 ? 'Product' : 'Products'}
        </i>
      </h2>

      {products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products?.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-5xl">No products available</h2>
          <p>Add some products: </p>
          <Link to="/add" className="btn btn-accent">
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
