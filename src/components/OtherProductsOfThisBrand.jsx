import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import '../styles/styles.css';
import ProductCard from './ProductCard';

const OtherProductsOfThisBrand = ({ products, brand }) => {
  return (
    <>
      <div className="my-20 mx-auto max-w-7xl swiper-container-wrapper">
        <h2 className="text-4xl font-semibold underline text-center mb-10">
          Other products from {brand}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* {featured?.map(item => (
                <ProductCard key={item._id} product={item}></ProductCard>
              ))} */}
        </div>
        <Swiper
          slidesPerView={4}
          rewind={true}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {products?.map(item => (
            <SwiperSlide key={item._id}>
              <Link to={`/product/${item._id}`} className="flex-1">
                <ProductCard product={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default OtherProductsOfThisBrand;
