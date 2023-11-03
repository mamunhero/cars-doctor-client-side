import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { json } from 'react-router-dom';
import axios from "axios";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(()=>{
    fetch(`http://localhost:5000/checkout?email=${user.email}`, {credentials: "include"})
    .then(response=> response.json())
    .then(data=> {
      // console.log(data);
      setBooking(data)
    })
      
    // axios.get(`http://localhost:5000/checkout?email=${user.email}`, {withCredentials: true})
    // .then(res=> {
    //   setBooking(res.data);
    // })
  },[user])
  const handelDeleteBookingBtn = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/checkout/${id}`, {
          method: "DELETE"
        })
        .then(response=>response.json())
        .then(data=> {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          const remaining = booking.filter(bookings=> bookings._id !== id );
          setBooking(remaining)
        })
      }
    })
  }
  const handelBookingConfirm = id => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "put",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({status: "confirm"})
    })
    .then(response=> response.json())
    .then(data=> {
      console.log(data);
      if (data.modifiedCount > 0) {
        // update state
        const remaining = booking.filter(bookings=> bookings._id !== id);
        const updated = booking.find(bookings=> bookings._id === id);
        updated.status = "confirm";
        const newBooking = [updated, ...remaining];
        setBooking(newBooking);
        Swal.fire(
          'Good Job!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div>
      <h2>Booking Now:{booking.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Eamil</th>
        <th>Date</th>
        <th>Time</th>
        <th>Price</th>
        <th>Advance</th>
        <th>Due</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        booking.map(bookingInfo=> <BookingRow
        key={bookingInfo._id}
        bookingInfo={bookingInfo}
        handelDeleteBookingBtn={handelDeleteBookingBtn}
        handelBookingConfirm={handelBookingConfirm}></BookingRow>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Booking;


