import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [services, setServices] = useState([]);
  const params = useParams();
  const {title, _id, price, service_id, img} = services || {}
  useEffect(()=>{
    fetch(`http://localhost:5000/services/${params.id}`)
    .then(response=>response.json())
    .then(data=> setServices(data))
  },[params.id]);
  // console.log(services);
  const [due, setDue] = useState(0)
  const handleCheckoutService = event=> {
    event.preventDefault();
    const form = event.target;
    const first = form.first.value;
    const last = form.last.value;
    const date = form.date.value;
    const time = form.time.value;
    const service = form.service.value;
    const price = form.price.value;
    const advance = form.advance.value;
    const due = form.due.value;
    const phone = form.phone.value;
    const email = form.email.value;
    // console.log(form, first, last, date, time, service, price, advance, due, phone, email);
    const order = {
      // customerName : first, last,
      customerName: `${first} ${last}`,
      date,
      img,
      time,
      service: title,
      service:_id,
      price: price,
      advance,
      due,
      phone,
      email
    }
    console.log(order);
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(response=> response.json())
    .then(data=> {
      if (data.insertedId) {
        Swal.fire(
          'Good job!',
          'Your services is added!',
          'success'
        )
      }
    })
  }
  return (
    <div>
      <h2 className="text-3xl text-center text-orange-600 font-bold">Book Services: {title}</h2>
      <form onSubmit={handleCheckoutService} className="card-body">
        <div className="flex ml-5 gap-5 mb-5">
        <div className="form-control w-1/2">
          <input type="text" placeholder="First Name" name="first" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <input type="text" placeholder="Last Name" name="last" className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="flex ml-5 gap-5 mb-5">
        <div className="form-control w-1/2">
          <input type="date" placeholder="Date" name="date" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <input type="time" placeholder="Time" name="time" className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="flex ml-5 gap-5 mb-5">
        <div className="form-control w-1/2">
          <input type="text" placeholder="service id" name="service" defaultValue={service_id} className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <input type="text" placeholder="price" name="price" value={'$'+(price || '')} className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="flex ml-5 gap-5 mb-5">
        <div className="form-control w-1/2">
          <input  onChange={(e)=>setDue(price - parseInt(e.target.value))} type="text" placeholder="Advance Amount" name="advance" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <input type="text" placeholder="Due Amount" name="due" value={due} className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="flex ml-5 gap-5 mb-5">
        <div className="form-control w-1/2">
          <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-1/2">
          <input type="email" placeholder="email" name="email" className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-secondary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;

