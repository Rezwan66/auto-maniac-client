import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BrandCard from '../components/BrandCard';
import OurPrices from '../components/OurPrices';
import Newsletter from '../components/Newsletter';
import OurStats from '../components/OurStats';

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <Banner></Banner>
      {/* our brands */}
      <div className="my-10">
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
