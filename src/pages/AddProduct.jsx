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
    console.log(image, name, brand, type, price, rating, description);
  };
  return (
    <div>
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
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* name */}
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name of the product"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* brand */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand</span>
                  </label>
                  <select
                    required
                    name="brand"
                    placeholder="Brand name"
                    className="input input-bordered"
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
                    <span className="label-text">Type</span>
                  </label>
                  <select
                    required
                    name="type"
                    placeholder="Type of product"
                    className="input input-bordered"
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
                  </select>
                </div>
                {/* price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* rating */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating (1-5)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* description */}
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Short description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Short description of the product"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* add product btn */}
                <div className="form-control mt-6 col-span-3">
                  <button type="submit" className="btn btn-primary">
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
