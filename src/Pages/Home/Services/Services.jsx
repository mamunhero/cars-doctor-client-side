import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [service, setService] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/services")
    .then(response=> response.json())
    .then(data=> setService(data))
  },[])
  return (
    <div className="mt-5 space-y-5">
      <div className="text-center">
        <h2 className="font-semibold text-2xl text-orange-600">Service</h2>
        <h2 className="font-semibold text-5xl text-black">Our Service Area</h2>
        <p className="text-xl font-normal text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          service.map(service=> <ServiceCard
          key={service._id}
          service={service}></ServiceCard>)
        }
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-warning">More Services</button>
      </div>
    </div>
  
  );
};

export default Services;