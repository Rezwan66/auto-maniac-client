import Swal from 'sweetalert2';

const AddProduct = () => {
  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = { image, name, brand, type, price, rating, description };
    console.log(product);
    fetch('https://auto-maniac-server.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Awesome!',
            text: 'Added product successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });
  };
  return (
    <div className="my-10 pb-10">
      <div>
        <div className="hero bg-transparent">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl underline font-semibold">
                Add Products Here!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 bg-opacity-20">
              <form
                onSubmit={handleAddProduct}
                className="card-body grid grid-cols-3"
              >
                {/* image */}
                <div className="form-control col-span-3">
                  <label className="label ">
                    <span className="label-text text-error">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Photo URL"
                    className="input input-bordered text-gray-900"
                    required
                  />
                </div>
                {/* name */}
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text text-error">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name of the product"
                    className="input input-bordered text-gray-900"
                    required
                  />
                </div>
                {/* brand */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-error">Brand</span>
                  </label>
                  <select
                    required
                    name="brand"
                    placeholder="Brand name"
                    className="input input-bordered text-gray-900"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select a brand
                    </option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Honda">Honda</option>
                  </select>
                </div>
                {/* type */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-error">Type</span>
                  </label>
                  <select
                    required
                    name="type"
                    placeholder="Type of product"
                    className="input input-bordered text-gray-900"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select a type
                    </option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sports Car">Sports Car</option>
                    <option value="Electric Vehicle (EV)">
                      Electric Vehicle (EV)
                    </option>
                    <option value="Car Part">Car Part</option>
                  </select>
                </div>
                {/* price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-error">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered text-gray-900"
                    required
                  />
                </div>
                {/* rating */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-error">Rating (1-5)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered text-gray-900"
                    required
                  />
                </div>
                {/* description */}
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text text-error">
                      Short description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Short description of the product"
                    className="input input-bordered text-gray-900"
                    required
                  />
                </div>
                {/* add product btn */}
                <div className="form-control mt-6 col-span-3">
                  <button type="submit" className="btn btn-accent text-white">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
