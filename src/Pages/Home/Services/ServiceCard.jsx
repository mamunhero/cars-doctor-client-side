import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
  const {_id, title, img, price} = service || {}
  return (
    <div className="card  bg-base-100 shadow-xl mb-20">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className=''>
      <div className='flex justify-between items-center'>
      <p className="text-orange-600 font-bold">Price:<span className="text-black font-normal"> {price}</span></p>
      <span className='text-orange-700'><FaArrowRight></FaArrowRight></span>
      </div>
        <div className="mt-6">
         <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
         </Link>
        </div>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;

