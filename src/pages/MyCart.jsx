import { useLoaderData } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  console.log(currentUserEmail);
  const loadedCartProducts = useLoaderData();
  const currentUserCart = loadedCartProducts.filter(
    product => product.email === currentUserEmail
  );
  const [cartProducts, setCartProducts] = useState(currentUserCart);
  console.log(cartProducts);
  // subtotal calculation
  let subtotal = 0;
  cartProducts.forEach(p => {
    subtotal = subtotal + parseFloat(p.price);
  });
  console.log(subtotal);
  return (
    <div className="my-10">
      <div className="min-h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {/* map here */}
            {cartProducts?.map(product => (
              <CartProductCard
                key={product._id}
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              ></CartProductCard>
            ))}
          </div>
          {/* right side total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$1000</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${subtotal + 1000} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
