import productimgone from "../../../../src/assets/images/products/1.png"
import productimgtwo from "../../../../src/assets/images/products/2.png"
import productimgthree from "../../../../src/assets/images/products/3.png"
import productimgfour from "../../../../src/assets/images/products/4.png"
import productimgfive from "../../../../src/assets/images/products/5.png"
import productimgsix from "../../../../src/assets/images/products/6.png"
const Products = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h2 className="text-2xl font-semibold text-orange-600">Popular Products</h2>
       <h2 className="text-5xl font-semibold text-[#151515]">Browse Our Products</h2>
        <p className="text-base text-[#737373] font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgone} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Cools Led Light</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgtwo} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Cools Led Light</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgthree} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Car Air Filter</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgfour} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Cools Led Light</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgfive} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Cools Led Light</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img src={productimgsix} alt="Shoes" className="rounded-xl" />
          </figure>
        <div className="card-body items-center text-center">
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <h2 className="text-3xl font-semibold text-[#444]">Cools Led Light</h2>
          <p className="text-2xl text-orange-600">$20.00</p>
        </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="btn btn-outline btn-warning">More Products</button>
      </div>
    </div>
  );
};

export default Products;