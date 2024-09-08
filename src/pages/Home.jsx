import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BrandCard from '../components/BrandCard';
import OurPrices from '../components/OurPrices';
import Newsletter from '../components/Newsletter';
import OurStats from '../components/OurStats';
import { useEffect, useState } from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://auto-maniac-server.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <Banner></Banner>
      {/* our products */}
      {loading ? (
        <div className="text-center mt-20">
          <span className="loading w-20 loading-spinner text-success"></span>
          <span className="loading w-20 loading-spinner text-warning"></span>
          <span className="loading w-20 loading-spinner text-secondary"></span>
        </div>
      ) : (
        <FeaturedProducts />
      )}
      {/* our brands */}
      <div className="my-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold underline text-center mb-10">
          Our Featured Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands?.map(brand => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      {/* stat */}
      <OurStats></OurStats>
      {/* our prices */}
      <OurPrices></OurPrices>
      {/* our newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
