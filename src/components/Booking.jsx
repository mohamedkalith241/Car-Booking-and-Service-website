import React, { useState } from "react";

function Booking(){

  const [form,setForm] = useState({
    name:"",
    phone:"",
    car:"",
    service:"General Service",
    date:"",
    time:"10:00 AM"
  });

  // service prices
  const prices = {
    "General Service":"₹1500",
    "Oil Change":"₹900",
    "Full Service":"₹3500",
    "AC Repair":"₹2000",
    "Denting & Painting":"₹5000"
  };

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };



  return(
    <section id="booking" className="booking">

      <h2>Schedule Your Car Service</h2>

      <div className="booking-container">

        {/* left */}
        <div className="booking-info">
          <h3>Why Service With Us?</h3>
          <ul>
            <li>✔ Experienced Mechanics</li>
            <li>✔ Genuine Spare Parts</li>
            <li>✔ Same Day Delivery</li>
            <li>✔ Free Pickup & Drop</li>
          </ul>
        </div>

        {/* right */}
        <div className="booking-form">

         <input 
  type="text"
  name="name"
  placeholder="Customer Name"
  value={form.name}
  onChange={handleChange}
    autoComplete="off"
/>

<input 
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
    autoComplete="off"
/>

<input 
  type="text"
  name="car"
  placeholder="Car Model"
  value={form.car}
  onChange={handleChange}
    autoComplete="off"
/>


<select name="service"value={form.service}onChange={handleChange}>
            <option style={{background:"#ff4d00"}}>General Service</option>
            <option style={{background:"#ff4d00"}}>Oil Change</option>
            <option style={{background:"#ff4d00"}}>Full Service</option>
            <option style={{background:"#ff4d00"}}>AC Repair</option>
            <option style={{background:"#ff4d00"}}>Denting & Painting</option>
          </select>

          <div className="price">
            Estimated Price: {prices[form.service]}
          </div>

         <input 
  type="date"
  name="date"
  value={form.date}
  onChange={handleChange}
/>

<select 
  name="time"
  value={form.time}
  onChange={handleChange}
>

            <option style={{background:"#ff4d00"}}> 10:00 AM</option>
            <option  style={{background:"#ff4d00"}}>12:00 PM</option>
            <option  style={{background:"#ff4d00"}}>2:00 PM</option>
            <option  style={{background:"#ff4d00"}}>4:00 PM</option>
            <option  style={{background:"#ff4d00"}}>6:00 PM</option>
          </select>

          <button>Confirm Booking</button>

        </div>

      </div>
    </section>
  );
}

export default Booking;